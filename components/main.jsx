"use client"

import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from 'react'
import Link from "next/link"

export default function Component() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState("ae")
    const [filter1, setFilter1] = useState("Short duration")
    const [filter2, setFilter2] = useState("Long duration")
    useEffect(() => {
        fetch('https://app.kqwl.site/api/holo_ai/webdata?page=ae')
            .then(response => response.text())
            .then(text => {
                const namesArray = text.trim().split('#');
                setData(namesArray);
                setTimeout(() => {
                    setLoading(false);
                }, 800);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    function grab(param) {
        if (param != current) {
            {
                setLoading(true)
                switch (param) {
                    case 'ae':
                        setFilter1("Short duration")
                        setFilter2("Long duration")
                        break;
                    case 'fs':
                        setFilter1("Landscape")
                        setFilter2("Portrait")
                        break;
                    case 'fsv':
                        setFilter1("Trending")
                        setFilter2("Top")
                        break;
                    default:
                        setFilter1("Trending")
                        setFilter2("Top")
                        break;
                }
                setCurrent(param)
                fetch('https://app.kqwl.site/api/holo_ai/webdata?page=' + param)
                    .then(response => response.text())
                    .then(text => {
                        const namesArray = text.trim().split('#');
                        setData(namesArray);
                        setTimeout(() => {
                            setLoading(false);
                        }, 300);
                    })
                    .catch(error => console.error('Error fetching data:', error));
            }
        }
    }

    return (
        <div className="flex h-screen w-full">
            <aside className="fixed top-0 left-0 bottom-0 w-28 p-0.5 bg-background">
                <div className="flex font-black mb-16 mt-12 text-2xl items-center flex-col">
                    <MenuIcon className="w-8 h-8" />
                </div>
                <nav className="space-y-8 font-bold text-gray-700 text-xs">
                    <div onClick={() => grab("ae")} className="flex flex-col items-center text-center space-y-2 cursor-pointer">
                        <img
                            src={current === "ae" ? "/images/selected.svg" : "/images/star.svg"}
                            width={current === "ae" ? 56 : 30}
                            height={current === "ae" ? 32 : 30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: current === "ae" ? "56/32" : "30/30", objectFit: "cover" }}
                        />
                        <span>After Effects</span>
                    </div>
                    <div onClick={() => grab("fs")} className="flex flex-col items-center cursor-pointer">
                        <img
                            src={current === "fs" ? "/images/selected.svg" : "/images/star.svg"}
                            width={current === "fs" ? 56 : 30}
                            height={current === "fs" ? 32 : 30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: current === "fs" ? "56/32" : "30/30", objectFit: "cover" }}
                        />
                        <span>Faceswap</span>
                    </div>
                    <div onClick={() => grab("fsv")} className="flex flex-col items-center cursor-pointer">
                        <img
                            src={current === "fsv" ? "/images/selected.svg" : "/images/star.svg"}
                            width={current === "fsv" ? 56 : 30}
                            height={current === "fsv" ? 32 : 30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: current === "fsv" ? "56/32" : "30/30", objectFit: "cover" }}
                        />
                        <span>FS Video</span>

                    </div>
                    <div onClick={() => grab("aie")} className="flex flex-col items-center cursor-pointer">
                        <img
                            src={current === "aie" ? "/images/selected.svg" : "/images/star.svg"}
                            width={current === "aie" ? 56 : 30}
                            height={current === "aie" ? 32 : 30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: current === "aie" ? "56/32" : "30/30", objectFit: "cover" }}
                        />
                        <span>AI Eraser</span>
                    </div>
                    <div onClick={() => grab("rbg")} className="flex flex-col items-center cursor-pointer">
                        <img
                            src={current === "rbg" ? "/images/selected.svg" : "/images/star.svg"}
                            width={current === "rbg" ? 56 : 30}
                            height={current === "rbg" ? 32 : 30}
                            alt="star.svg"
                            className="rounded-full"
                            style={{ aspectRatio: current === "rbg" ? "56/32" : "30/30", objectFit: "cover" }}
                        />
                        <span>Remove BG</span>
                    </div>
                </nav>
            </aside>
            <main className="ml-28 flex-1 p-4 bg-background overflow-auto">
                <header className="flex items-center justify-between pb-4 pt-8">
                    {loading ? (
                        <SkeletonText className="text-3xl" />
                    ) : (
                        <p className={`text-3xl font-normal text-black ${animate ? "animate-fade-in" : ""}`}>{data[0]}</p>
                    )}
                </header>
                <div className="flex items-center space-x-4 py-4">
                    <Button variant="default">
                        <CheckIcon className="w-4 h-4 mr-2" />
                        All
                    </Button>
                    <Button variant="outline">{filter1}</Button>
                    <Button variant="outline">{filter2}</Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                    {loading ? (
                        Array(30).fill().map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        <>
                            <TemplateCard imgSrc="/images/beforeandafter.jpg" title={data[1]} subtitle="Simple before and after" />
                            <TemplateCard imgSrc="/images/newtemp.jpg" title={data[2]} subtitle="Three image showcase" />
                            {fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}{fillerTemplate(data[3])}
                        </>
                    )}
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

function SkeletonText({ className }) {
    return (
        <div className={`animate-pulse bg-gray-300 rounded w-32 h-8 ${className}`}></div>
    );
}

function SkeletonCard() {
    return (
        <div className="relative overflow-hidden animate-pulse">
            <div className="w-full h-32 bg-gray-300 rounded-lg"></div>
            <div className="p-0 pt-2">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
}

function TemplateCard({ imgSrc, title, subtitle }) {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 z-10">
                <Link href="#" className="absolute inset-0" prefetch={false}>
                    <span className="sr-only">View</span>
                </Link>
            </div>
            <div className="w-full h-32">
                <img
                    src={imgSrc}
                    alt={title}
                    className="h-32 w-full object-contain rounded-lg"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
            </div>
            <div className="p-0 pt-2">
                <p className="text-sm font-semibold text-black">{title}</p>
                <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
        </div>
    );
}

function fillerTemplate(title) {
    return (
        <TemplateCard
            imgSrc="/images/cow.jpg"
            title={title}
            subtitle="Example description"
        />
    );
}

