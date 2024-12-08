import { defineLive } from 'next-sanity'
import { client } from './client'
import { dev } from '@/lib/env'
import { token } from './token'

export { groq } from 'next-sanity'

export const { sanityFetch, SanityLive } = defineLive({
	client,
	// client: client.withConfig({
	// 	apiVersion: 'vX',
	// }),
	serverToken: token,
	browserToken: token,
})

export async function fetchSanityLive<T = any>(
	args: Parameters<typeof sanityFetch>[0],
) {
	const { data } = await sanityFetch({
		...args,
		perspective: dev ? 'previewDrafts' : 'published',
	})

	return data as T
}
