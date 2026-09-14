# Brand

The DORA Research Brand Book, version 2.0, Paper and Night.

- `DORA-Research-Brand-Book-v2.pdf`: the presentation deck, 34 pages, 16:9, fonts embedded. Present it full-screen or share it as-is.
- `deck/deck.html`: the source the PDF is rendered from. Edit this, then regenerate.

`DESIGN.md` at the repository root is the design system derived from the book and is authoritative for the site. When the two disagree, the book at its current version wins and `DESIGN.md` is corrected.

## Regenerate the PDF

The deck is rendered with headless Chrome so the real typefaces (Newsreader, Geist, IBM Plex Mono, loaded from Google Fonts) are embedded. Network access is required for the fonts.

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=15000 --print-to-pdf="$PWD/brand/DORA-Research-Brand-Book-v2.pdf" "file://$PWD/brand/deck/deck.html"
```

Pages are 1920 by 1080 CSS pixels. Each `<section class="slide">` is one page; page numbers are stamped by the script at the foot of the file. The social cards on the applications page are the live files in `public/`.

## Versioning

The book is versioned like software. A change to a Decided rule is a new decision, logged with a date and a reason in the changelog on page 4 and in `DESIGN.md`. Bump the version in the cover, the footer, and the file name together.
