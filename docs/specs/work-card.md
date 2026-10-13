---
type: component-spec
component: WorkCard
status: done            # draft | ready-for-agents | in-review | done
repo: jeff-portfolio
penpot: none (the current rendering is the baseline)
tokens: app/globals.css (:root blocks, second block wins)
wcag-baseline: "2.1 AA"
created: 2026-10-12
tags: [spec, component, agent-input]
---

# WorkCard spec

> Pre-filled from the code as of 2026-10-12. Items marked **(Jeff)** are decisions only Jeff can make. Agents: if something here is missing or contradicts the code, add it under "Open questions" and don't guess.

## 1. Purpose

A link card on the home page "Selected Work" list. Each card points to one case study and shows its number, year, title, short description and tags.

- **Used in:** `app/page.tsx`, three cards inside `.work-grid` (order cancellations, design system foundation, eyewear education).
- **Related, not in scope:** the "Live Project" link in the same file reuses the `.work-card` class with inline styles. Changes must not alter its look (see section 9).
- **Not for:** external links with their own behavior, or cards that hold more than one action.

## 2. Visual source

- Penpot frame: none. There is no design file for this card.
- Baseline: the current rendering at `npm run dev`. Screenshot it at 320, 768 and 1280px before changing anything.
- Where this note and the running site disagree, **this note wins**. Flag the difference in "Open questions".

## 3. Anatomy

Current structure, top to bottom:

| Part | Required | Content | Notes |
| :--- | :------- | :------ | :---- |
| Container | yes | one `<a href>` wrapping the whole card, class `.work-card` | Two-column grid: content, then arrow |
| Number | yes | `01`, `02`, `03` as `.t-label` | |
| Featured badge | no | "Featured" `.tag`, on one card only | Uses inline styles with `--accent` and `--on-accent` |
| Year | yes | text such as `2024–25`, pushed right | |
| Title | yes | `<h3 class="t-title">` | Heading level is fixed at h3 under the section's h2 |
| Description | yes | one paragraph, `.t-small`, max width 560px | Long, up to about 220 characters |
| Tags | yes | `.work-card-tags`, 3 `.tag` pills | Wrap onto multiple lines |
| Arrow | no | `→` in a 32px circle, `aria-hidden="true"` | Hidden at 768px wide and below |

## 4. Variants to explore

Each variant gets its own worktree. An agent builds **one** variant. Everything not listed under "What differs" stays the same.

**Status: working proposals.** Jeff hasn't decided on these yet (2026-10-12). Build them as written unless told otherwise.

| Variant | Branch / worktree | What differs |
| :------ | :---------------- | :----------- |
| A | `work-card-grid` | Layout built with CSS grid and named areas (number, year, title, description, tags, arrow). The whole card stays one link. |
| B | `work-card-flex` | Same visuals built with flexbox. The whole card stays one link. |
| C | `work-card-stretched` | Only the title is a link. A `::after` overlay makes the whole card clickable. The accessible name becomes the title alone. Layout stays as current. |

Reason for C: today the single link wraps all the content, so a screen reader announces the number, year, title, description and tags as one long link name. C tests a shorter name without losing the large click target.

### Required in every variant (decided by Jeff, 2026-10-12)

1. **A visible link cue at every width, with no hover needed.** The arrow is hidden at 768px wide and below, which leaves touch screens with no sign that the card is a link. Each variant must keep a visible cue at all widths. The form is the agent's choice (for example keeping the arrow visible, or moving it inline). Describe the choice in the summary, and keep the cue decorative (`aria-hidden`) unless it carries text.
2. **Move the featured card's inline styles into CSS classes.** The background and the "Featured" badge are set inline today. Replace them with classes in `app/globals.css` (for example `.work-card--featured` and `.tag--featured`) that use the same tokens, with no visible change.

## 5. States

