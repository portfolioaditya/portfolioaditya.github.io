# Aditya Gupta — Research Portfolio

A complete light visual rebuild using Next.js, TypeScript, static export, GSAP and Motion. The installed libraries and lockfile are preserved.

## Content and routes

- `/`: photographic materials composition, curved scroll motion, material studies, selected projects and writing.
- `/about/`: research summary, interests, experience, education, skills, internships, leadership, achievements and references, all expanded.
- `/projects/`: three complete project summaries with direct anchors.
- `/publications/`: five papers from the current supplied résumé, including one clearly marked Submitted.
- `/contact/`: email, LinkedIn, ORCID, Google Scholar, ResearchGate and DOCX download.

`lib/content.ts` is the content source. The original DOCX is copied unchanged to `public/aditya-gupta-resume.docx`. Academic reference contact details remain in that document.

## Visuals and motion

Three generated illustrative material studies are documented with exact prompts in `MATERIALS_ARTWORK.md`. JPEG copies are used for lighter transfer; no claim is made that they show actual experiments. No generated portrait, experimental result, metric or testimonial.

The hero is centered above the title. GSAP controls a session-once, skippable reveal (maximum approximately 1.5 seconds), curved scroll movement, material-image changes, magnetic hover and reveals. Motion supplies subtle page entrances and the existing navigation primitive. Native scrolling and the native pointer remain available. Desktop cursor enhancement is disabled for coarse pointers and reduced motion. All page content is present in exported HTML; no WebGL or JavaScript is necessary to read it. Listeners, triggers and tweens are cleaned up on navigation. The intro completes when the page is hidden.

Hobro, Skiper UI, Animmaster and Vengeance UI informed motion/presentation only. No Hobro or paid library code, imagery, video or written content was copied. Retained licensed UI primitives are credited in `THIRD_PARTY_NOTICES.md`.

## Future gallery

Add user-supplied media under `public/gallery/` and entries to `lib/gallery.ts`. The empty gallery renders nothing. Video entries support poster/captions, controls, inline playback and no autoplay. No sample videos are published.

## Build and delivery

Use the installed package manager's `dev`, `typecheck` and `build` scripts. Static output is `out/`; `.openai/hosting.json` retains the existing private Site. The rebuild plan is `REBUILD_PLAN.md`.
