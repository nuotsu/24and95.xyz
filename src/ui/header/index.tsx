import Wrapper from './Wrapper'
import Link from 'next/link'

export default function Header() {
	return (
		<Wrapper className="fixed top-0 left-0 z-10 mix-blend-difference">
			<h1 className="font-dela text-2xl leading-none">
				<Link href="/">24アンド95</Link>
			</h1>
		</Wrapper>
	)
}
