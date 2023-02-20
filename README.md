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

### Dynamic SSG

- For SSG in a next app that uses dynamic pages (e.g `[pid].js`), we need to pre-generate paths for possible `[pid]`

#### Pre-Generated Paths (Routes)

- Dynamic pages (`[id].js` etc) do not just need data. You also need to know which `[id]` values will be available.
- Multiple concrete `[id]` page instances (e.g id = 1, id = 2 etc.) are `pre-generated`

```js
    export async function getStaticPaths() { ... }
```

#### Link prefetching

- If there are Next Links on a page, Next fetches data for pages corresponding to those links ahead of time before user even clicks on a link to go to its page.

### Fallback pages in SSG & Pre-generated Paths

- `fallback: false` - Must specify all possible dynamic page ids. All are then pre-generated.
- `fallback: true`  - Only specify dynamic pages that need pre-generating. Rest are generated just in time upon request. Allows you to pregenerate for instance frequently visited pages only.
- If not pre-generating all pages, you MUST provide a `fallback state` which will be used while page is generating upon request (because it doesn't happen instantly).

 ```js
    if(!loadedProduct) {
        return <p>Loading...</p>
    }
 ```

- `fallback: 'blocking'` - No need to provide fallback state. Next waits till page is generated and ready before it serves it.

### Server-Side Rendering SSR

- Sometimes you need to pre-render for every request OR you need access to the request object (e.g cookies)
- NextJs allows you to run `real server-side code` as well

```js
    export async function getServerSideProps() { ... }
```

## Creating Firebase Database

- Go to [Firebase](https://firebase.google.com/)
- From menu bar select `Go to console`
- Login with google account if not signed in already
- Select `Create Project` or `Add Project` and give it a name
- Under security rules, `use test mode`
- From the side menu choose `Realtime Database`
- Create your database. Copy the url eg `https://next-course-54a9c-default-rtdb.firebaseio.com/sales.json`

## SWR hook (stale-while-revalidate)

- Install `yarn add swr`