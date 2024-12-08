import { PortableText } from 'next-sanity'
import type { ComponentProps } from 'react'

export default function Text({
	design,
	index = 0,
	...props
}: {
	design: Sanity.Design
	index?: number
} & ComponentProps<'div'>) {
	if (!design) return null

	return (
		<div {...props}>
			<PortableText value={design.text?.[index].content} />
		</div>
	)
}
