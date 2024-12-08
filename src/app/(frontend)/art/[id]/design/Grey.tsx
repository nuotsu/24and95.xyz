import Text from '@/ui/Text'

export default function Grey({ design }: { design: Sanity.Design }) {
	return (
		<div className="flex h-full flex-col text-center text-[#de5625]">
			<div className="grid h-full place-content-center">
				<h1 className="font-serif text-[20vw] leading-[.6]">{design.title}</h1>
				<p className="font-dela text-[6vw]" lang="ja">
					宇宙人グレイ
				</p>
			</div>

			<Text
				className="mt-auto p-[2vw] font-serif text-[1vw] text-balance"
				design={design}
			/>
		</div>
	)
}
