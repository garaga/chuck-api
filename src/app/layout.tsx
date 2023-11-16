import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Home from "@/app/page";
import getQuote from "@/lib/get-quote";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Sergii Garashchenko Test',
    description: 'Generated by SGO & NextJs',
}

RootLayout.getInitialProps = async () => {
    return {initQuote: await getQuote()}
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
