
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 py-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">millerding.com</h1>
                <p>
                    link to{" "}
                    <Link href="/portfolio" className="text-indigo-400 font-bold hover:underline" prefetch={false}>
                        portfolio
                    </Link>
                </p>
                <p>
                    link to{" "}
                    <Link href="/ae" className="text-indigo-400 font-bold hover:underline" prefetch={false}>
                        after effects api
                    </Link>
                </p>
                <p>
                    link to (unfinished){" "}
                    <Link href="/fsvideo" className="text-indigo-400 font-bold hover:underline" prefetch={false}>
                        faceswap video
                    </Link>
                </p>
                <p>
                    link to (unfinished){" "}
                    <Link href="/removebg" className="text-indigo-400 font-bold hover:underline" prefetch={false}>
                        remove bg
                    </Link>
                </p>
                <p>
                    link to (unfinished){" "}
                    <Link href="/aieraser" className="text-indigo-400 font-bold hover:underline" prefetch={false}>
                        ai eraser
                    </Link>
                </p>
            </div>
        </div>
    )
}
