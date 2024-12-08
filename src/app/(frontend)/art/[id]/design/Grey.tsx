import Text from '@/ui/Text'
import { cn } from '@/lib/utils'
import css from './Grey.module.css'

export default function Grey({ design }: { design: Sanity.Design }) {
	return (
		<div
			className={cn(
				css.root,
				'flex h-full flex-col text-center text-[#de5625]',
			)}
		>
			<div className="grid h-full place-content-center">
				<h1 className="serif text-[20vw] leading-[.6]">{design.title}</h1>
				<p className="text-[6vw]" lang="ja">
					宇宙人グレイ
				</p>
			</div>

			<Text
				className="serif mt-auto p-[2vw] text-[1vw] text-balance"
				design={design}
			/>
		</div>
	)
}
