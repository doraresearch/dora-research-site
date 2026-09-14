import type { ReactNode } from 'react'

// The night brief specimens. Demo data for one fictional organization, in the four-part order
// (DESIGN.md §8.2). Every claim in a brief resolves to a record in its evidence rail.

export type Evidence = { source: string; time: string; owner: string; record: string }
export type FollowUp = { q: string; a: string }
export type BriefSection = { label: string; body: ReactNode }
export type Brief = {
  id: 'night' | 'projects' | 'risk'
  tab: string
  question: string
  caption: string
  header: string
  title: string
  sections: BriefSection[]
  evidence: Evidence[]
  followups: FollowUp[]
}

const Hold = ({ children }: { children: ReactNode }) => <span className="text-rose">{children}</span>

export const BRIEF_DATE = '2026-09-10'

export const briefs: Brief[] = [
  {
    id: 'night',
    tab: 'Last night',
    question: 'What happened last night?',
    caption: 'The night brief · orders-service, eu-west-1',
    header: `Night brief · ${BRIEF_DATE} · 06:00 · 8 records`,
    title: 'EU order writes failed for 14 minutes overnight. Mitigated at 02:55, and the same pattern is queued for tonight.',
    sections: [
      {
        label: 'Impact and outcome',
        body: 'Between 02:41 and 02:55 every write to the orders table in eu-west-1 was blocked. Reads carried on, so the service-wide error rate peaked at 34% while checkout writes timed out at 30 seconds. Around 180 checkout attempts failed. About 140 were retried by the client and completed by 03:10; the remaining 40 are listed in ORD-1187 for reconciliation this morning. No data was lost. Whether any customer was charged without an order, or charged again on retry, is unverified: the payment provider is not among my sources, and ORD-1187 should settle that first. PagerDuty paged Priya Nair at 02:44; she found the blocking index build at 02:54 and canceled it, and the service recovered within the minute. Support has no tickets yet and nothing has gone out to customers.',
      },
      {
        label: 'Conditions',
        body: 'The 02:30 unattended deploy of orders-service 2.31.0 rolled the image out first and started the migration job at 02:41. Migration 0187 adds an index on orders.customer_id. It was written without CONCURRENTLY, so Postgres held a SHARE lock on orders for as long as the build ran: every insert, update, and delete waited, and reads went through. On staging that table has 40,000 rows and the index built in under a second. In production it has 61 million rows, and the build held the lock for 14 minutes before Priya canceled it. The index does not exist, and 0187 is still pending. The PR was reviewed and approved by two people. The migration checklist does not mention lock behavior on large tables, and CI has no step that flags non-concurrent index creation. The 02:30 window exists so that low-risk changes go out without anyone watching, which is why nobody was watching at 02:41.',
      },
      {
        label: 'What we change',
        body: 'I recommend three changes, all small. First, a CI check that fails any migration adding an index without CONCURRENTLY to a table it did not create, or running a CONCURRENTLY build inside a transaction block, which Postgres refuses. No threshold and no data feed; it is a regex and about ten lines. Second, one line added to the migration checklist: state the production row count and the expected lock. Third, any migration touching orders, customers, or payments runs in the 10:00 attended window with the author present, not at 02:30. None of this needs new budget or new tooling. Staging cannot catch this class of problem at 40,000 rows, and I am not proposing we rebuild it to match production. I have not opened tickets or changed anything; who owns each of these is your call. Platform owns CI, so I would start with the platform lead.',
      },
      {
        label: 'Where else',
        body: (
          <>
            The same conditions exist in two places.{' '}
            <Hold>
              Migration 0043 in billing-service, merged yesterday and queued for tonight’s 02:30 window, builds an index on
              invoices.account_id without CONCURRENTLY.
            </Hold>{' '}
            That table has 22 million rows in production, so tonight would look like last night. I would hold it or move it to the
            attended window; that is your decision, not mine. Second, the analytics repo runs its own migrations through Airflow at
            01:00 and never passes through orders CI, so the new check would not reach it. Those tables are read-mostly and the
            exposure is smaller, but the review gap is the same. Two reviewers approved 0187 and would have approved 0043; the checklist
            is the exposure, not any one person.
          </>
        ),
      },
    ],
    evidence: [
      { source: 'GitHub', time: '2026-09-09 · 16:18', owner: 'Tomas · Billing', record: 'PR #4730 merged to billing-service: CREATE INDEX on invoices.account_id without CONCURRENTLY; approved by two reviewers.' },
      { source: 'Linear', time: '2026-09-09 · 16:20', owner: 'Tomas · Billing', record: 'BIL-402: migration 0043 merged and queued for the 2026-09-11 02:30 unattended window.' },
      { source: 'GitHub', time: '02:30', owner: 'Platform', record: 'Nightly workflow began the orders-service 2.31.0 deploy; the image rolled out first, and the migration job for 0187 (PR #4712, approved by two reviewers on 2026-09-09) started at 02:41.' },
      { source: 'Datadog', time: '02:41', owner: 'Reliability', record: 'orders-service eu-west-1: p99 for POST /orders rose from 310 ms to over 30 s at the statement timeout; 5xx rate reached 34% by 02:43.' },
      { source: 'PagerDuty', time: '02:44', owner: 'Priya Nair · on call', record: 'Incident 2291 triggered on “orders-service error rate above 5% for 3 minutes”; acknowledged by Priya Nair at 02:46.' },
      { source: 'Slack', time: '02:54', owner: 'Priya Nair', record: '#inc-2291, Priya Nair: pg_locks shows CREATE INDEX on orders holding a SHARE lock since 02:41, canceling it now.' },
      { source: 'Datadog', time: '02:55', owner: 'Reliability', record: '5xx rate under 0.2% by 02:55:40; p99 back to 340 ms by 02:56. No further alerts.' },
      { source: 'Linear', time: '03:12', owner: 'Priya Nair', record: 'ORD-1187 created by Priya Nair: reconcile 40 checkout attempts that failed between 02:41 and 02:55, priority high, unassigned.' },
    ],
    followups: [
      {
        q: 'If I hold billing 0043 tonight, what slips, and who needs to know?',
        a: 'Nothing customer-facing slips. 0043 backs the invoice search that ships with the billing release on 2026-09-17; the index can be built with CONCURRENTLY in Friday’s 10:00 window and still land four days early. Two people need to know: Priya, who is on call tonight and would otherwise be paged at 02:44 again, and Tomas, who owns the billing release. I have not told either. Records: Linear BIL-402, GitHub PR #4730.',
      },
      {
        q: 'Which of the 40 failed checkouts are enterprise accounts, and has anyone told their account manager?',
        a: 'Six of the 40 are on enterprise plans, all in the EU region; the largest is Halden Systems with 11 items. Nobody has been told: support has no ticket and no account manager was paged. ORD-1187 lists the 40 by account. I would let the account managers hear it from us before 09:00. Whether to send anything is your call and theirs.',
      },
      {
        q: 'How many migrations in the last six months would the new CI check have caught?',
        a: 'Two, on the record: 0187 last night and 0043 queued tonight. The rule would also match 0112 and 0119, run in March in the analytics repo on tables under 200,000 rows and finished in seconds: false positives by outcome, not by rule, and out of reach anyway, since that repo never passes through orders CI. The rule is cheap enough that I would keep it strict. Records: GitHub migrations 0187, billing 0043, analytics 0112 and 0119.',
      },
    ],
  },
  {
    id: 'projects',
    tab: 'Projects',
    question: 'Where are we with this project, and why?',
    caption: 'The project brief · Atlas release',
    header: `Project brief · Atlas release · ${BRIEF_DATE} · 06:00 · 8 records from 2026-09-09`,
    title: 'Atlas ships the web beta on Friday. Mobile is held on SDK-418, and the reason is on the record.',
    sections: [
      {
        label: 'Impact and outcome',
        body: 'The customer commitment holds. Read-only audit history is in Friday’s web beta because a design partner said it is required before they connect a production workspace. Export stays out. Mobile does not ship Friday: it depends on the authentication SDK, SDK-418, which the platform team owns and which still fails two release checks. Elena recorded the split at 15:30 yesterday; owners and dates are updated in Linear.',
      },
      {
        label: 'Conditions',
        body: 'The scope changed at 08:12 on customer evidence, and the new scope pulled in an SDK the release plan did not show. Web could continue on its own; mobile picked up an external critical path the same morning. PR #8421 integrates the SDK and failed two integration checks at 10:44, and the SDK candidate raised authentication errors on staging to 2.8% at 11:32. None of this was hidden. It was spread across five systems, and nobody had all five in front of them until the go/no-go.',
      },
      {
        label: 'What we change',
        body: 'Two changes, both small. First, when scope changes on customer evidence, the dependency check runs the same morning, not at go/no-go; I can draft it from the ticket links and the CODEOWNERS file. Second, someone from the platform team sits in the Atlas standup for the two weeks SDK-418 is on the critical path. I have not asked them; Ravi is the person to ask.',
      },
      {
        label: 'Where else',
        body: (
          <>
            The same shape exists in Beacon: the Q4 reporting scope depends on the export service that Atlas just deferred, and no ticket
            links the two. <Hold>If export stays out of the beta, Beacon’s date moves.</Hold> Nobody has said so yet. That conversation
            belongs to Elena and the Beacon lead, not to me.
          </>
        ),
      },
    ],
    evidence: [
      { source: 'Dovetail', time: '08:04', owner: 'Maya · Product', record: 'Design partner synthesis: “Audit history is required before we connect a production workspace.” Export is not mentioned.' },
      { source: 'Slack', time: '08:12', owner: 'Elena · Product', record: '#atlas-planning, Elena: read-only history moves into the Friday beta; export remains outside the private beta.' },
      { source: 'Linear', time: '08:14', owner: 'Maya · Product', record: 'ATLAS-218 added to the Friday release with the narrowed acceptance criteria.' },
      { source: 'Linear', time: '08:26', owner: 'Ravi · Auth Platform', record: 'SDK-418 marked as blocking the mobile release.' },
      { source: 'GitHub', time: '10:44', owner: 'Sam · Mobile', record: 'PR #8421 integrates SDK-418; two mobile integration checks fail against the updated authentication flow.' },
      { source: 'Datadog', time: '11:32', owner: 'Reliability', record: 'Staging authentication error rate rose to 2.8% after the latest SDK candidate was deployed.' },
      { source: 'Slack', time: '15:30', owner: 'Elena · Product', record: '#atlas-release, Elena: ship the web beta Friday; hold mobile until SDK-418 and the release checks clear. Owners and dates updated in Linear at 15:32.' },
      { source: 'Linear', time: '15:32', owner: 'Beacon lead', record: 'BEACON-77 Q4 reporting: acceptance criteria name export-service; no link to ATLAS-218 or to the export deferral.' },
    ],
    followups: [
      {
        q: 'What does the design partner actually need on Friday?',
        a: 'Read-only audit history in the web app, nothing else. Their words at 08:04: audit history is required before they connect a production workspace. Export was never in that sentence; it was added to the ask internally in July. Record: Dovetail synthesis, 08:04.',
      },
      {
        q: 'If SDK-418 lands Thursday, can mobile still make Friday?',
        a: 'No. Even with the SDK merged Thursday, the mobile release checks take a full run of about six hours and the store review has not returned in under a day this year. Friday for mobile stopped being possible when no candidate had passed by last night. The earliest honest date is Tuesday, and only if PR #8421 passes on the next candidate. Records: GitHub PR #8421 checks; store review history, 2026.',
      },
      {
        q: 'Who decided export stays out, and where is that written?',
        a: 'Elena, at 08:12 in #atlas-planning, mirrored to ATLAS-218 at 08:14. The reason is attached: the partner’s requirement was audit history, and export would have added a second team to the critical path.',
      },
    ],
  },
  {
    id: 'risk',
    tab: 'Risk',
    question: 'Where are we most at risk?',
    caption: 'The risk brief · billing-service, atlas-web, the on-call rota',
    header: `Risk brief · ${BRIEF_DATE} · 06:00 · 6 records`,
    title: 'Three exposures this week. One is tonight, one is Friday, one is structural.',
    sections: [
      {
        label: 'Impact and outcome',
        body: 'Ranked by what it costs if it goes wrong and how fast it can be undone. First, tonight: billing migration 0043 is queued for the 02:30 window and repeats last night’s conditions on a 22-million-row table. Second, Friday: the Atlas web beta ships with the audit-history endpoint at 40% test coverage and no load test against production volumes. Third, structural: Priya is the only person on call this week, and both of the above land in her rotation.',
      },
      {
        label: 'Conditions',
        body: '0043 was approved before last night’s incident by the same checklist that missed 0187. The audit-history endpoint moved into Friday’s scope at 08:12 yesterday, and the test plan was cut to make the date. The on-call rotation has had one person on it since Marcus left on 2026-08-14; the rota still lists three names, two of which are no longer at the company.',
      },
      {
        label: 'What we change',
        body: (
          <>
            <Hold>Hold 0043 to the attended window, or accept the risk knowingly; that is yours to decide, and I would decide it before 17:00.</Hold>{' '}
            Run the audit-history load test today against a production snapshot; it takes ninety minutes and Sam can run it. Fix the rota to the
            people who actually exist, and add a second name for this week. I can draft the rota change; a person has to approve it.
          </>
        ),
      },
      {
        label: 'Where else',
        body: 'The same checklist gap covers the analytics repo, which runs its own migrations through Airflow at 01:00 and never passes through orders CI. The exposure is smaller and the tables are read-mostly, but the review gap is the same. Two other services have a single owner in CODEOWNERS; neither is in a release this week.',
      },
    ],
    evidence: [
      { source: 'Slack', time: '2026-09-09 · 08:12', owner: 'Elena · Product', record: '#atlas-planning, Elena: read-only audit history moves into the Friday web beta; the test plan is trimmed to the read paths to make the date.' },
      { source: 'GitHub', time: '2026-09-09 · 16:18', owner: 'Tomas · Billing', record: 'PR #4730 merged to billing-service: CREATE INDEX on invoices.account_id without CONCURRENTLY; approved by two reviewers.' },
      { source: 'Linear', time: '2026-09-09 · 16:20', owner: 'Tomas · Billing', record: 'BIL-402: migration 0043 merged and queued for the 2026-09-11 02:30 unattended window.' },
      { source: 'GitHub', time: '2026-09-09 · 18:05', owner: 'Sam · Atlas web', record: 'Actions coverage report, atlas-web: audit-history endpoint at 40% line coverage; no load test stage in the pipeline.' },
      { source: 'PagerDuty', time: '06:00', owner: 'Priya Nair · on call', record: 'On-call schedule “Core”: one active responder this week (Priya Nair). Two listed responders have deactivated accounts.' },
      { source: 'GitHub', time: '06:00', owner: 'Platform', record: 'CODEOWNERS: notifications-service and export-service list a single owner each. Neither is scheduled for release this week.' },
    ],
    followups: [
      {
        q: 'What would you hold, if it were yours to hold?',
        a: '0043. It is the only one of the three where the undo is a click and the cost of being wrong is a repeat of last night. I would not hold Friday; the beta is read-only and the partner is waiting. I would fix the rota before either.',
      },
      {
        q: 'How long has the rota been wrong?',
        a: 'Two dates. The rota first listed a departed responder on 2026-07-20, when the first of the two accounts was deactivated; it dropped to one active responder on 2026-08-14, the day Marcus’s account was deactivated. PagerDuty kept the schedule; nobody edited it. Eleven pages since 2026-08-14 went to Priya that the rota says should have gone to someone else. Record: PagerDuty schedule history, incidents 2260 to 2291.',
      },
      {
        q: 'Who owns the analytics migrations?',
        a: 'Nobody, on paper. The Airflow DAG was written by a contractor in 2025 and the CODEOWNERS entry is empty. Data engineering runs it in practice; Lena is the person who last changed it, on 2026-07-02. Record: GitHub analytics-pipelines, commit history.',
      },
    ],
  },
]
