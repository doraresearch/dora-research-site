export type MemoryKind = 'voice' | 'email' | 'document' | 'note'

export type MemoryItem = {
  id: string
  kind: MemoryKind
  kindLabel: string
  title: string
  meta: string
  captured: string
  summary: string
  source: string
  tags: string[]
}

export const memoryItems: MemoryItem[] = [
  {
    id: 'voice-landlord',
    kind: 'voice',
    kindLabel: 'Voice memo',
    title: 'Call landlord Tuesday',
    meta: '0:47 · yesterday',
    captured: 'Yesterday, 18:12',
    summary: 'Ask whether a one-year renewal is possible before making a decision.',
    source: 'Recorded on iPhone · train platform',
    tags: ['Lease renewal', 'Next step'],
  },
  {
    id: 'renewal-email',
    kind: 'email',
    kindLabel: 'Email',
    title: 'Renewal terms and rent increase',
    meta: 'Landlord · 08:14',
    captured: 'Today, 08:14',
    summary: 'The landlord proposed a new term and asked for a response by October 1.',
    source: 'Email from landlord · original thread attached',
    tags: ['Lease renewal', 'Deadline'],
  },
  {
    id: 'lease-clause',
    kind: 'document',
    kindLabel: 'Document',
    title: 'Clause 4.2 — renewal window',
    meta: 'Lease agreement · p. 6',
    captured: 'September 12, 10:36',
    summary: 'Renewal terms must be agreed in writing before the current term ends.',
    source: 'Lease-agreement.pdf · page 6',
    tags: ['Lease renewal', 'Agreement'],
  },
  {
    id: 'renewal-note',
    kind: 'note',
    kindLabel: 'Note',
    title: 'Questions before I renew',
    meta: 'Personal note · 3 lines',
    captured: 'September 17, 21:04',
    summary: 'Confirm the length of the term, the increase, and whether repairs are included.',
    source: 'Quick note · macOS',
    tags: ['Lease renewal', 'Questions'],
  },
]

export type ConnectionNode = {
  id: string
  label: string
  title: string
  meta: string
  relationship: string
  x: number
  y: number
  width: number
  featured?: boolean
}

export const connectionNodes: ConnectionNode[] = [
  {
    id: 'decision',
    label: 'Open decision',
    title: 'Lease renewal',
    meta: '4 linked memories',
    relationship: 'The shared subject connecting the source material: a renewal decision that is still open.',
    x: 36,
    y: 36,
    width: 28,
    featured: true,
  },
  {
    id: 'voice',
    label: 'Voice memo',
    title: 'Call landlord Tuesday',
    meta: 'Yesterday · 0:47',
    relationship: 'Contains the next step and a question about the length of the new term.',
    x: 4,
    y: 8,
    width: 27,
  },
  {
    id: 'notice',
    label: 'Building notice',
    title: 'Proposed increase',
    meta: 'PDF · 2 pages',
    relationship: 'Introduces the rent change that prompted the renewal question.',
    x: 69,
    y: 8,
    width: 27,
  },
  {
    id: 'lease',
    label: 'Lease agreement',
    title: 'Clause 4.2',
    meta: 'Page 6 · signed copy',
    relationship: 'Defines the written agreement required before the current term ends.',
    x: 4,
    y: 69,
    width: 27,
  },
  {
    id: 'email',
    label: 'Landlord email',
    title: 'Would you like to renew?',
    meta: 'Today · 08:14',
    relationship: 'Asks for the decision and supplies the October 1 response date.',
    x: 69,
    y: 69,
    width: 27,
  },
]

export type ConnectionEdge = {
  from: string
  to: string
  path: string
}

export const connectionEdges: ConnectionEdge[] = [
  { from: 'voice', to: 'decision', path: 'M112 65 C170 72 218 112 268 145' },
  { from: 'notice', to: 'decision', path: 'M528 65 C470 72 422 112 372 145' },
  { from: 'lease', to: 'decision', path: 'M112 237 C170 230 218 188 268 158' },
  { from: 'email', to: 'decision', path: 'M528 237 C470 230 422 188 372 158' },
  { from: 'notice', to: 'email', path: 'M547 88 C564 128 564 184 547 220' },
]

export type RecallSource = {
  id: string
  label: string
  title: string
  excerpt: string
}

export type RecallResult = {
  id: string
  question: string
  answer: string
  sources: RecallSource[]
}

export const recallResults: RecallResult[] = [
  {
    id: 'decision',
    question: 'What did I decide about renewing?',
    answer: 'You had not renewed yet. You wanted a one-year term and clarification on the increase before responding.',
    sources: [
      {
        id: 'decision-voice',
        label: 'Voice memo · yesterday',
        title: 'Call landlord Tuesday',
        excerpt: '“Ask if they can offer one year. I do not want to answer until the increase is clear.”',
      },
      {
        id: 'decision-note',
        label: 'Personal note · Sep 17',
        title: 'Questions before I renew',
        excerpt: '“Confirm term length, increase, and whether the repairs are included.”',
      },
      {
        id: 'decision-email',
        label: 'Landlord email · today',
        title: 'Renewal terms',
        excerpt: '“Please let me know whether you would like to renew under the proposed terms.”',
      },
    ],
  },
  {
    id: 'deadline',
    question: 'When do I need to reply?',
    answer: 'The landlord asked for your response by October 1. Your lease also requires the renewal to be agreed in writing.',
    sources: [
      {
        id: 'deadline-email',
        label: 'Landlord email · today',
        title: 'Response requested by October 1',
        excerpt: '“Please confirm your intention to renew by October 1.”',
      },
      {
        id: 'deadline-lease',
        label: 'Lease agreement · page 6',
        title: 'Clause 4.2',
        excerpt: '“Any renewal must be agreed in writing before the current term expires.”',
      },
    ],
  },
  {
    id: 'next-step',
    question: 'What was my next step?',
    answer: 'Call the landlord on Tuesday and ask about a one-year term before replying to the renewal email.',
    sources: [
      {
        id: 'step-voice',
        label: 'Voice memo · yesterday',
        title: 'Call landlord Tuesday',
        excerpt: '“Call on Tuesday. Ask about one year before I reply.”',
      },
      {
        id: 'step-email',
        label: 'Landlord email · today',
        title: 'Renewal terms',
        excerpt: '“Let me know if you have any questions before confirming.”',
      },
    ],
  },
]

export function matchRecallResult(query: string) {
  const normalized = query.toLowerCase()

  if (/when|deadline|reply|respond|october/.test(normalized)) return recallResults[1]
  if (/next|step|call|tuesday|action/.test(normalized)) return recallResults[2]
  if (/renew|decid|lease|apartment|rent|term/.test(normalized)) return recallResults[0]

  return null
}
