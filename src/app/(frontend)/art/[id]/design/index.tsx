import Grey from './Grey'
import TurboGranny from './TurboGranny'

export default function Design({ design }: { design: Sanity.Design }) {
	if (!design?.id?.current) return null

	return (
		<div className="relative col-span-full row-span-full">
			{(() => {
				switch (design.id.current) {
					case 'grey':
						return <Grey design={design} />
					case 'turbogranny':
						return <TurboGranny design={design} />
				}
			})()}
		</div>
	)
}
