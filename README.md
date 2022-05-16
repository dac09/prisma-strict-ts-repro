## Prisma strict typescript error reproduction

### Steps:
1. `yarn install`
2. `yarn prisma generate`
3. `yarn tsc`

You should see the error popping up in line 12 of script.ts.

> Note
> This only happens in TypeScript strict mode

### Analysis
`findUnique` from the Prisma client returns `Promise<Post | null>` - this should be equivalent in theory to `Promise<Post> | Promise<null>`

**Why are you even trying to assign the type?**
This is a minimal reproduction - we are facing this problem typing Graphql resolvers, where we use graphql-codegen to define the return type of resolvers
