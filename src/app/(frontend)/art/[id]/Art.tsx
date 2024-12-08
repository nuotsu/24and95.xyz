import Noise from '@/ui/Noise'
import Img from '@/ui/Img'
import Design from './design'
import Date from '@/ui/Date'

export default function Art({ artwork }: { artwork: Sanity.Artwork }) {
	return (
		<section className="grid min-h-svh place-content-center overflow-hidden">
			<figure className="anim-film-develop relative grid w-screen">
				{artwork.layers?.reverse().map((layer, i) => {
					switch (layer._type) {
						case 'image':
							return (
								<div
									className="relative col-span-full row-span-full w-full overflow-hidden"
									key={i}
								>
									{layer.addNoise && (
										<Noise
											className="absolute inset-0 opacity-70 mix-blend-color-dodge grayscale"
											baseFrequency={3}
											numOctaves={6}
										/>
									)}

									<Img
										className="w-full"
										image={layer}
										alt={`Layer ${i + 1}`}
										draggable={false}
										loading="eager"
									/>
								</div>
							)

						case 'design':
							return <Design design={layer} key={i} />
					}
				})}

				{artwork.date && !artwork.hideDate && (
					<figcaption className="absolute right-[10vw] bottom-[5vw]">
						<Date
							className="text-amber-300/60 blur-[.5px]"
							date={artwork.date}
						/>
					</figcaption>
				)}
			</figure>
		</section>
	)
}
