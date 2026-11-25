# Project details

Each project in `src/data/resume.tsx` has a `slug` and automatically gets a detail page. To add a longer write-up, create an MDX file in this folder with the same name as the slug. For example, `rfu.mdx` appears at `/projects/rfu`.

Write Markdown or MDX in that file, just like a blog post. The title, summary, dates, technologies, media, and links come from `src/data/resume.tsx`; the MDX content appears below the summary. Projects without an MDX file still have a detail page.

You can optionally add `detailTitle`, `category`, `role`, `status`, and `mediaCaption` to a project in `resume.tsx` to show more information on its detail page. Leave a field empty or omit it when it does not apply.

To add a photo collection, use the `PhotoGallery` component as shown in `golden-promise.mdx`. Add or reorder entries in its `photos` list. Photos are displayed as compact square tiles. Keep the image files in `public` and use paths starting with `/`.

Each photo can include a `caption` for the text shown on hover or focus, for example `{ src: "/photos/team.jpg", alt: "Our team", caption: "After our final presentation" }`. If you leave it out, the image's `alt` text is shown instead.

Use `captionPosition` to place the bubble away from faces: `"top-left"`, `"top-right"`, `"bottom-left"`, or `"bottom-right"`. It defaults to `"bottom-left"`.

The RFU page uses `RFUMessages` for its message cards. Add messages people shared to `rfu.mdx`. Each entry needs `name` and `text`; `username` and `image` are optional. Use an anonymous name when appropriate. One message appears as a single stationary card; the marquee scrolls once there are at least two messages.

