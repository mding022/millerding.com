"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/loading"
import Content from "@/components/content"

export default function Component() {
  const [animate, setAnimate] = useState(false); /*Fade in animation after loading*/
  const [loading, setLoading] = useState(true); /*Initial loading animation after entering page*/

  useEffect(() => { /*Simulate loading*/
    setTimeout(() => {
      setAnimate(true);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] max-w-full bg-background text-foreground overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#c1c3c7_1px,transparent_1px)] [background-size:16px_16px] animate-fade-in"></div>
      <main
        className={`relative z-10 font-sans flex-1 w-full container px-2 sm:px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 mx-auto ${animate ? "animate-fade-in" : ""}`}
      >
        <Content />
      </main>
    </div>
  );
}
