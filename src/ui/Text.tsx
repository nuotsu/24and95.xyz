import { PortableText } from 'next-sanity'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export default function Text({
	design,
	index = 0,
	className,
}: {
	design: Sanity.Design
	index?: number
} & ComponentProps<'div'>) {
	if (!design) return null

	return (
		<div className={cn('space-y-2', className)}>
			<PortableText value={design.text?.[index].content} />
		</div>
	)
}
