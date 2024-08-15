/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FZKEdiSxSKo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 py-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">millerding.com</h1>
                <p>
                    link to{" "}
                    <Link href="/ae" className="text-primary hover:underline" prefetch={false}>
                        after effects api
                    </Link>
                </p>
                <p>
                    link to{" "}
                    <Link href="/faceswap" className="text-primary hover:underline" prefetch={false}>
                        faceswap
                    </Link>
                </p>
                <p>
                    link to{" "}
                    <Link href="/fsvideo" className="text-primary hover:underline" prefetch={false}>
                        faceswap video
                    </Link>
                </p>
                <p>
                    link to{" "}
                    <Link href="/removebg" className="text-primary hover:underline" prefetch={false}>
                        remove bg
                    </Link>
                </p>
            </div>
        </div>
    )
}
