import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

function formatDate(date: string, pattern: string) {
	return format(date + 'T00:00:00', pattern).padStart(2, ' ')
}

export default function Date({
	date,
	className,
}: { date?: string } & ComponentProps<'time'>) {
	if (!date) return null

	return (
		<time
			className={cn('font-bold text-amber-400 tabular-nums', className)}
			dateTime={date}
		>
			<i>&rsquo;{formatDate(date, 'yy')}年</i>
			<i>{formatDate(date, 'M')}月</i>
			<i>{formatDate(date, 'd')}日</i>
		</time>
	)
}
