// simple JSX implementation of the particles.js JS library

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {

    const particlesInit = async (engine) => await loadFull(engine);

    return (
        <motion.div
            className="text-[#919191] font-bold text-md pt-3 pb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.4 }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: "#e8ded0" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" }, 
                            resize: true,
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                            attract: { distance: 200, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#9c9489" },
                        links: {
                            color: "#9c9489",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: { enable: true },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            speed: 1,
                        },
                        number: { density: { enable: true, area: 800 }, value: 65 },
                        opacity: { value: 0.55 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 5 } },
                    },
                    detectRetina: true,
                }}
            />
        </motion.div>
    );
};

export default ParticlesBackground;
