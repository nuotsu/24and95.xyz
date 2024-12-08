import Grey from './Grey'

export default function Design({ design }: { design: Sanity.Design }) {
	if (!design?.id?.current) return null

	return (
		<div className="col-span-full row-span-full">
			{(() => {
				switch (design.id.current) {
					case 'grey':
						return <Grey design={design} />
				}
			})()}
		</div>
	)
}
