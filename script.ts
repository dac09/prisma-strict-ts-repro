import { PrismaClient } from '@prisma/client'

import type { Post } from '@prisma/client';

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // @MARK 👇
  // TypeScript error here
  // Even though Promise<Post | null> and Promise<Post> | Promise<null> should be equivalent
  const post: Promise<Post> | Promise<null> = prisma.post.findUnique({
    where: {
      id: 2,
    },
  });
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
