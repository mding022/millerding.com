// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Poppins } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { ReactNode } from 'react' // Import ReactNode for typing

const fontHeading = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const fontBody = Space_Mono({
    weight: ["400", "700"],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
})

interface LayoutProps {
    children: ReactNode // Type children properly
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'antialiased',
                    fontHeading.variable,
                    fontBody.variable
                )}
            >
                {children}
            </body>
        </html>
    )
}
