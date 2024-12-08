import { fetchSanityLive, groq } from '@/sanity/lib/fetch'
import { notFound } from 'next/navigation'

type Params = {
	params: Promise<{ id: string }>
}

export default async function Art({ params }: Params) {
	const { id } = await params

	const artwork = await fetchSanityLive<Sanity.Artwork>({
		query: groq`*[_type == 'artwork' && _id == $id][0]`,
		params: { id },
	})

	if (!artwork) return notFound()

	return <div>{artwork?._id}</div>
}

export async function generateMetadata({ params }: Params) {
	const { id } = await params

	return {
		title: `Art: ${id}`,
	}
}

export async function generateStaticParams() {
	const ids = await fetchSanityLive<string[]>({
		query: groq`*[_type == 'artwork']._id`,
	})

	return ids.map((id) => ({ id }))
}
