- Commit [2479ac1cfbb959399afc841e5eaf40d7a007256c](https://github.com/OliverHume/nextjs-vercel-example/commit/2479ac1cfbb959399afc841e5eaf40d7a007256c) -> deploy to [Vercel](https://vercel.com/oliverhume/nextjs-vercel-example/6whAbokKDWaqJYaPdietP2mMjo18) -> with this commit, it can be deployed successfully


- Commit [d80716bbb9bf5c2bd3fa30c6812e12d3cee8c9d6](https://github.com/OliverHume/nextjs-vercel-example/commit/d80716bbb9bf5c2bd3fa30c6812e12d3cee8c9d6) -> deploy to [Vercel](https://vercel.com/oliverhume/nextjs-vercel-example/JDPnizo6HWrzDpzJL4gFWTtaLQQY) -> with this commit, it can be deployed successfully
In this commit, I added Research button which links to one Server-side rendering page

- Commit [77a24f01ffaee3141b8adf05562a916446a8e8c4](https://github.com/OliverHume/nextjs-vercel-example/commit/77a24f01ffaee3141b8adf05562a916446a8e8c4) -> deploy to [Vercel](https://vercel.com/oliverhume/nextjs-vercel-example/F7KounwDesSzLykFK9ZP6nhHBX74) -> [Error](https://vercel.com/oliverhume/nextjs-vercel-example/F7KounwDesSzLykFK9ZP6nhHBX74/functions?name=research)
In this commit, I added Nx and moved app to frontends/example folder.
After deployed to Vercel. 
There is an error when I clicked on Research button ( which will link to a SSR page)

# Using repo:

1. Install packages
```bash
$ yarn
```

2. Add vercel configuration
- Replace `orgId` and `projectId` in `frontends/example/.vercel/project.json` file

3. Build `example` project by Vercel CLI
```bash
$ yarn nx vercel-build example
```

4. Deploy `example` app to Vercel by Vercel CLI
```bash
$ yarn nx vercel-deploy example --token <your vercel token which accesses to your org that you config in step 2>
```