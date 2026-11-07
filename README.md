# Sawyer Greaves — VitePress portfolio

A personal research website built with VitePress. Your writing lives in Markdown files. Routine updates do not require editing CSS, Vue components, or JavaScript.

## Start here

1. Install **Node.js 24 LTS** from [nodejs.org](https://nodejs.org/).
2. Extract this project, then open a terminal in the folder containing `package.json`.
3. Run:

   ```sh
   npm install
   npm run docs:dev
   ```

4. Open the local address printed in the terminal. Keep the terminal running while editing. Save a Markdown file to see the page update.

Press `Ctrl+C` in the terminal when you are finished. After the first installation, you normally only need `npm run docs:dev` to preview the site again.

The first `npm install` creates `package-lock.json`. Commit it along with your site. For repeatable builds, change `npm install` to `npm ci` in both files in `.github/workflows/` after that lockfile exists.

## Where to make updates

| What you want to change | File or folder |
| --- | --- |
| Homepage introduction | `docs/index.md` |
| Bio, contact links, and resume link | `docs/about.md` |
| Graduate research introduction | `docs/research/index.md` |
| Magnetic manipulation research | `docs/research/magnetic-manipulation.md` |
| Individual engineering projects | `docs/projects/` |
| Publications and preprints | `docs/publications.md` |
| Resume PDF | `docs/public/files/resume.pdf` |
| Images | `docs/public/images/` |
| Copyable starting points | `templates/` |

The pages in `docs/` become the website. The instructions and templates outside `docs/` are for you and are not published as website pages.

## Edit text without using a terminal

Once the project is in your GitHub repository and GitHub Pages is set up, you can make small updates entirely in the browser:

1. Open the appropriate `.md` file on GitHub.
2. Select the pencil icon to edit it.
3. Change the text and use GitHub's preview to check the Markdown.
4. Commit the change to your default branch.
5. The included GitHub Actions workflow builds and deploys the updated website. Check the repository's **Actions** tab if a build fails.

The GitHub preview shows the text structure; the final site applies the portfolio's layout automatically.

## Add a research project or engineering project

1. Copy `templates/research.md` into `docs/research/`, or `templates/project.md` into `docs/projects/`.
2. Give the new file a short, lowercase name with hyphens, such as `space-robot-control.md`. Do not name it `index.md`; that name is reserved for the collection overview.
3. Replace the example title, description, dates, and body text with your content.
4. Put your image in `docs/public/images/`, then update both image paths in the new Markdown file.
5. Set `order` to control the card's position within its collection. Lower numbers appear first.
6. Set `featured: true` if you want the work to be eligible for the homepage's featured work display. The homepage shows the first featured research entry and the first three featured engineering projects, sorted by `order`.

The new entry is automatically included in its research or project collection. You do not need to add a navigation item or edit the card layout.

Keep `title` and `category` filled in: those fields identify collection entries. Keep unfinished drafts in `templates/` until you are ready to publish them; every page in `docs/` is public after deployment.

The block between the two `---` lines at the top is called *frontmatter*. It supplies the card's title, summary, image, and labels. The writing below it is the full project page.

```yaml
---
title: "My research project"
description: "A short explanation of the question and my contribution."
category: Graduate research
period: "Started September 2026"
order: 2
image: /images/my-project.webp
imageAlt: "A useful description of the figure."
tags: [Robotics, Controls, Python]
featured: false
layout: doc
---
```

Quote text containing a colon (`:`), a hash (`#`), or other YAML punctuation. Use spaces rather than tabs for indentation. If a title contains a double quote, wrap the whole value in single quotes instead, for example `title: 'A "zoning" approach'`. Keep `true`, `false`, and numeric `order` values unquoted.

If you do not have an image yet, remove the `image` and `imageAlt` fields and the `![...](...)` line from the body. A short, specific description is more useful than an unrelated placeholder image.

Use the actual project period. The old Jekyll filenames and post dates were inconsistent; the migrated project dates come from their `project-date` fields. The research page says “Started May 2025” because the old archive does not establish a current end date.

## Add a publication

1. Open `templates/publication.md` and copy its citation entry into `docs/publications.md`.
2. Enter the exact title, authors in order, venue or repository, year, and status.
3. Add real paper, DOI, code, or PDF links. Remove links that do not exist.
4. Remove the empty-state sentence when your first entry is ready.

Keep publications in reverse chronological order. Label preprints, accepted papers, and published papers accurately. The old website referred to “THIS PAPER” but supplied no citation, so no publication has been invented during this migration.

For a paper PDF you are permitted to share, place it in `docs/public/papers/` and link to it with `[PDF](/papers/filename.pdf)`.

## Replace your resume

Replace `docs/public/files/resume.pdf` with your current PDF, keeping the same filename. Existing website links will continue to work.

**Before publishing:** the included PDF is the unchanged resume from your old website. It lists a December 2025 undergraduate graduation date and does not reflect your current graduate research. Update it before sharing this site on applications, LinkedIn, or your resume. The old transcript is not published in this version, and outdated GPA claims were removed from the website text.

Review your affiliation, research description, project dates, and contact links before launch. Your current message establishes your graduate-student and PhD-applicant status; other project descriptions were migrated from the supplied archive without adding unsupported results.

## Publish with GitHub Pages

The project includes a GitHub Actions deployment workflow for GitHub Pages. It supports pushes to `main` or `master` and determines the site's base path from the Pages configuration, so a repository site such as `https://rodeosocks.github.io/portfolio_website/` can load its pages and assets correctly.

1. Back up your current repository before replacing the Jekyll source.
2. Put the **contents of this project folder** at the root of your website repository, including `.github/`, `docs/`, `templates/`, and `package.json`. Remove the old Jekyll build files rather than mixing the two frameworks.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Commit the project to `main` or `master`, or run the deployment workflow manually from **Actions**.
6. Wait for the workflow to finish, then open the URL shown in **Settings → Pages**.

If your default branch has a different name, update the branch list in `.github/workflows/deploy.yml`.

Do not upload the entire source ZIP as if it were a finished static website. VitePress must build the Markdown into HTML. The workflow handles that build for GitHub Pages.

## Check a production build locally

The source and content have been checked, but package downloads were blocked in the authoring workspace, so a full VitePress build could not be run there. Run the commands below before publishing. No lockfile or generated HTML is included in this handoff.

```sh
npm run docs:build
npm run docs:preview
```

Open the preview address printed by the command. Check the navigation, research and project pages, images, email link, and resume download. A build catches many broken internal Markdown links.

If you use a different static host, its build command is `npm run docs:build` and its output folder is `docs/.vitepress/dist`. Deploy that output folder. Use Node.js 24 for the build.

## Markdown basics

```md
## A section heading

A paragraph with **bold text** and *italic text*.

- One item
- Another item

[A link to a project](./projects/zoning-ik.md)

![A description of the image](/images/my-image.webp)
```

Image and PDF paths beginning with `/` are relative to `docs/public/`; do not include `public` in the link. VitePress adds the deployment base path for these Markdown links. Keep image filenames lowercase and use hyphens instead of spaces.

## Framework documentation

- [VitePress 1.x documentation](https://vuejs.github.io/vitepress/v1/)
- [Writing Markdown](https://vuejs.github.io/vitepress/v1/guide/markdown)
- [Deploying VitePress](https://vuejs.github.io/vitepress/v1/guide/deploy)
