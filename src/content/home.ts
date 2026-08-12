export const scenarioMetrics = [
  {
    numeral: '05',
    label: 'source systems',
    note: 'Meetings · Linear · GitHub · Docs · Datadog',
    accent: true,
  },
  {
    numeral: '04',
    label: 'critical moments',
    note: 'Scope · dependency · risk · decision',
    accent: false,
  },
  {
    numeral: '01',
    label: 'decision brief',
    note: 'What changed · why · owner · next move',
    accent: true,
  },
] as const

export const workdayChapters = [
  {
    id: 'scope',
    start: 0,
    time: '08:12',
    label: 'Scope',
    eyebrow: 'ATLAS · SCOPE UPDATED',
    title: 'Enterprise SSO enters Friday’s release.',
    body: 'Customer evidence changed the beta requirement. Export stays out; read-only history moves in.',
    decision: 'Maya · 10:00 · confirm narrowed scope',
    changed: 'A design-partner requirement moved read-only audit history into the Friday beta.',
    matters: 'The team can protect the customer commitment without pulling export into the release.',
    evidence: [
      {
        source: 'Dovetail',
        time: '08:04',
        detail: 'Enterprise SSO requested',
        owner: 'Maya · Product',
        relationship: 'Customer evidence → scope',
        excerpt: '“Audit history is required before we connect a production workspace.”',
      },
      {
        source: 'Planning',
        time: '08:12',
        detail: 'Export stays out of beta',
        owner: 'Elena · Product',
        relationship: 'Scope decision',
        excerpt: 'Read-only history moves in. Export remains outside the private beta.',
      },
      {
        source: 'Linear',
        time: '08:14',
        detail: 'Read-only history added',
        owner: 'Maya · Product',
        relationship: 'Decision → delivery plan',
        excerpt: 'ATLAS-218 added to the Friday release with the narrowed acceptance criteria.',
      },
    ],
    tone: 'signal',
  },
  {
    id: 'dependency',
    start: 13,
    time: '08:26',
    label: 'Dependency',
    eyebrow: 'ATLAS · DEPENDENCY FOUND',
    title: 'SDK-418 now blocks mobile.',
    body: 'The scope change depends on an auth SDK owned by another team. Friday is still possible, but the path changed.',
    decision: 'Sam · 11:30 · confirm SDK owner',
    changed: 'The new scope depends on an authentication SDK owned by the platform team.',
    matters: 'Web can continue independently, but the mobile release now has an external critical path.',
    evidence: [
      {
        source: 'Linear',
        time: '08:26',
        detail: 'SDK-418 blocks mobile',
        owner: 'Ravi · Auth Platform',
        relationship: 'Dependency → mobile gate',
        excerpt: 'Mobile remains blocked until the auth SDK lands and clears the release gate.',
      },
      {
        source: 'Slack',
        time: '08:28',
        detail: 'Auth Platform owns the SDK',
        owner: 'Ravi · Auth Platform',
        relationship: 'Conversation → ownership',
        excerpt: 'Ravi confirms Auth Platform owns SDK-418 and can review before 11:30.',
      },
      {
        source: 'GitHub',
        time: '08:31',
        detail: 'PR #8421 opened',
        owner: 'Sam · Mobile',
        relationship: 'Dependency → implementation',
        excerpt: 'PR #8421 integrates the new SDK and adds the mobile release checks.',
      },
    ],
    tone: 'signal',
  },
  {
    id: 'risk',
    start: 26,
    time: '11:40',
    label: 'Risk',
    eyebrow: 'ATLAS · ATTENTION NEEDED',
    title: 'Friday is at risk unless the auth SDK lands by 13:00.',
    body: 'SDK-418 blocks mobile; PR #8421 still fails the release gate.',
    decision: 'Maya · 13:00 · hold go/no-go',
    changed: 'The dependency, failing checks, and authentication errors now converge on one release gate.',
    matters: 'The customer commitment can still be kept if web and mobile are decoupled before go/no-go.',
    evidence: [
      {
        source: 'Linear',
        time: '08:26',
        detail: 'SDK-418 blocks mobile',
        owner: 'Ravi · Auth Platform',
        relationship: 'Dependency → release gate',
        excerpt: 'Mobile remains blocked until the auth SDK lands and clears the release gate.',
      },
      {
        source: 'GitHub',
        time: '10:44',
        detail: 'PR #8421 · checks failing',
        owner: 'Sam · Mobile',
        relationship: 'Implementation → release gate',
        excerpt: 'Two mobile integration checks still fail against the updated authentication flow.',
      },
      {
        source: 'Datadog',
        time: '11:32',
        detail: 'Errors increased to 2.8%',
        owner: 'Nadia · Reliability',
        relationship: 'System signal → delivery risk',
        excerpt: 'Authentication error rate rose to 2.8% after the latest SDK candidate reached staging.',
      },
    ],
    tone: 'risk',
  },
  {
    id: 'decision',
    start: 39,
    time: '15:30',
    label: 'Decision',
    eyebrow: 'ATLAS · DECISION RECORDED',
    title: 'Ship the web beta Friday. Hold mobile.',
    body: 'The team kept the customer commitment without hiding the unresolved dependency. The why stays attached.',
    decision: 'Elena · recorded · owners notified',
    changed: 'The team split the release so the web beta can ship while the unresolved mobile path stays visible.',
    matters: 'The decision protects the customer outcome without concealing delivery risk or losing its rationale.',
    evidence: [
      {
        source: 'Go / no-go',
        time: '15:30',
        detail: 'Web Friday · mobile held',
        owner: 'Elena · Product',
        relationship: 'Evidence → final decision',
        excerpt: 'Ship the web beta Friday. Hold mobile until SDK-418 and the release checks clear.',
      },
      {
        source: 'Linear',
        time: '15:32',
        detail: 'Owners and dates updated',
        owner: 'Maya · Product',
        relationship: 'Decision → execution',
        excerpt: 'Mobile owners and the new target date were recorded against the unresolved dependency.',
      },
      {
        source: 'Release brief',
        time: '15:35',
        detail: 'Decision trail attached',
        owner: 'Zora · Organizational memory',
        relationship: 'Decision → original evidence',
        excerpt: 'The customer request, scope change, dependency, risk, and final decision remain linked.',
      },
    ],
    tone: 'signal',
  },
] as const

