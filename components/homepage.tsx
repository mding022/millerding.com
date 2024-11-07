import React, { useState } from 'react';
import HomepageText from './homepage/text';
import Menu from './homepage/menu';
import OverviewPage from './homepage/overviewpage';
import { AnimatePresence } from 'framer-motion';
import ParticlesBackground from './homepage/particles';

const HomePage = () => {
    const [showOverview, setShowOverview] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    const handleOpenOverview = () => {
        setShowOverview(true);
    };

    const handleCloseOverview = () => {
        setShowOverview(false);
        setAnimationKey(prevKey => prevKey + 1);
    };

    return (
        <div className="relative bg-[#e8ded0] h-screen flex items-center justify-center w-full flex-col">
            <ParticlesBackground />
            <div className="relative z-10">
                <AnimatePresence key={animationKey}>
                    <HomepageText title="Miller Ding" />
                </AnimatePresence>
                <div className="pt-2">
                    <AnimatePresence key={animationKey}>
                        <Menu onOverviewClick={handleOpenOverview} />
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {showOverview && <OverviewPage onClose={handleCloseOverview} />}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HomePage;
