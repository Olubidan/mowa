import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';

const milestones = [
    {
        id: 1,
        title: "The Beginning",
        description: "The moment our paths crossed and everything changed.",
        image: "https://github.com/Olubidan/mowa/blob/main/dn1.jpeg"
    },
    {
        id: 2,
        title: "The Laughter",
        description: "Shared jokes and moments of pure joy that built our bond.",
        image: "https://github.com/Olubidan/mowa/blob/main/dn2.jpeg"
    },
    {
        id: 3,
        title: "The Growth",
        description: "Supporting each other through every challenge and triumph.",
        image: "https://github.com/Olubidan/mowa/blob/main/dn3.jpeg"
    },
    {
        id: 4,
        title: "Today",
        description: "Stronger than ever, writing our next chapter together.",
        image: "https://github.com/Olubidan/mowa/blob/main/dn3.jpeg"
    }
];

const Card = ({ item, index }: { item: typeof milestones[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-16 my-24 md:my-32",
                index % 2 === 1 && "md:flex-row-reverse"
            )}
        >
            <div className="w-full md:w-1/2 overflow-hidden rounded-sm relative group p-2 bg-white shadow-lg rotate-1 transition-transform hover:rotate-0 duration-500">
                <div className="relative overflow-hidden aspect-[3/4] border border-gray-100">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left px-4">
                <h3 className="text-3xl md:text-5xl font-serif text-mowa-oxblood mb-4">{item.title}</h3>
                <p className="font-sans text-lg text-mowa-black/80 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

export const JourneyGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section id="journey" ref={containerRef} className="py-20 px-4 md:px-8 bg-mowa-parchment relative min-h-[200vh]">
            <motion.div style={{ opacity }} className="max-w-6xl mx-auto">
                <h2 className="text-center text-sm font-sans tracking-[0.3em] uppercase text-mowa-gold mb-16">Chapters of Us</h2>

                <div className="flex flex-col">
                    {milestones.map((item, index) => (
                        <Card key={item.id} item={item} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
