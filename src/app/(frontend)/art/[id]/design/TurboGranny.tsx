import { cn } from '@/lib/utils'
import Img from '@/ui/Img'
import Text from '@/ui/Text'

export default function TurboGranny({ design }: { design: Sanity.Design }) {
	return (
		<>
			<div className="pointer-events-none absolute inset-0 bg-[#af1421] opacity-50 mix-blend-color-burn" />

			<div className="relative flex h-full flex-col items-end pr-[20vw] pb-[3vw] text-right font-serif">
				<div className="z-1 mr-[-9vw] mb-auto translate-y-[-3vw] opacity-30 mix-blend-color-dodge grayscale [mask-image:linear-gradient(to_bottom,black_50%,transparent)]">
					<Img
						className="w-[58vw]"
						image={design.assets?.[0]}
						alt={design.title}
						loading="eager"
						draggable={false}
					/>
				</div>

				<h1 className="text-[14vw] leading-none tracking-tight mix-blend-difference">
					{design.title}
				</h1>

				<Text
					className="max-w-[60vw] text-[1vw] text-balance mix-blend-difference"
					design={design}
				/>
			</div>

			<h2
				className={cn(
					'absolute top-1/2 right-0 -translate-y-1/2 whitespace-nowrap',
					'font-dela text-[16.3vw] leading-tight tracking-[-.15em] [writing-mode:vertical-rl]',
					'mix-blend-difference',
				)}
			>
				ターボババア
				<div className="absolute inset-0 backdrop-blur [mask-image:linear-gradient(to_right,transparent,black_60%)]" />
			</h2>
		</>
	)
}
