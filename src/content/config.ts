import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
  })
})

export const collections = {
  blogs
}