export type WorkdayChapter = (typeof workdayChapters)[number]
export type ProofView = 'remember' | 'connect' | 'anticipate' | 'prove'

export const capabilities: ReadonlyArray<{
  number: string
  proof: ProofView
  label: string
  title: string
  description: string
}> = [
  {
    number: '01',
    proof: 'remember',
    label: 'Remember',
    title: 'Work becomes memory as it happens.',
    description: 'Meetings, tickets, docs, code, and signals become a time-ordered record.',
  },
  {
    number: '02',
    proof: 'connect',
    label: 'Connect',
    title: 'Decisions keep their why.',
    description: 'Customer evidence, scope, dependencies, and release gates stay linked.',
  },
  {
    number: '03',
    proof: 'anticipate',
    label: 'Anticipate',
    title: 'What needs attention comes forward.',
    description: 'Risks, ownership gaps, and deadlines surface early enough to act.',
  },
  {
    number: '04',
    proof: 'prove',
    label: 'Prove',
    title: 'Every answer shows its work.',
    description: 'Every conclusion links back to its source, owner, and timestamp.',
  },
]

export const questionLenses = [
  { eyebrow: 'Product', question: 'Why did the priority change?' },
  { eyebrow: 'Engineering', question: 'What now blocks delivery?' },
  { eyebrow: 'Leadership', question: 'What needs attention next?' },
] as const
