import type { Metadata } from 'next';
import { Inter, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['400', '700'], variable: '--ibm' });

export const metadata: Metadata = {
	title: 'FinVista',
	description: 'FinVista is a modern financial dashboard for everyone.',

	icons: {
		icon: '/icons/icon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${ibmPlexSerif.className}`}>{children}</body>
		</html>
	);
}
