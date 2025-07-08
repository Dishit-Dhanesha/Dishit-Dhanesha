import { marked } from 'marked'

export async function useMarkdownFromUrl(url: string) {
  const { data, error } = await useFetch<string>(url)

  if (error.value) {
    console.error('Markdown fetch error:', error.value)
    return ''
  }

  return marked.parse(data.value || '')
}