import Container from '@/components/ui/Container'

const paths = [
  <><rect x="4" y="4" width="16" height="4" /><rect x="4" y="10" width="16" height="4" /><rect x="4" y="16" width="16" height="4" /></>,
  <path d="M5 6h6M5 12h14M5 18h9" />,
  <><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M8 11 16 7M8 13 16 17" /></>,
  <path d="M9 5 5 12l4 7M15 5l4 7-4 7" />,
  <><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></>,
  <><circle cx="12" cy="8" r="3.2" /><path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" /></>,
  <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M7 10l3 2-3 2M13 14h4" /></>,
  <><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></>,
  <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />,
]

export default function IconStrip() {
  return (
    <Container>
      <div className="flex justify-center overflow-hidden rounded-card border border-line" aria-hidden="true">
        {paths.map((p, i) => (
          <span key={i} className="flex flex-1 items-center justify-center border-r border-line py-4 text-[#9aa3ad] last:border-r-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              {p}
            </svg>
          </span>
        ))}
      </div>
    </Container>
  )
}
