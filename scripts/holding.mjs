// Holding mode. If a file named HOLDING exists at the repo root, the built site is replaced
// by public/coming-soon.html at the root and every other route redirects to it.
// Create the file to hold; delete it to release. Both are one commit.
import { existsSync, copyFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const dist = join(root, 'dist')
if (!existsSync(join(root, 'HOLDING'))) {
  console.log('[holding] off: full site published')
  process.exit(0)
}
// The page is the whole site: it is the root and the 404, the app bundle and its route data are
// not published, and the sitemap lists the root alone.
const page = join(root, 'public', 'coming-soon.html')
copyFileSync(page, join(dist, 'index.html'))
copyFileSync(page, join(dist, '404.html'))
for (const f of readdirSync(dist)) {
  const p = join(dist, f)
  if (f.endsWith('.html') && !['index.html', '404.html', 'coming-soon.html'].includes(f)) rmSync(p)
  if (f === 'assets' || f.startsWith('static-loader-data')) rmSync(p, { recursive: true, force: true })
}
writeFileSync(join(dist, '_redirects'), '/research / 302\n/zora / 302\n/coming-soon.html / 301\n')
writeFileSync(join(dist, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://www.dorareason.com/</loc></url></urlset>\n')
console.log('[holding] on: coming-soon page published at the root and as the 404; /research and /zora redirect to /; app bundle withheld')
