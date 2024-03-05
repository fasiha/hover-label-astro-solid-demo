1. Clone this repo
2. `npm install`
3. `npm run start`

The page that opens will have a few seconds lag when it first opens, visible in Firefox profiler.

There are two ways to fix this:

1. in `Word.tsx`, replace `<label>` with something else like `<>` or `<span>` or `<div>`. OR
2. in `Sentence.astro` change the CSS to totally not render the hover nodes:
   1. for `.sentence-annotations` replace `display: block; visibility: hidden;` with `display: none;` and
   2. for `.hover-area:hover .sentence-annotations` replace `visibility: visible;` with `display: block`

I understand why the second method works but why does the first solution work? What's wrong with `<label>`?