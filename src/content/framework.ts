// DR-FW-001 · The Accountability Line · v0.1 · draft for the lab's review.
// Source: DORA Research Brand Book v2.0, chapter 5.

export const framework = {
  id: 'DR-FW-001',
  version: '0.1 · draft',
  date: '2026-09-13',
  evidence: 'founder interview · beta accept and decline log',
  title: 'The Accountability Line',
  oneLine: 'Agents take the work you can undo. People keep the work you have to answer for.',
  thesis: [
    'If you run AI agents, you are already delegating. Write down where the line is. This framework proposes one. It sorts operational work into four tiers by three questions: how much can go wrong if the agent is wrong, how cheaply it can be undone, and who is answerable afterward. Agents take the lower tiers outright and earn their way toward Silent with evidence. People keep everything where an error is expensive, irreversible, or lands on a person.',
    'The line moves as tooling and trust mature, but only when a named person decides it should, and the decision is written down. Tiers are numbered by stakes. A task is promoted toward Silent and demoted toward Reserved; the framework never says up or down.',
  ],
  tiers: [
    {
      n: 'Tier 1',
      name: 'Silent',
      definition: 'Work an agent does on its own and does not need to mention. If it gets this wrong, the mistake is contained, the next run overwrites it, and nobody outside the system would notice. Its output is checked in aggregate, on a schedule, not item by item.',
      test: 'If the agent gets this wrong, does anyone need to be told, and does the next run overwrite the mistake? No and yes: Silent. A person can check any record against its source and overrule it. The record is not the truth; the sources are.',
      take: [
        'Reading and correlating signals: logs, deploys, alerts, tickets, pull requests, meeting notes, calendars.',
        'Building and keeping the timeline: what happened, in what order, what changed between.',
        'Linking related items: this pull request to that ticket to that incident to the meeting where it was decided.',
      ],
      keep: [
        'Deciding what the agent may read at all. Scope of access is a Reserved decision.',
        'A periodic audit of the silent work: what was linked, ignored, or linked wrongly. Monthly is enough at the start.',
        'Nothing per item. That is the point of the tier.',
      ],
    },
    {
      n: 'Tier 2',
      name: 'Reported',
      definition: 'Work an agent does on its own and then tells a named person about, with the evidence and the undo path. Reversible in minutes by someone with ordinary access. The agent is applying a rule a person wrote, not judging a situation nobody anticipated.',
      test: 'Can a named person with ordinary access undo this in minutes, and is the agent applying a rule that person wrote? Both yes: Reported.',
      take: [
        'Opening a ticket with the evidence attached when a condition someone defined is met.',
        'Adding history where the work already is: the prior incident on a new incident channel, the original decision on the pull request that reverses it.',
        'Assigning an unowned item by the published rota. Paging the on-call when a signal meets the team’s existing paging rule.',
        'Holding a deploy, where the hold can be released with one click by the named on-call and the report reaches them the moment it is placed.',
      ],
      keep: [
        'Reading the report. If reports go unread, the tier has quietly become Silent without anyone deciding that, and someone must say so.',
        'Owning the ticket, the page, or the hold once it exists. The agent hands off; it does not own the outcome.',
        'Reverting anything the agent got wrong, without justification, so the rule improves.',
        'Writing and maintaining the rules the agent applies.',
      ],
    },
    {
      n: 'Tier 3',
      name: 'Proposed',
      definition: 'Work where the agent prepares the decision and a named person makes it. The agent brings the evidence, the options, what it would do, what that would cost to undo, and who has the authority to say yes.',
      test: 'Does undoing this take a rollback, a customer notice, or another team’s time, or does it change what a person is responsible for? Either yes: a named person decides, and the proposal sits on the record next to their name.',
      take: [
        'Recommending a hold, a rollback, a flag flip, a scaling or config change, with the expected effect and the reversal path spelled out.',
        'Recommending a reassignment or a priority change, with the current owner’s load and the dependency the roadmap does not show.',
        'Proposing to page a specific person for a condition no rule covers, to a named escalation contact.',
        'Drafting the incident review in the four-part shape: impact, conditions, what changes, where else.',
      ],
      keep: [
        'The decision, made by a person with the authority to make it, with their name on it. Not “engineering”.',
        'The right to decline without a reason. The decline is recorded so the lab can learn from it.',
        'Judging afterward whether the recommendation was right. That judgment is the evidence that moves a task toward Silent, or keeps it where it is.',
      ],
    },
    {
      n: 'Tier 4',
      name: 'Reserved',
      definition: 'Work that stays with people. Either the cost of a wrong call lands on someone who did not make it and cannot be undone, or the right answer depends on things no system records: trust, intent, a promise made in a corridor. Agents may be asked for evidence here. They do not propose.',
      test: 'Would you be comfortable telling a customer, an employee, or an auditor that the agent decided? No: people only.',
      take: [
        'Only what they are asked for: the history, the record, an answer to a direct factual question. No unsolicited recommendation.',
        'Recording the decision after it is made, with the stated reasoning, so that six months later the organization can remember why.',
      ],
      keep: [
        'Hiring, firing, performance, compensation, anything that touches a person’s standing.',
        'Deleting production data, migrations without a tested reversal, anything that moves customer money.',
        'Security and access, including what this agent may read. Commitments to customers, regulators, investors, and the board. Any message sent outside the team.',
        'Attribution of blame. The agent describes conditions; people decide consequences. Changing this framework is itself a Reserved decision.',
      ],
    },
  ],
  statuses: [
    { name: 'Held', body: 'The tier is right but the safety net is not there yet: thin tests, one person on call, a pipeline with no pause gate. The task waits.' },
    { name: 'Shadow', body: 'The agent logs what it would have done beside what the person did. The disagreement rate, weighted by what each disagreement would have cost, is the promotion evidence.' },
    { name: 'Live', body: 'The action runs at its tier. Every action appears in the next brief with the rule that fired and who wrote it. Demotion is one message.' },
  ],
  principles: [
    { head: 'Reversibility before capability.', body: 'The question is never whether the agent can do the work. It is what it costs to undo on the day the agent is wrong. The harder the undo, the higher the tier, however confident the agent is.' },
    { head: 'Every action has a named person.', body: 'Not a team, not a role, a name. Delegate actions, never accountability. “The agent did it” is not a line in an incident review.' },
    { head: 'People write the rule; the agent applies it.', body: 'If it is not written down, the agent does not have it. Judgment about a situation nobody anticipated stays Proposed. When unsure, report.' },
    { head: 'Promotion is earned in shadow and is slow. Demotion is instant.', body: 'A task moves toward Silent only on the organization’s own log of agreements and disagreements, never on a vendor’s benchmark or how the demo felt. It moves toward Reserved on one bad outcome and anyone on the team saying so.' },
    { head: 'Conversations with people stay with people, and the limits fit the organization.', body: 'The agent tells a manager that work is drifting; the manager talks to the engineer. Thin tests, a small rotation, or one production database mean delegating less than the line allows.' },
  ],
  zoraToday: [
    'The record is Silent. Every recommendation is Proposed. She takes no action.',
    'She reads meetings, tickets, pull requests, CI, deploys, alerts, and docs into one record with a source on every entry.',
    'She delivers the finished brief in the four-part shape and names the person who should decide. Where she would have acted, the brief says so, with the evidence.',
    'Every accept and decline is recorded with the decider’s name. That record is the only thing that can promote a task later.',
    'She never talks to an engineer about their own work. That conversation belongs to their manager.',
  ],
  zoraNext: [
    'Add history where the work already is. Reported, and the first action switched on.',
    'Open a ticket when a written condition is met. Reported. Page on the published rule; propose for anything unwritten.',
    'Hold a deploy, per customer, only after Shadow and only where release is one click from the named on-call. Reported once promoted; Proposed until then.',
    'Assign by rota. Reported. Moving work between named people stays Proposed.',
    'Each action runs Shadow before Live and appears in the next brief. The lab publishes the Reported-tier benchmark; each customer’s tier map stays with that customer.',
  ],
  open: 'Paging is not reversible. Some pipelines have no pause gate. Rare actions may never reach a promotion count. A wrong link in the silent record can produce a well-evidenced wrong proposal. Agent-to-agent chains sit in the highest tier of any link. Rule ownership when the author leaves. Regulated industries where the law draws Reserved. And the floor itself: what “ready for Reported” means, in test coverage, observability, and people on call, is not yet defined, and the lab says so rather than guess.',
} as const

export const artifacts = [
  {
    id: 'DR-FW-001',
    type: 'Framework',
    title: 'The Accountability Line',
    status: 'v0.1 · draft for review',
    date: '2026-09-13',
    summary: 'Which operational work agents should take and which people should keep, in four tiers with a placement test for each.',
    href: '/research#dr-fw-001',
  },
  {
    id: 'DR-BM-001',
    type: 'Benchmark',
    title: 'The Reported-tier benchmark',
    status: 'not yet published',
    date: 'when the shadow log supports it',
    summary: 'How often the agent’s call was the one the person made, measured per action on each organization’s own log. Published with sample size and method, or not at all.',
    href: '',
  },
] as const
