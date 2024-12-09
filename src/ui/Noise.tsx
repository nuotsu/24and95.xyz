import type { ComponentProps } from 'react'

export default function Noise({
	baseFrequency = 2,
	numOctaves = 6,
	...props
}: ComponentProps<'svg'>) {
	return (
		<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" {...props}>
			<filter id="noiseFilter">
				<feTurbulence
					type="fractalNoise"
					baseFrequency={baseFrequency}
					numOctaves={numOctaves}
					stitchTiles="stitch"
				/>
			</filter>

			<rect width="100%" height="100%" filter="url(#noiseFilter)" />
		</svg>
	)
}
