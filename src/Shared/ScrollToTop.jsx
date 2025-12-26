import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.22 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed right-6 bottom-6 z-50 w-20 h-20 rounded-full flex items-center justify-center bg-[#282A4B] border border-gray-800 text-white hover:scale-105 active:scale-95 shadow-lg backdrop-blur"
                >
                    <svg width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1408 0.585785C15.3597 -0.195263 14.0934 -0.195263 13.3124 0.585785L0.584429 13.3137C-0.19662 14.0948 -0.19662 15.3611 0.584428 16.1421C1.36548 16.9232 2.63181 16.9232 3.41286 16.1421L14.7266 4.82843L26.0403 16.1421C26.8213 16.9232 28.0877 16.9232 28.8687 16.1421C29.6497 15.3611 29.6497 14.0948 28.8687 13.3137L16.1408 0.585785ZM14.7266 42L16.7266 42L16.7266 2L14.7266 2L12.7266 2L12.7266 42L14.7266 42Z" fill="white" />
                    </svg>

                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
