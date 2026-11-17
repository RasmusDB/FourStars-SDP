# PinkLazerCat Redesign: Service Design Portfolio

## Files

| File | What it is |
| --- | --- |
| `index.html` | Landing page: project intro, team, process links, sources and use of AI |
| `research.html` | Service context, benchmarking, user groups, findings, persona, design question |
| `ideas.html` | Idea Wall with dropdown cards, selection and chosen idea |
| `prototype.html` | Prototype |
| `business-model.html` | Business Model Canvas as text |
| `css/style.css` | All styling. Colours and fonts are at the top in `:root` |
| `js/main.js` | Mobile menu, scroll reveal, section highlighting, "expand all" on the Idea Wall |
| `images/` | Idea wall picture, favicon, placeholder team portraits |

## Editing

- **Placeholders:** search the HTML files for `To add`, `To write`, `Draft` and square brackets `[ ... ]`. Those are the parts still to fill in.
- **Team photos:** put the photo in `images/team/` and change the `src` and `alt` of the matching `<img>` in `index.html`.
- **Images:** replace a `<div class="placeholder">...</div>` with `<img src="images/your-file.png" alt="Describe the image">`.
- **Idea cards:** each one is a `<details class="idea">` block in `ideas.html`. Copy one to add another.
- **Navigation:** the menu is repeated in each HTML file, so a change to it has to be made in all five.
- **Finnish text:** the team's own answers are kept in Finnish (marked `lang="fi"`), each followed by a short English summary. Delete the summaries if you do not want them.
