# NextJS Course

## Pre-rendering & Data Fetching

### Static Generation SSG

- Pre-generates a page (with data prepared on the server-side) **during build time**
- Pages are prepared ahead of time and can be cached by the sever/CDN serving the app.
- Done when `next build` is executed on build machine

```js
    export async function getStaticProps(context) { ... }
```

### Incremental Static Generation ISG

- Pre-generate page
- Re-generate it on every request at most every *X* seconds
