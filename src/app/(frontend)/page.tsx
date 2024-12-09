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
		<section className="mt-(--header-height)">
			<ul className="mx-auto max-w-sm">
				{artworks.map((artwork) => (
					<li key={artwork._id}>
						<Link
							className="flex items-baseline gap-x-4"
							href={`/art/${artwork._id}`}
						>
							<span className="grow font-serif text-2xl">
								{artwork.title || artwork._id}
							</span>

							<Date
								className="text-xs text-amber-400/90 blur-[.5px]"
								date={artwork.date}
							/>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
