import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
})

export const collections = {
  blogs
}