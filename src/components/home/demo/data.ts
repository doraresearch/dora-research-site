export type WorkFunction = 'product' | 'engineering' | 'reliability' | 'security' | 'research'

export type SignalKind = 'priority' | 'risk' | 'deadline'

export type WorkMoment = {
  id: string
  nodeId: WorkFunction
  function: WorkFunction
  functionLabel: string
  sourceApp: string
  sourceMark: string
  title: string
  meta: string
  captured: string
  summary: string
  evidence: string
  owner: string
  due: string
  signalKinds: SignalKind[]
}

export const workMoments: WorkMoment[] = [
  {
    id: 'product-scope-change',
    nodeId: 'product',
    function: 'product',
    functionLabel: 'Product',
    sourceApp: 'Linear',
    sourceMark: 'LI',
    title: 'Audit history moved into Friday beta',
    meta: 'Decision ATLAS-218 · 08:12',
    captured: 'Today, 08:12',
    summary: 'Product narrowed the request to read-only audit history and moved it into Friday’s private-beta scope. CSV export remains post-beta.',
    evidence: '“Decision: read-only audit history joins Friday’s beta; CSV export stays post-beta.”',
    owner: 'Elena · Product',
    due: 'Scope lock at 10:00',
    signalKinds: ['priority', 'deadline'],
  },
  {
    id: 'engineering-dependency',
    nodeId: 'engineering',
    function: 'engineering',
    functionLabel: 'Engineering',
    sourceApp: 'GitHub',
    sourceMark: 'GH',
    title: 'Event index API is now critical path',
    meta: 'PR #1842 · 08:26',
    captured: 'Today, 08:26',
    summary: 'The new audit view depends on the event-index query in PR #1842. Its staging migration must complete before the UI can pass release QA.',
    evidence: '“PR #1842 supplies the event-index query. The staging migration is still running.”',
    owner: 'Ravi · Backend',
    due: 'Merge target 13:00',
    signalKinds: ['risk', 'deadline'],
  },
  {
    id: 'reliability-gate',
    nodeId: 'reliability',
    function: 'reliability',
    functionLabel: 'Reliability',
    sourceApp: 'Datadog',
    sourceMark: 'DD',
    title: 'Auth build regressed p95 by 18%',
    meta: 'Build 842 · 08:31',
    captured: 'Today, 08:31',
    summary: 'The release candidate increased authentication latency from 410 ms to 484 ms. Rollout is paused until the afternoon reliability gate.',
    evidence: '“Build 842: auth p95 +18%. Hold rollout until the 14:00 go / no-go.”',
    owner: 'Sam · Reliability',
    due: 'Go / no-go at 14:00',
    signalKinds: ['risk', 'deadline'],
  },
  {
    id: 'security-redaction',
    nodeId: 'security',
    function: 'security',
    functionLabel: 'Security',
    sourceApp: 'CI',
    sourceMark: 'CI',
    title: 'Actor-IP redaction test still fails',
    meta: 'Security suite · 08:34',
    captured: 'Today, 08:34',
    summary: 'One audit-log privacy test still exposes an actor IP after account deletion. The private beta cannot open until it passes.',
    evidence: '“Redaction suite: 1 failing. Actor IP remains visible after account deletion.”',
    owner: 'Mina · Security',
    due: 'Must pass by 15:00',
    signalKinds: ['risk', 'deadline'],
  },
  {
    id: 'research-signal',
    nodeId: 'research',
    function: 'research',
    functionLabel: 'Research',
    sourceApp: 'Dovetail',
    sourceMark: 'DV',
    title: 'Three beta teams need traceability',
    meta: 'Design-partner synthesis · 07:55',
    captured: 'Today, 07:55',
    summary: 'Three design partners said they cannot connect production workspaces without a way to review access changes.',
    evidence: '“We cannot connect production until admins can see who changed access.”',
    owner: 'Noah · Research',
    due: 'Evidence reviewed',
    signalKinds: ['priority'],
  },
]

export type RelationType = 'supports' | 'depends_on' | 'constrains' | 'blocks'

export type ConnectionNode = {
  id: 'commitment' | WorkFunction
  label: string
  title: string
  meta: string
  relationship: string
  relation?: RelationType
  x: number
  y: number
  width: number
  featured?: boolean
}

