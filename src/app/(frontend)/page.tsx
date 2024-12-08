import { fetchSanityLive, groq } from '@/sanity/lib/fetch'
import Link from 'next/link'
import Date from '@/ui/Date'

export default async function Home() {
	const artworks = await fetchSanityLive<Sanity.Artwork[]>({
		query: groq`*[_type == 'artwork']{
			...,
			'title': layers[_type == 'reference']->.title,
		}`,
	})

	return (
		<>
			<h1 className="font-dela">24アンド95</h1>

			<ul>
				{artworks.map((artwork) => (
					<li key={artwork._id}>
						<Link href={`/art/${artwork._id}`}>
							<span className="font-serif text-2xl">
								{artwork.title || artwork._id}
							</span>

							<Date className="text-xs" date={artwork.date} />
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
