import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { remarkCodeMeta } from "./src/lib/remark-code-meta";

const posts = defineCollection({
    name: "posts",
    directory: "content",
    include: "**/*.mdx",
    schema: z.object({
        title: z.string(),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        author: z.string().optional(),
        summary: z.string(),
        image: z.string().optional(),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        });
        return {
        ...document,
            mdx,
        };
    },
});

const projectDetails = defineCollection({
    name: "projectDetails",
    directory: "project-content",
    include: "**/*.mdx",
    schema: z.object({ content: z.string() }),
    transform: async (document, context) => ({
        ...document,
        mdx: await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        }),
    }),
});

export default defineConfig({
    collections: [posts, projectDetails],
});