- [x] Default
- [x] Hover (background to `--color-1`, border to `--accent`, shadow, arrow nudges up and right)
- [x] Focus-visible (3px outline in `--accent`, 3px offset, radius follows the card)
- [ ] Active / pressed (none today. Jeff hasn't decided. Don't add one. Say in the summary whether you would suggest one.)
- [ ] Disabled (not applicable)
- [ ] Loading (not applicable)
- [ ] Empty (not applicable)
- [ ] Error (not applicable)

## 6. Tokens and styling

Use existing tokens. Do not hard-code values that a token covers. The second `:root` block in `app/globals.css` overrides the first, so check which value is live.

| Property | Token / value |
| :------- | :------------ |
| Card background | `--surface` (hover: `--color-1`; featured: `--accent-muted` set inline) |
| Card border | `1px solid var(--border)`, hover `--accent` |
| Radius | `--radius-lg` (24px in the live block) |
| Padding | `2.25rem` on desktop |
| Gap between cards | `1.25rem` (`.work-grid`) |
| Title | `.t-title`, `--font-display`, `1.5rem`, weight 400 |
| Description | `.t-small`, `--text-secondary`, weight 300 |
| Tag | `--tag-bg`, `--tag-text`, pill radius, `0.75rem` |
| Focus ring | `3px solid var(--accent)`, offset `3px` |
| Motion | `var(--transition)` = 200ms ease. Reduced motion: transitions collapse to near zero and the arrow transform is removed |

## 7. Behavior

- **Interaction:** click, tap or Enter on the card follows the link in the same tab.
- **Responsive:** at 768px wide and below, the grid becomes one column and the arrow is hidden. Check 320, 768 and 1280px. No horizontal scroll at 320px.
- **Content limits:** a title of two lines, a description of 220 characters, six tags that wrap, and no featured badge.
- **Affordance on touch:** every variant keeps a visible link cue at all widths (see "Required in every variant"). Today the arrow disappears at 768px and below.

## 8. Accessibility (WCAG 2.1 AA)

The agent checks each item and reports pass, fail or not applicable, with evidence.

- [ ] **1.1.1 Non-text content:** the arrow is hidden from assistive technology and carries no information.
- [ ] **1.3.1 Info and relationships:** the title is a real `h3`, and the card is a real link.
- [ ] **1.4.3 Contrast (minimum):** body and description text at least 4.5:1, labels at least 4.5:1, measured on both the default and hover backgrounds. The code comments record 6.3:1 to 6.9:1 for secondary ink and 4.7:1 to 5.1:1 for tertiary ink. Verify them, don't trust them.
- [ ] **1.4.4 Resize text:** usable at 200% zoom.
- [ ] **1.4.10 Reflow:** no two-dimensional scrolling at 320px.
- [ ] **1.4.11 Non-text contrast:** card border, tag pills, focus ring and the always-visible link cue at least 3:1 against what they touch. The default border `--border` is a light gray, so measure it.
- [ ] **1.4.12 Text spacing:** no clipped text with increased spacing.
- [ ] **2.1.1 Keyboard:** reachable and activatable with Tab and Enter.
- [ ] **2.4.4 Link purpose:** the accessible name says where the link goes. This is the main check for variant C versus A and B.
- [ ] **2.4.7 Focus visible:** the focus ring is visible on every background, including the featured card.
- [ ] **4.1.2 Name, role, value:** role is link, and the name is correct. Record the computed name for each variant.

**Project goal beyond the baseline:** a click target of at least 44 by 44px. The whole card exceeds this on desktop and mobile.

**Automated check:** run axe (or Playwright with axe) on the home page, then on the Vercel preview. Automated tools catch only part of WCAG, so the keyboard and screen reader items still get a manual pass from Jeff.

## 9. Constraints for the agent

