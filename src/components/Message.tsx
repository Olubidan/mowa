import { motion } from 'framer-motion';

export const Message = () => {
    return (
        <section className="min-h-[80vh] w-full flex items-center justify-center bg-mowa-parchment relative py-20 px-6">
            <div className="absolute inset-0 bg-paper-texture opacity-30 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-2xl mx-auto text-center"
            >
                <p className="font-serif text-2xl md:text-4xl leading-relaxed text-mowa-oxblood italic">
                    "Mowa, looking back at where we started and where we are now, I am in awe of the woman you are. Every memory we've built is a treasure I keep close. You aren't just my partner; you are my home."
                </p>
                <div className="mt-12 w-24 h-[1px] bg-mowa-gold mx-auto" />
            </motion.div>
        </section>
    );
};
