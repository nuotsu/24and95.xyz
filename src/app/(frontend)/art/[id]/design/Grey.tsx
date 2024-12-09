import Text from '@/ui/Text'

export default function Grey({ design }: { design: Sanity.Design }) {
	return (
		<div className="flex h-full flex-col text-center text-[#de5625] selection:bg-[#de5625] selection:text-white">
			<div className="grid h-full place-content-center mix-blend-exclusion">
				<h1 className="font-serif text-[22vw] leading-[.6] tracking-tight">
					{design.title}
				</h1>
				<p className="font-dela text-[6vw]" lang="ja">
					宇宙人グレイ
				</p>
			</div>

			<Text
				className="mt-auto px-[5vw] py-[2vw] font-serif text-[1.2vw] text-balance"
				design={design}
			/>
		</div>
	)
}
