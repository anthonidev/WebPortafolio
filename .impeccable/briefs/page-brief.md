# Surface Brief — Portfolio Homepage

**Mode:** Experience  
**Route:** `src/app/page.tsx`  
**Primary target:** `src/app/page.tsx`

## Scope and visitor mode

Single-page portfolio. Experience mode: the work leads, the interface recedes. Success = visitor understands Anthoni's seniority and contacts him.

## Audience, job, and action

Engineering managers, CTOs, and startup founders. Job: evaluate whether Anthoni is worth a conversation in under 90 seconds. Action: hit Contact or download CV.

## Direction contract

**THESIS:** This portfolio lives inside a software architecture diagram — the whiteboard language every engineering lead knows. Visitors see the work as Anthoni thinks it: systems, layers, directed connections. The category default of dark hero + glass cards + neon accent is refused.

**OWN-WORLD:**
- Background: `#0b0f14` dark board, micro-grain texture via SVG filter
- Nodes: `8px` border-radius rectangles, `1px solid rgba(148,163,184,0.2)` stroke, `rgba(15,23,42,0.85)` fill — depth by border, not blur
- Edges: SVG `<path>` with `stroke-dasharray` animated to "draw" on scroll entry
- Accent sky `#38bdf8` — frontend layer
- Accent emerald `#34d399` — backend/API layer
- Accent violet `#a78bfa` — infra/database layer
- Annotation type: `JetBrains Mono` 11px `#64748b` — like diagram labels
- Display type: `Geist Sans` weight 700–900 for headings, `#f1f5f9`
- No gradient text (craft-floor ban)
- No glass/blur as decoration (craft-floor ban)
- No colored border-left thicker than 1px on cards (craft-floor ban)
- Raises from challengers: margin annotations floating around components (#1), emergent draw-on reveal (#6), layer blend as stack metaphor (#5)

**STORY:** Enter → understand "systems thinker". Hero shows Anthoni + 3 stack layers as connected nodes. Scroll → edges draw between experience entries and their tech. Projects are expandable nodes. Contact is the system's endpoint.

**FIRST VIEWPORT:** Dark textured board. Left: display-size name + title (`Geist` 800 weight, `#f1f5f9`). Below name: three layer pills `[Frontend] ─── [Backend] ─── [Cloud]` connected by SVG edges that draw in on mount. CTA "Ver arquitectura →" (primary, sky-400 border + text, no fill — node style). Right: profile photo in a circle node with `stroke-dasharray` ring that completes on mount. Background: faint SVG edge lines connecting empty viewport areas. No particles. No blur. Clean geometry.

**SIGNATURE INTERACTION:** Edges draw on scroll — every section's entry point animates `stroke-dashoffset` from full to 0 as the element enters the viewport, giving the page the feel of a diagram being drawn live.

**MEMORABLE MOMENT:** The hero connection animation: three layer nodes appear left-to-right with stagger, then SVG paths draw between them in sequence, ending at the CTA button.

**Unresolved decisions:** None blocking build.

## Direction seed

Seed key: `1893757f` | Assigned index: 7 | Kind: assigned

## FINISH

unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