export const connectionNodes: ConnectionNode[] = [
  {
    id: 'commitment',
    label: 'Release decision',
    title: 'Can Atlas still ship Friday?',
    meta: 'Private beta · go / no-go 15:30',
    relationship: 'One release decision connected to the roadmap change, engineering dependency, reliability gate, privacy requirement, and original user evidence.',
    x: 35,
    y: 35,
    width: 30,
    featured: true,
  },
  {
    id: 'product',
    label: 'Product · Linear',
    title: 'Audit history moved into beta',
    meta: 'ATLAS-218 · 08:12',
    relationship: 'Product narrowed audit logs to a read-only view, adding it to Friday’s beta while keeping export outside the release.',
    relation: 'constrains',
    x: 3,
    y: 6,
    width: 25,
  },
  {
    id: 'engineering',
    label: 'Engineering · GitHub',
    title: 'Event index API #1842',
    meta: 'Merge target · 13:00',
    relationship: 'The audit view depends on PR #1842 and its staging migration. Without that query, the new scope cannot enter release QA.',
    relation: 'depends_on',
    x: 72,
    y: 6,
    width: 25,
  },
  {
    id: 'security',
    label: 'Security · CI',
    title: 'Actor-IP redaction',
    meta: '1 failing test · 08:34',
    relationship: 'Friday access depends on the privacy suite removing actor IPs after an account deletion event.',
    relation: 'depends_on',
    x: 3,
    y: 70,
    width: 25,
  },
  {
    id: 'research',
    label: 'Research · Dovetail',
    title: 'Traceability blocks adoption',
    meta: '3 design partners · 07:55',
    relationship: 'Original interviews support the priority change: three beta teams will not connect production without traceability.',
    relation: 'supports',
    x: 72,
    y: 70,
    width: 25,
  },
  {
    id: 'reliability',
    label: 'Reliability · Datadog',
    title: 'Build 842 auth gate',
    meta: 'p95 +18% · 14:00',
    relationship: 'The authentication regression blocks rollout until build 842 is fixed or rolled back at the reliability gate.',
    relation: 'blocks',
    x: 38,
    y: 72,
    width: 24,
  },
]

export type ConnectionEdge = {
  from: ConnectionNode['id']
  to: ConnectionNode['id']
  relation: RelationType
  path: string
}

export const connectionEdges: ConnectionEdge[] = [
  { from: 'product', to: 'commitment', relation: 'constrains', path: 'M98 58 C164 66 218 112 274 145' },
  { from: 'engineering', to: 'commitment', relation: 'depends_on', path: 'M542 58 C476 66 422 112 366 145' },
  { from: 'security', to: 'commitment', relation: 'depends_on', path: 'M98 236 C164 228 218 190 274 158' },
  { from: 'research', to: 'commitment', relation: 'supports', path: 'M542 236 C476 228 422 190 366 158' },
  { from: 'reliability', to: 'commitment', relation: 'blocks', path: 'M320 238 C320 211 320 190 320 169' },
]

export type RecallSource = {
  id: string
  nodeId: WorkFunction
  functionLabel: string
  label: string
  title: string
  excerpt: string
}

export type DecisionCondition = {
  function: WorkFunction
  functionLabel: string
  text: string
}

export type NextAction = {
  owner: string
  action: string
  due: string
}

export type RecallResult = {
  id: string
  question: string
  recommendation: string
  conditions: DecisionCondition[]
  nextActions: NextAction[]
  sources: RecallSource[]
  followUp: string
}

const sharedSources: RecallSource[] = [
  {
    id: 'source-product',
    nodeId: 'product',
    functionLabel: 'Product',
    label: 'Linear · 08:12',
    title: 'Decision ATLAS-218',
    excerpt: '“Decision: read-only audit history joins Friday’s beta; CSV export stays post-beta.”',
  },
  {
    id: 'source-engineering',
    nodeId: 'engineering',
    functionLabel: 'Engineering',
    label: 'GitHub · 08:26',
    title: 'PR #1842 · event index',
    excerpt: '“PR #1842 supplies the event-index query. The staging migration is still running.”',
  },
  {
    id: 'source-reliability',
    nodeId: 'reliability',
    functionLabel: 'Reliability',
    label: 'Datadog · 08:31',
    title: 'Identity build 842',
    excerpt: '“Build 842 raised auth p95 from 410 ms to 484 ms. Rollout is paused for the 14:00 gate.”',
  },
  {
    id: 'source-security',
    nodeId: 'security',
    functionLabel: 'Security',
    label: 'CI · 08:34',
    title: 'Audit-log redaction suite',
    excerpt: '“Redaction suite: 1 failing. Actor IP remains visible after account deletion.”',
  },
  {
    id: 'source-research',
    nodeId: 'research',
    functionLabel: 'Research',
    label: 'Dovetail · 07:55',
    title: 'Design-partner synthesis',
    excerpt: '“We cannot connect production until admins can see who changed access.”',
  },
]