- Stack: Next.js 14, React 18, TypeScript. Plain CSS in `app/globals.css`. Do not add Tailwind or a CSS library.
- The card lives in the `WorkCard` function at the bottom of `app/page.tsx`. Styles live in `app/globals.css`: the base `.work-card` rules, the later override block for `.work-card` and `.tag`, the `:focus-visible` rules, the 768px media query and the reduced-motion block.
- **Do not change the "Live Project" card.** It shares the `.work-card` class. Use a modifier class (for example `.work-card--grid`) or scope your rules under `.work-grid`, and check that the Live Project card renders the same before and after.
- Touch only `app/page.tsx` and `app/globals.css`. No dependency changes without asking.
- Run the dev server on a port not already in use, and report which one.
- Do not push, deploy, or run `vercel --prod`. Jeff does those.
- Do not commit `.env*` files or secrets.

## 10. Definition of done

- [ ] Matches the anatomy and states above for this variant.
- [ ] Looks the same as the current card at 1280px, except for the intended difference in "What differs".
- [ ] Uses tokens, with no hard-coded colors or spacing that a token covers.
- [ ] A visible link cue shows at 320, 768 and 1280px without hover.
- [ ] The featured card's background and badge come from CSS classes, with no inline styles left on them and no visual change.
- [ ] Works at 320, 768 and 1280px.
- [ ] The Live Project card is visually unchanged.
- [ ] Section 8 reported, with axe results attached and the computed accessible name recorded.
- [ ] `npm run build` passes.
- [ ] The agent's summary lists what changed, what it chose, and what it left open.

## 11. Open questions

Agents add items here instead of guessing.

Decided 2026-10-12:

- No Penpot frame exists. The running site is the baseline.
- Every variant keeps a visible link cue at all widths.
- Every variant moves the featured card's inline styles into CSS classes.

- Variant C (stretched link) was chosen after comparing A, B and C. See section 12.

Still open (Jeff, not yet decided):

- Whether the card should have an active / pressed state.

Agents add their own questions below this line.

## 12. Review log

Compared on 2026-10-12 against the current `main`, in the browser pane at 320, 768 and 1280px, using local dev servers. Jeff's own Design Mode and Vercel preview review of the chosen variant is still pending. Nothing here was tested with a screen reader.

| Variant | Preview URL | Axe violations | Link text length | Manual a11y | Verdict | Notes |
| :------ | :---------- | :------------- | :--------------- | :---------- | :------ | :---- |
| A grid | local only | 0 | 237–284 characters (whole card) | Keyboard: 3 tab stops, whole card is the link. | Not chosen | Heights match `main` at 768px and about match at 320px. At 320px the "Featured" badge wraps under the number and the text column is narrow. Largest diff (+39 / −12). Keeps the long link name. |
| B flex | local only | 0 | 237–284 characters (whole card) | Keyboard: 3 tab stops, whole card is the link. | Not chosen | Smallest diff (+15 / −2). Arrow drops onto its own row at 768px and below (+56px per card). Keeps the long link name. |
| C stretched link | [PR #4 preview](https://jeff-portfolio-git-jfvertido-work-ca-c0c8c2-jfvertidos-projects.vercel.app) | 0 | 24–40 characters (title only) | Keyboard: 3 tab stops, 3px focus ring around the whole card. Hit-test: every part and edge of the card resolves to the link. | **Chosen** | Same mobile layout as B (+56px per card at 768px and below). Text inside the card can't be selected with the mouse. Uses `pointer-events: none` on the arrow. |

**Common to all three:** 1280px layout identical to `main`. Live Project card unchanged at every width. axe (WCAG 2.1 A and AA) reports 0 violations on `main` and on all three, so axe did not separate them. The link text length is the characters inside the card's link, which approximates the accessible name.

**Decision:** C, because it is the only variant that shortens the link name while keeping the whole card clickable. Chosen by Jeff on 2026-10-12.
**Follow-ups:**
- Review the PR #4 preview at phone width and with the keyboard before merging.
- Active / pressed state is still undecided.
- A screen reader pass on variant C.
- Remove the Orca worktrees and branches for A and B once C is merged.
