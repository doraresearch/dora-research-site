export type EnterpriseRecordId =
  | 'customer'
  | 'scope'
  | 'dependency'
  | 'checks'
  | 'signal'
  | 'decision'

export type EnterpriseRecord = {
  id: EnterpriseRecordId
  source: string
  mark: string
  time: string
  title: string
  owner: string
  due: string
  summary: string
  excerpt: string
  relationship: string
  tone: 'signal' | 'risk' | 'neutral'
}

export const enterpriseRecords: EnterpriseRecord[] = [
  {
    id: 'customer',
    source: 'Dovetail',
    mark: 'DV',
    time: '08:04',
    title: 'Enterprise SSO required',
    owner: 'Noah · Research',
    due: 'Evidence reviewed',
    summary: 'Three design partners made enterprise SSO and traceability a requirement for joining the private beta.',
    excerpt: '“We cannot connect production until admins can see who changed access and when.”',
    relationship: 'Supports the scope change',
    tone: 'signal',
  },
  {
    id: 'scope',
    source: 'Planning',
    mark: 'PL',
    time: '08:12',
    title: 'Priority changed',
    owner: 'Maya · Product',
    due: 'Scope lock · 10:00',
    summary: 'Product moved enterprise SSO into Friday’s beta while keeping export out of the committed scope.',
    excerpt: '“Enterprise SSO joins Friday’s beta. Export stays out; read-only history moves in.”',
    relationship: 'Defines release scope',
    tone: 'signal',
  },
  {
    id: 'dependency',
    source: 'Linear',
    mark: 'LI',
    time: '08:26',
    title: 'SDK-418 blocks mobile',
    owner: 'Ravi · Auth Platform',
    due: 'Landing target · 13:00',
    summary: 'The priority change depends on an authentication SDK owned by another team. Web can ship; mobile remains blocked.',
    excerpt: '“Mobile remains blocked until the auth SDK lands and clears the release gate.”',
    relationship: 'Release dependency',
    tone: 'risk',
  },
  {
    id: 'checks',
    source: 'GitHub',
    mark: 'GH',
    time: '10:44',
    title: 'PR #8421 · checks failing',
    owner: 'Ravi · Auth Platform',
    due: 'Review · 12:30',
    summary: 'The SDK pull request is open, but its mobile release checks still fail. Friday is now conditional.',
    excerpt: '“PR #8421 is open. Mobile release checks are still failing on the auth integration.”',
    relationship: 'Blocks Friday gate',
    tone: 'risk',
  },
  {
    id: 'signal',
    source: 'Datadog',
    mark: 'DD',
    time: '11:32',
    title: 'Errors increased to 2.8%',
    owner: 'Sam · Reliability',
    due: 'Go / no-go · 14:00',
    summary: 'Authentication errors increased after the candidate build, reducing delivery confidence to 62%.',
    excerpt: '“Auth errors reached 2.8% in the candidate build. Hold mobile until the 14:00 gate.”',
    relationship: 'Constrains release',
    tone: 'risk',
  },
  {
    id: 'decision',
    source: 'Go / no-go',
    mark: 'GO',
    time: '15:30',
    title: 'Ship web Friday. Hold mobile.',
    owner: 'Elena · Product',
    due: 'Recorded · 15:30',
    summary: 'The team kept the customer commitment without hiding the unresolved mobile dependency.',
    excerpt: '“Decision: ship the web beta Friday. Hold mobile until SDK-418 and PR #8421 clear.”',
    relationship: 'Final release decision',
    tone: 'signal',
  },
]

export const supportedAnswer =
  'Yes—with three gates. Friday is at risk unless SDK-418 lands, PR #8421 clears its release checks, and auth errors return to baseline.'

export const connectNodeLayout = [
  { id: 'customer', x: 3, y: 9, width: 23 },
  { id: 'scope', x: 31, y: 37, width: 24 },
  { id: 'dependency', x: 59, y: 9, width: 23 },
  { id: 'checks', x: 59, y: 66, width: 23 },
  { id: 'decision', x: 79, y: 37, width: 19 },
] as const

export const connectEdges = [
  { from: 'customer', to: 'scope', path: 'M148 62 C188 66 186 124 215 146' },
  { from: 'scope', to: 'dependency', path: 'M352 146 C376 126 372 72 410 62' },
  { from: 'scope', to: 'checks', path: 'M352 156 C380 174 374 228 410 236' },
  { from: 'dependency', to: 'decision', path: 'M544 62 C568 82 556 124 574 146' },
  { from: 'checks', to: 'decision', path: 'M544 236 C568 218 556 174 574 156' },
] as const
