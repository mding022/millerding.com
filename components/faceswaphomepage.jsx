import Link from "next/link"

export default function Component() {
    return (
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <h1 className="text-3xl font-bold mb-6">FaceSwap Templates{"  "}
                <Link href="/" className="text-3xl font-bold tracking-tight bg-amber-100 hover:bg-orange-100">
                    {" "}Back{" "}
                </Link> </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Link href="/fstemplate" prefetch={false}><div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                        <img
                            src="/images/cow.jpg"
                            alt="imgname"
                            width={400}
                            height={300}
                            className="h-48 w-full object-cover"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <CheckIcon className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Template 1</h3>
                    </div>
                </div></Link>
                <Link href="/fstemplate" prefetch={false}><div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                        <img
                            src="/images/cow.jpg"
                            alt="imgname"
                            width={400}
                            height={300}
                            className="h-48 w-full object-cover"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <CheckIcon className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Template 2</h3>
                    </div>
                </div></Link>
                <Link href="/fstemplate" prefetch={false}><div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                        <img
                            src="/images/cow.jpg"
                            alt="imgname"
                            width={400}
                            height={300}
                            className="h-48 w-full object-cover"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <CheckIcon className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Template 3</h3>
                    </div>
                </div></Link>
                <Link href="/fstemplate" prefetch={false}><div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                        <img
                            src="/images/cow.jpg"
                            alt="imgname"
                            width={400}
                            height={300}
                            className="h-48 w-full object-cover"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <CheckIcon className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Template 4</h3>
                    </div>
                </div></Link>
                <Link href="/fstemplate" prefetch={false}><div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                        <img
                            src="/images/cow.jpg"
                            alt="imgname"
                            width={400}
                            height={300}
                            className="h-48 w-full object-cover"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <CheckIcon className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Template 5</h3>
                    </div>
                </div></Link>
                <Link href="/fstemplate" prefetch={false}><div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                        <img
                            src="/images/cow.jpg"
                            alt="imgname"
                            width={400}
                            height={300}
                            className="h-48 w-full object-cover"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <CheckIcon className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Template 6</h3>
                    </div>
                </div></Link>
                <Link href="/fstemplate" prefetch={false}><div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                        <img
                            src="/images/cow.jpg"
                            alt="imgname"
                            width={400}
                            height={300}
                            className="h-48 w-full object-cover"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <CheckIcon className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Template 7</h3>
                    </div>
                </div></Link>
                <Link href="/fstemplate" prefetch={false}><div className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative">
                        <img
                            src="/images/cow.jpg"
                            alt="imgname"
                            width={400}
                            height={300}
                            className="h-48 w-full object-cover"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <CheckIcon className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Template 8</h3>
                    </div>
                </div></Link>
            </div>
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