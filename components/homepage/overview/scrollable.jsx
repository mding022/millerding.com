import React, { useEffect, useState } from 'react';

const ScrollableSection = ({ children }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            const target = event.target;
            const progress = target.scrollTop / (target.scrollHeight - target.clientHeight);
            setScrollProgress(progress);
        };

        const content = document.querySelector('.scrollable-content');
        if (content) {
            content.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (content) {
                content.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const calculateScale = (index) => {
        const triggerPoints = [0.15, 0.4, 0.72, 0.95];
        const activeTrigger = triggerPoints[index];
        return Math.abs(scrollProgress - activeTrigger) < 0.12 ? 1.1 : 0.9;
    };

    return (
        <div
            className="scrollable-content"
            style={{
                overflowY: 'auto',
                height: 'calc(100vh - 150px)',
                padding: '20px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
            }}
        >
            {React.Children.map(children, (child, index) => (
                <div
                    style={{
                        transform: `scale(${calculateScale(index)})`,
                        transition: 'transform 0.3s ease-out',
                        padding: '20px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#EFE8DD',
                        borderRadius: '8px',
                        maxWidth: '800px',
                        width: '100%',
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export { ScrollableSection };
