# Editorial Calendar — tts.audio blog

Target cadence: **8–16 posts per month** (AI-assisted, human-edited). Each
post is one `.tsx` file in `src/blog/posts/`, re-exported from
`src/blog/posts/index.ts`. See `templates/post-template.tsx` skeleton at the
bottom.

## Topic pillars

Six pillars. Every post belongs to one. Map new posts to a pillar first,
then a specific keyword.

| Pillar | Audience / intent | Example queries |
|---|---|---|
| **Definitions** (top funnel) | New to TTS, informational | "what is tts audio", "what is text to speech", "how does tts work" |
| **Free tools** (mid funnel) | Comparison shoppers | "best free tts audio", "tts no signup", "free tts mp3 download" |
| **How-to** (transactional) | Ready to convert | "how to convert text to mp3", "pdf to audio", "tts to wav" |
| **By language** (long tail) | Language-specific search | "spanish tts audio", "hindi tts audio", "german tts voices" |
| **By use case** (long tail) | Role-specific search | "tts for youtube", "tts for podcasts", "tts for accessibility" |
| **Comparisons** (commercial) | Evaluating competitors | "tts.audio vs elevenlabs", "elevenlabs alternative", "murf vs play.ht" |

## Month 1 (in priority order)

| # | Slug | Pillar | Primary keyword | Est. words |
|---|---|---|---|---|
| 1 ✅ | `what-is-tts-audio` | Definitions | "what is tts audio" | 600 |
| 2 ✅ | `best-free-tts-audio-tools` | Free tools | "best free tts audio" | 700 |
| 3 ✅ | `how-to-convert-text-to-mp3` | How-to | "convert text to mp3" | 600 |
| 4 | `what-is-text-to-speech` | Definitions | "what is text to speech" | 500 |
| 5 | `pdf-to-audio` | How-to | "pdf to audio" | 600 |
| 6 | `text-to-speech-vs-voice-cloning` | Comparisons | "tts vs voice cloning" | 600 |
| 7 | `spanish-tts-audio` | By language | "spanish tts audio" | 500 |
| 8 | `hindi-tts-audio` | By language | "hindi tts audio" | 500 |
| 9 | `german-tts-audio` | By language | "german tts audio" | 500 |
| 10 | `tts-for-youtube` | By use case | "tts for youtube" | 600 |
| 11 | `tts-for-podcasts` | By use case | "tts for podcasts" | 600 |
| 12 | `tts-audio-formats-mp3-wav` | How-to | "tts audio formats" | 500 |

## Month 2

| # | Slug | Pillar | Primary keyword |
|---|---|---|---|
| 13 | `elevenlabs-alternative` | Comparisons | "elevenlabs alternative" |
| 14 | `murf-alternative` | Comparisons | "murf alternative" |
| 15 | `naturalreaders-alternative` | Comparisons | "naturalreaders alternative" |
| 16 | `speechify-alternative` | Comparisons | "speechify alternative" |
| 17 | `playht-alternative` | Comparisons | "play.ht alternative" |
| 18 | `tts-for-accessibility` | By use case | "tts for accessibility" |
| 19 | `tts-for-elearning` | By use case | "tts for e-learning" |
| 20 | `tts-for-audiobooks` | By use case | "tts for audiobooks" |
| 21 | `french-tts-audio` | By language | "french tts audio" |
| 22 | `portuguese-tts-audio` | By language | "portuguese tts audio" |
| 23 | `italian-tts-audio` | By language | "italian tts audio" |
| 24 | `japanese-tts-audio` | By language | "japanese tts audio" |
| 25 | `how-tts-works` | Definitions | "how does text to speech work" |
| 26 | `best-ai-voices-2026` | Free tools | "best ai voices 2026" |

## Month 3

| # | Slug | Pillar | Primary keyword |
|---|---|---|---|
| 27 | `tts-pricing-comparison` | Free tools | "tts pricing comparison" |
| 28 | `free-tts-no-signup` | Free tools | "free tts no signup" |
| 29 | `tts-vs-asr` | Comparisons | "tts vs asr" |
| 30 | `chinese-tts-audio` | By language | "chinese tts audio" |
| 31 | `korean-tts-audio` | By language | "korean tts audio" |
| 32 | `arabic-tts-audio` | By language | "arabic tts audio" (covered by Gemini auto-detect — call out) |
| 33 | `russian-tts-audio` | By language | "russian tts audio" |
| 34 | `tts-emotional-styles` | How-to | "tts emotional styles" |
| 35 | `mai-voice-2-guide` | Definitions | "mai voice 2" |
| 36 | `gemini-tts-guide` | Definitions | "gemini 3.1 flash tts" |
| 37 | `tts-audio-quality-test` | Free tools | "tts quality comparison" |
| 38 | `ai-voice-generators-compared` | Free tools | "ai voice generator comparison" |

