import { fetchSanityLive, groq } from '@/sanity/lib/fetch'
import { notFound } from 'next/navigation'
import Art from './Art'

type Params = {
	params: Promise<{ id: string }>
}

export default async function ArtPage({ params }: Params) {
	const { id } = await params

	const artwork = await fetchSanityLive<Sanity.Artwork>({
		query: groq`*[_type == 'artwork' && _id == $id][0]`,
		params: { id },
	})

	if (!artwork) return notFound()

	return <Art artwork={artwork} />
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
