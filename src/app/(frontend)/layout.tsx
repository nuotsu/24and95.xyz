import Header from '@/ui/header'
import { SanityLive } from '@/sanity/lib/fetch'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '24and95',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-canvas text-ink">
				<Header />
				<main role="main">{children}</main>
				<SanityLive />
			</body>
		</html>
	)
}
