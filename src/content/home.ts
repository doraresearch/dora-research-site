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
    time: '08:12',
    label: 'Scope',
    eyebrow: 'ATLAS · SCOPE UPDATED',
    title: 'Enterprise SSO enters Friday’s release.',
    body: 'Customer evidence changed the beta requirement. Export stays out; read-only history moves in.',
    decision: 'Maya · 10:00 · confirm narrowed scope',
    sources: ['Dovetail', 'Planning notes', 'Linear'],
    evidence: [
      ['Dovetail', '08:04', 'Enterprise SSO requested'],
      ['Planning', '08:12', 'Export stays out of beta'],
      ['Linear', '08:14', 'Read-only history added'],
    ],
    tone: 'signal',
  },
  {
    id: 'dependency',
    time: '08:26',
    label: 'Dependency',
    eyebrow: 'ATLAS · DEPENDENCY FOUND',
    title: 'SDK-418 now blocks mobile.',
    body: 'The scope change depends on an auth SDK owned by another team. Friday is still possible, but the path changed.',
    decision: 'Sam · 11:30 · confirm SDK owner',
    sources: ['Linear', 'Slack', 'GitHub'],
    evidence: [
      ['Linear', '08:26', 'SDK-418 blocks mobile'],
      ['Slack', '08:28', 'Auth Platform owns the SDK'],
      ['GitHub', '08:31', 'PR #8421 opened'],
    ],
    tone: 'signal',
  },
  {
    id: 'risk',
    time: '11:40',
    label: 'Risk',
    eyebrow: 'ATLAS · ATTENTION NEEDED',
    title: 'Friday is at risk unless the auth SDK lands by 13:00.',
    body: 'SDK-418 blocks mobile; PR #8421 still fails the release gate.',
    decision: 'Maya · 13:00 · hold go/no-go',
    sources: ['Linear', 'GitHub', 'Datadog'],
    evidence: [
      ['Linear', '08:26', 'SDK-418 blocks mobile'],
      ['GitHub', '10:44', 'PR #8421 · checks failing'],
      ['Datadog', '11:32', 'Errors · 2.8%'],
    ],
    tone: 'risk',
  },
  {
    id: 'decision',
    time: '15:30',
    label: 'Decision',
    eyebrow: 'ATLAS · DECISION RECORDED',
    title: 'Ship the web beta Friday. Hold mobile.',
    body: 'The team kept the customer commitment without hiding the unresolved dependency. The why stays attached.',
    decision: 'Elena · recorded · owners notified',
    sources: ['Go / no-go', 'Linear', 'Release brief'],
    evidence: [
      ['Go / no-go', '15:30', 'Web Friday · mobile held'],
      ['Linear', '15:32', 'Owners and dates updated'],
      ['Brief', '15:35', 'Decision trail attached'],
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
