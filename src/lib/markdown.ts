// lib/markdown.ts
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { rehypePrettyCode } from 'rehype-pretty-code'

export async function renderMarkdown(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(rehype)
    .use(rehypePrettyCode, {
  theme: 'one-dark-pro',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
})

    .use(rehypeStringify)
    .process(markdown)

  return String(file)
}