Total by month 3: 38 posts. Pillar coverage complete on languages (17
locales) and alternatives (5 competitors).

## Per-post checklist

Before publishing, every post MUST hit all of these:

- [ ] **Primary keyword in H1, first 100 words, URL slug, meta title.**
- [ ] **Meta description 140–160 chars**, includes primary keyword + a verb.
- [ ] **6–10 internal links** to `/free-tts`, `/voices`, `/#pricing`, sibling posts. Use descriptive anchor text (not "click here").
- [ ] **Author + date visible** on the post page (already in `/blog/[slug]` template).
- [ ] **Schema auto-added** via `/blog/[slug]/page.tsx` (BlogPosting + BreadcrumbList). No manual JSON-LD needed.
- [ ] **FAQ block** if the post answers a PAA question (5+ FAQ schema entities = rich result eligibility).
- [ ] **No AI tells**: em dashes (`—`), "delve", "leverage", "utilize", "comprehensive", "seamless", "robust", "in today's", "whether you're a X, Y, or Z", "by doing X, you can Y", filler intensifiers (very, really, simply, essentially). See `.agents/skills/seo-audit/references/ai-writing-detection.md`.
- [ ] **Concrete facts over adjectives.** Numbers, voice names, prices, file sizes. The post should be uncopyable without the product.
- [ ] **`date` and `updated` ISO yyyy-mm-dd** in the post metadata.
- [ ] **Re-exported** from `src/blog/posts/index.ts`.

## Cadence rules

- **2 posts per week minimum.** 4 per week ideal (16/mo).
- **One pillar anchor per week.** Rotate: Definitions, Free tools, How-to, Comparisons.
- **Languages and use cases batch-write.** Same outline, swap the locale/use case specifics. AI-assisted draft, human edit pass.
- **Refresh monthly.** Re-check competitor pricing the first week of every month. Bump `updated` when content changes meaningfully.
- **Track in GSC.** Every Monday: GSC Performance → queries ranked 8–20. Add a section to that post targeting the query if relevant.

## Post template

Drop this at `src/blog/posts/<slug>.tsx`, fill in, re-export from `index.ts`:

```tsx
import Link from "next/link";
import type { Post } from "./types";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Meta description here, 140-160 chars, primary keyword + verb.";

export const post: Post = {
  slug: "your-slug",
  title: "Primary keyword as a question or statement",
  description,
  date: "2026-08-01",
  updated: "2026-08-01",
  tags: ["tts", "pillar-tag"],
  author: {
    name: "Antonio Foti",
    jobTitle: "Founder, " + SITE_NAME,
    url: SITE_URL + "/",
  },
  Body: function Body() {
    return (
      <>
        <p>
          First paragraph: primary keyword in the first 100 words. State the
          answer to the search query in plain language. No throat-clearing.
        </p>

        <h2>Section heading that mirrors a PAA or related query</h2>
        <p>
          Section body. Use <Link href="/free-tts">descriptive anchors</Link>{" "}
          for internal links, not "click here". Reference specific voices
          (Harper, Ethan, Marc) and prices ($0.13/day) where relevant.
        </p>

        <h2>FAQ (optional, only if PAA-eligible)</h2>
        <p>
          Short Q&A pairs in the body double as FAQPage entities when extracted
          into the post-level JSON-LD. See existing posts for the pattern.
        </p>

        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/blog/another-slug">Related post title</Link>
          </li>
        </ul>
      </>
    );
  },
};
```

## Topic selection rules

1. Pick from the month table above; only deviate if a GSC query cluster justifies it.
2. Search the keyword in an incognito window first. Note the top 3 results. Your post needs to be substantively better on at least one axis: more current (2026 data), more specific (real voice names, real prices), more complete (answer more PAA questions), or more useful (interactive demo link).
3. If a competitor result is from Wikipedia or Google support, skip — you can't out-DR them. Pick a different angle.
4. If a keyword has zero search volume (check via Ahrefs free / Keyword Planner), it's still worth writing only if it serves the topical cluster.
