import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-mowa-parchment">
            <div className="absolute inset-0 bg-paper-texture opacity-30 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 text-center px-4"
            >
                <span className="block text-mowa-gold uppercase tracking-[0.2em] text-sm mb-4">The Mowa Edit</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-mowa-oxblood mb-6 leading-tight">
                    To Mowa:<br />
                    <span className="italic">My Forever & Always</span>
                </h1>
                <p className="text-mowa-black/70 font-sans text-lg md:text-xl tracking-wide max-w-md mx-auto mb-12">
                    A celebration of every second we've shared.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex flex-col items-center gap-2 mx-auto text-mowa-oxblood/80 hover:text-mowa-oxblood transition-colors"
                >
                    <span className="font-sans text-xs tracking-widest uppercase">Walk down memory lane with me</span>
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                </motion.button>
            </motion.div>
        </section>
    );
};
