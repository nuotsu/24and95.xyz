import Img from '@/ui/Img'
import Date from '@/ui/Date'

export default function Art({ artwork }: { artwork: Sanity.Artwork }) {
	return (
		<figure className="relative grid">
			{artwork.layers
				?.reverse()
				.map((layer, i) => (
					<Img
						className="col-span-full row-span-full"
						image={layer}
						alt={`Layer ${i}`}
						draggable={false}
						key={i}
					/>
				))}

			<figcaption className="absolute right-8 bottom-8">
				<Date className="text-amber-300/70" date={artwork.date} />
			</figcaption>
		</figure>
	)
}
