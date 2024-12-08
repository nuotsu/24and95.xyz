import type { Metadata } from 'next'
import '@/styles/globals.css'

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
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}