export const recallResults: RecallResult[] = [
  {
    id: 'ship',
    question: 'Can Atlas still ship Friday?',
    recommendation: 'Yes—as a guarded private beta. Keep audit history read-only, merge the event-index API by 13:00, clear or roll back auth build 842 at 14:00, and pass actor-IP redaction before the 15:30 go / no-go.',
    conditions: [
      { function: 'product', functionLabel: 'Product', text: 'Hold scope to read-only audit history; export stays post-beta.' },
      { function: 'engineering', functionLabel: 'Engineering', text: 'PR #1842 and its staging migration must enter release QA by 13:00.' },
      { function: 'reliability', functionLabel: 'Reliability', text: 'Build 842 must clear the 14:00 auth gate or roll back.' },
      { function: 'security', functionLabel: 'Security', text: 'Actor-IP redaction must pass before the beta opens.' },
    ],
    nextActions: [
      { owner: 'Ravi · Backend', action: 'Merge event-index PR #1842', due: '13:00' },
      { owner: 'Sam · Reliability', action: 'Fix or roll back auth build 842', due: '14:00' },
      { owner: 'Mina · Security', action: 'Pass actor-IP redaction', due: '15:00' },
      { owner: 'Elena · Product', action: 'Run the private-beta go / no-go', due: '15:30' },
    ],
    sources: sharedSources,
    followUp: 'Atlas remains on track for a guarded Friday private beta with read-only audit history. Export is deferred. The release holds unless PR #1842 merges by 13:00, auth build 842 clears or rolls back at 14:00, and actor-IP redaction passes before the 15:30 go / no-go.',
  },
  {
    id: 'changed',
    question: 'What changed this morning?',
    recommendation: 'At 08:12, product moved read-only audit history into Friday’s beta after reviewing design-partner evidence. That pulled the event-index API and redaction suite onto the release critical path.',
    conditions: [
      { function: 'product', functionLabel: 'Product', text: 'The scope change adds a read-only audit view, not export.' },
      { function: 'engineering', functionLabel: 'Engineering', text: 'PR #1842 is now a release dependency instead of follow-on work.' },
      { function: 'security', functionLabel: 'Security', text: 'Audit-log redaction is now a launch gate.' },
    ],
    nextActions: [
      { owner: 'Ravi · Backend', action: 'Move PR #1842 into release QA', due: '13:00' },
      { owner: 'Elena · Product', action: 'Protect the narrowed scope', due: '15:30' },
    ],
    sources: sharedSources,
    followUp: 'This morning’s roadmap change adds read-only audit history to Friday’s private beta. Event indexing and redaction are now release gates; export remains post-beta.',
  },
  {
    id: 'why',
    question: 'Why did audit logs move up?',
    recommendation: 'Three design partners said traceability is required before they connect production workspaces. Product responded by moving a narrow, read-only audit view into beta instead of expanding to full export.',
    conditions: [
      { function: 'research', functionLabel: 'Research', text: 'The need appears across three design partners, not one isolated request.' },
      { function: 'product', functionLabel: 'Product', text: 'Read-only history solves the launch blocker without taking on export.' },
      { function: 'engineering', functionLabel: 'Engineering', text: 'The narrower view can reuse the event-index API already in review.' },
    ],
    nextActions: [
      { owner: 'Elena · Product', action: 'Keep CSV export outside Friday scope', due: 'Today' },
      { owner: 'Noah · Research', action: 'Validate the beta workflow after launch', due: 'Friday' },
    ],
    sources: sharedSources,
    followUp: 'Audit history moved into the private beta because three design partners require change traceability before production use. The committed scope is read-only history; export remains later.',
  },
  {
    id: 'attention',
    question: 'What needs attention next?',
    recommendation: 'The next three gates are sequential: merge the event index by 13:00, resolve the auth regression at 14:00, and pass actor-IP redaction by 15:00. Product makes the final call at 15:30.',
    conditions: [
      { function: 'engineering', functionLabel: 'Engineering', text: 'The staging migration must finish before release QA can start.' },
      { function: 'reliability', functionLabel: 'Reliability', text: 'Auth latency needs a fix or a clean rollback.' },
      { function: 'security', functionLabel: 'Security', text: 'One privacy test still blocks access.' },
      { function: 'product', functionLabel: 'Product', text: 'The 15:30 decision must stay inside the narrowed beta scope.' },
    ],
    nextActions: [
      { owner: 'Ravi · Backend', action: 'Finish staging migration', due: '13:00' },
      { owner: 'Sam · Reliability', action: 'Close the auth gate', due: '14:00' },
      { owner: 'Mina · Security', action: 'Rerun the redaction suite', due: '15:00' },
    ],
    sources: sharedSources,
    followUp: 'Attention stays on the release gates in order: event indexing at 13:00, authentication at 14:00, redaction at 15:00, and the final private-beta decision at 15:30.',
  },
]

export function matchRecallResult(query: string) {
  const normalized = query.toLowerCase()

  if (/ship|friday|go.?no.?go|still make/.test(normalized)) return recallResults[0]
  if (/what changed|change|morning|new/.test(normalized)) return recallResults[1]
  if (/why|audit|move|priority/.test(normalized)) return recallResults[2]
  if (/attention|next|focus|need|block|risk/.test(normalized)) return recallResults[3]

  return null
}
