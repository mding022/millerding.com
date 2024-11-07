import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { ScrollableSection } from './overview/scrollable';

interface OverviewPageProps {
    onClose: () => void;
}

const OverviewPage: React.FC<OverviewPageProps> = ({ onClose }) => {
    useEffect(() => {
        const handleKeyPress = () => {
            onClose();
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [onClose]);

    return (
        <div className="bg-[#EFE8DD] fixed top-0 left-0 right-0 bottom-0 overflow-hidden">
            <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 10,
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    style={{
                        backgroundColor: '#EFE8DD',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        position: 'absolute',
                        zIndex: -1,
                    }}
                />
                <h1 className="text-black font-black text-5xl text-center mt-10">👋 About Me</h1>
                <motion.div
                    className="text-center pt-4 cursor-pointer font-extrabold text-xl text-gray-500"
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Press any key to close
                </motion.div>

                <ScrollableSection>
                    <section>
                        <h2 className="font-bold text-3xl text-black mb-4 pt-4">Education</h2>
                        <p className="text-xl text-gray-700">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-3xl text-black mb-4">Projects</h2>
                        <p className="text-lg text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-3xl text-black mb-4">Skills</h2>
                        <p className="text-lg text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-3xl text-black mb-4">Education</h2>
                        <p className="text-lg text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </section>
                </ScrollableSection>
            </motion.div>
        </div>
    );
};

export default OverviewPage;
