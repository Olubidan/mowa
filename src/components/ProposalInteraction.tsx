import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const GoldLeaf = ({ delay }: { delay: number }) => (
    <motion.div
        initial={{ y: -20, opacity: 0, rotate: 0 }}
        animate={{
            y: ['0vh', '100vh'],
            opacity: [1, 1, 0],
            rotate: [0, 360],
            x: [-20, 20, -20]
        }}
        transition={{
            duration: 3 + Math.random() * 2,
            delay: delay,
            ease: "linear",
            repeat: Infinity
        }}
        className="fixed top-0 w-3 h-3 bg-mowa-gold/80 rounded-full pointer-events-none z-50"
        style={{
            left: `${Math.random() * 100}vw`,
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' // Crude leaf shape
        }}
    />
);

export const ProposalInteraction = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [accepted, setAccepted] = useState(false);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-mowa-oxblood text-mowa-parchment relative overflow-hidden py-20 px-4">

            {accepted && Array.from({ length: 20 }).map((_, i) => (
                <GoldLeaf key={i} delay={i * 0.2} />
            ))}

            <motion.div
                layout
                className="max-w-md w-full bg-mowa-parchment/5 backdrop-blur-sm border border-mowa-gold/30 p-8 rounded-full aspect-square flex flex-col items-center justify-center text-center relative"
            >
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.button
                            key="locket"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.1, opacity: 0 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setIsOpen(true)}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-24 h-24 rounded-full bg-mowa-gold flex items-center justify-center shadow-lg shadow-mowa-gold/20 group-hover:shadow-mowa-gold/40 transition-all">
                                <Heart className="w-10 h-10 text-mowa-oxblood fill-current" />
                            </div>
                            <span className="font-serif text-2xl tracking-wide text-mowa-champagne">Open My Heart</span>
                        </motion.button>
                    ) : !accepted ? (
                        <motion.div
                            key="question"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <h3 className="font-serif text-3xl md:text-4xl text-mowa-champagne leading-tight">
                                You’ve made the last years incredible.<br />
                                <span className="text-mowa-gold font-bold">Will you be my Valentine, Mowa?</span>
                            </h3>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setAccepted(true)}
                                className="mt-4 px-8 py-3 bg-mowa-gold text-mowa-oxblood font-serif text-xl rounded-full shadow-lg hover:bg-white transition-colors"
                            >
                                Yes, Forever
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <Heart className="w-20 h-20 text-mowa-gold fill-current animate-pulse" />
                            <p className="font-serif text-xl text-mowa-champagne/80 mb-2">Here’s to many more chapters.</p>
                            <h3 className="font-serif text-4xl text-white">I Love You.</h3>
                            <p className="font-sans text-mowa-champagne uppercase tracking-widest text-sm">Always yours.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};
