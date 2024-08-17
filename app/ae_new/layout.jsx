import { Roboto } from 'next/font/google'
import { cn } from '@/lib/utils'
import './ae.css'

const fontHeading = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'], // All available weights
    display: 'swap',
    variable: '--font-heading',
})

const fontBody = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'], // All available weights
    display: 'swap',
    variable: '--font-body',
})

export default function Layout({ children }) {
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
