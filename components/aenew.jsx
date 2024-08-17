import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex h-screen w-full">
            <aside className="fixed top-0 left-0 bottom-0 w-28 p-0.5 bg-gray-100 border-r">
                <div className="flex font-black mb-16 mt-7 text-2xl items-center flex-col">
                    <MenuIcon className="w-8 h-8" />
                </div>
                <nav className="space-y-10 font-bold text-gray-700 text-xs">
                    <div className="flex flex-col items-center text-blue-600 text-center">
                        <img
                            src="/images/bluestar.svg"
                            width={30}
                            height={30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: "30/30", objectFit: "cover" }}
                        />
                        <span>After Effects</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/images/star.svg"
                            width={30}
                            height={30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: "30/30", objectFit: "cover" }}
                        />
                        <span>Faceswap</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/star.svg"
                            width={30}
                            height={30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: "30/30", objectFit: "cover" }}
                        />
                        <span>FS Video</span>

                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/star.svg"
                            width={30}
                            height={30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: "30/30", objectFit: "cover" }}
                        />
                        <span>AI Eraser</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/star.svg"
                            width={30}
                            height={30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: "30/30", objectFit: "cover" }}
                        />
                        <span>Remove BG</span>
                    </div>
                </nav>
            </aside>
            <main className="ml-28 flex-1 p-4 bg-gray-50 overflow-auto">
                <header className="flex items-center justify-between pb-4 border-b">
                    <h1 className="text-xl font-bold">After Effects Templates</h1>
                </header>
                <div className="flex items-center space-x-4 py-4">
                    <Button variant="default">
                        <CheckIcon className="w-4 h-4 mr-2" />
                        All
                    </Button>
                    <Button variant="outline">Short duration</Button>
                    <Button variant="outline">Long duration</Button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="/transition" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">transition.aep</h2>
                            <p className="text-xs text-gray-500">Simple before and after</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">NewTemplate.aep</h2>
                            <p className="text-xs text-gray-500">Three image showcase</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated today</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated yesterday</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated 2 days ago</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated today</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated yesterday</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated 2 days ago</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated today</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated yesterday</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated 2 days ago</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated today</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated yesterday</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div className="absolute inset-0 z-10">
                            <Link href="#" className="absolute inset-0" prefetch={false}>
                                <span className="sr-only">View</span>
                            </Link>
                        </div>
                        <div className="w-full h-32 bg-gray-200" />
                        <div className="p-4 bg-background">
                            <h2 className="text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated 2 days ago</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}