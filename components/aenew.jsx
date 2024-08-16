import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
    return (
        <div className="flex h-screen w-full" >
            <aside className="w-64 p-4 bg-gray-100 border-r">
                <div className="flex items-center mb-4">
                    <MenuIcon className="w-6 h-6" />
                </div>
                <nav className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <StarIcon className="w-6 h-6" />
                        <span>After Effects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <StarIcon className="w-6 h-6" />
                        <span>Faceswap</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <StarIcon className="w-6 h-6" />
                        <span>Faceswap Video</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <StarIcon className="w-6 h-6" />
                        <span>AI Eraser</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <StarIcon className="w-6 h-6" />
                        <span>Remove BG</span>
                    </div>
                </nav>
            </aside>
            <main className="flex-1 p-4 bg-gray-50">
                <header className="flex items-center justify-between pb-4 border-b">
                    <h1 className="text-xl font-bold">After Effects Templates</h1>
                    <MoveVerticalIcon className="w-6 h-6" />
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
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">transition.aep</h2>
                            <p className="text-xs text-gray-500">Simple before and after</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">NewTemplate.aep</h2>
                            <p className="text-xs text-gray-500">Three image showcase</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated today</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated yesterday</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated 2 days ago</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated today</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated yesterday</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated 2 days ago</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated today</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated yesterday</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated 2 days ago</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated today</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated yesterday</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <div className="w-full h-32 bg-gray-200" />
                            <h2 className="mt-2 text-sm font-bold">Title</h2>
                            <p className="text-xs text-gray-500">Updated 2 days ago</p>
                        </CardContent>
                    </Card>
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


function MoveVerticalIcon(props) {
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
            <polyline points="8 18 12 22 16 18" />
            <polyline points="8 6 12 2 16 6" />
            <line x1="12" x2="12" y1="2" y2="22" />
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