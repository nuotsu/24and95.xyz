import { fetchSanityLive, groq } from '@/sanity/lib/fetch'
import Link from 'next/link'

export default async function Home() {
	const artworks = await fetchSanityLive<Sanity.Artwork[]>({
		query: groq`*[_type == 'artwork']`,
	})

	return (
		<>
			<h1>24and95</h1>
			<ul>
				{artworks.map((artwork) => (
					<li key={artwork._id}>
						<Link href={`/art/${artwork._id}`}>{artwork._id}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
