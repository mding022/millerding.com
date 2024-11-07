'use client'

import { useEffect, useState } from 'react';
import AnimatedBackground from "../components/bg";
import HomePage from "../components/homepage";

export default function Home() {
  const [showHomePage, setShowHomePage] = useState(false);

  // swipe up the beige background for the nice "bounce in" feel when loading in
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomePage(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 w-full">
      {!showHomePage ? (
        //temporary bg delayed by the useEffect timer
        <AnimatedBackground />
      ) : (
        //main content and homepage
        <HomePage />
      )}
    </main>
  );
}
