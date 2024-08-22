"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from 'react';
import { TextLoop } from "easy-react-text-loop";
import Link from "next/link";

export default function Component() {
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            window.scrollTo(0, 0);
            setScrollY(prevScrollY => {
                const newScrollY = prevScrollY - event.deltaY;
                return Math.max(Math.min(newScrollY, 0), -2000);
            });
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    const easeScrollTo = (targetScrollY) => {
        const duration = 1000; // Animation duration in milliseconds
        const startScrollY = scrollY;
        const startTime = performance.now();

        const animate = (time) => {
            const elapsedTime = time - startTime;
            const t = Math.min(elapsedTime / duration, 1);
            const easeInOutQuad = t * (2 - t); // Ease-in-out function
            const currentScrollY = startScrollY + easeInOutQuad * (targetScrollY - startScrollY);

            setScrollY(currentScrollY);

            if (t < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        const handleClick = () => {
            easeScrollTo(-2000);
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [scrollY]);

    const scale = Math.max(Math.min(1 - scrollY / 7000, 1.2), 1);
    const opacity = Math.min(Math.max((scrollY + 1500) / 500, 0), 1);

    return (
        <div className="flex w-full flex-col bg-background relative font-sans">
            <header className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="#" className="flex items-center" prefetch={false}>
                    <Logo className="h-12 w-12" />
                    <span className="ml-2 text-lg font-medium">HoloLabs</span>
                </Link>
                <nav className="hidden space-x-4 sm:flex">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Log In
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Pricing
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        API Docs
                    </Link>
                </nav>
                <Button><b>Sign Up</b></Button>
            </header>
            <main className="flex-1" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
                <section className="flex flex-col items-center justify-center px-4 pb-12 pt-28 sm:px-6 lg:px-8">
                    <div className="max-w-2xl text-left">
                        <p className="pb-5 text-4xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-black">
                            All-in-one AI content solution with an extensive library of tools, like&nbsp;
                            <TextLoop interval="4000">
                                <span>Holo FaceSwap</span>
                                <span>AI Image Eraser</span>
                                <span>AE Templates</span>
                                <span>FS Videos</span>
                                <span>Remove BG</span>
                            </TextLoop>
                        </p>
                        <Link href="/main">
                            <Button>
                                <p className="font-extrabold text-lg">Try it out</p>
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <img
                src="/images/cows.jpg"
                alt="Fading Overlay"
                className="absolute inset-0 w-full h-full"
                style={{
                    opacity,
                    pointerEvents: 'none',
                    objectFit: 'cover',
                    height: '100vh'
                }}
            />
        </div>
    );
}

function Logo(props) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 6H13V10.079L16.3413 7.73938L17.4885 9.37768L13.7434 12L17.4885 14.6223L16.3413 16.2606L13 13.921V18H11V13.921L7.65864 16.2606L6.51148 14.6223L10.2565 12L6.51147 9.37769L7.65863 7.73938L11 10.079V6Z"
                fill="currentColor"
            />
        </svg>
    );
}
