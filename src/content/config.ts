import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
});

const blog = defineCollection({
  type: "content",
  schema: baseSchema,
});

const news = defineCollection({
  type: "content",
  schema: baseSchema,
});

export const collections = { blog, news };
