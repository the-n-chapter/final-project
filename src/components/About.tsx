import '@fontsource/manrope/400.css';
import { motion } from "framer-motion";

export function About() {
    return (
      <div className="container py-8 mb-16">
        {/* Section 1: Image Left + 3 Paragraphs Right */}
        <h2 className="text-4xl md:text-5xl font-bold text-left font-noto-serif mt-6 mb-6">
            <span className="text-slate-300">// about the </span><span className="text-sky-400">Project.</span>
        </h2>
        <section className="flex flex-col md:flex-row gap-8 items-stretch justify-center px-4 md:px-8 lg:px-12 mb-20">
            {/* Image Container */}
            <div className="md:w-1/4 lg:w-1/3 px-2 flex items-center">
                <img 
                    loading="lazy"
                    src="/bronze-statue.webp"
                    alt="Ig Nobel Prize Statue"
                    className="rounded-lg shadow-xl w-full h-auto max-h-[500px] mx-auto"
                />
            </div>

            {/* Text Container */}
            <div className="md:w-2/3 px-2 md:px-4 py-4 flex flex-col justify-center space-y-4">
                <motion.p 
                    className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify md:pr-12 md:pl-4 py-2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    During my studies at Kanazawa University, I came across the research of Professor Yukio Hirose, 
                    who won an Ig Nobel Prize for figuring out why pigeons avoided a particular bronze statue in the city. 
                    This fascinating discovery sparked my curiosity about the Ig Nobel Prize, and as I read more about it, 
                    I was amazed at how much I laughed at the winners' findings. It made me realize that science isn’t always 
                    dry or difficult to understand—it can be fun and full of surprises.
                </motion.p>

                <motion.p 
                    className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify md:pr-4 md:pl-12 py-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                    viewport={{ once: true }}
                >
                    This project is driven by my desire to share that excitement with others. I want to create 
                    something for those who might see science as too complex or boring and show them the opposite—award-winning 
                    discoveries can be very engaging, amusing, and relatable. I also see this project as a personal challenge 
                    and a new adventure. I had the chance to learn web development for the very first time and have discovered 
                    many cool things along the way.
                </motion.p>

                <motion.p 
                    className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify md:pr-12 md:pl-4 py-2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
                    viewport={{ once: true }}
                >
                    I hope this website becomes a place where you can find inspiration for your research or simply enjoy 
                    reading it while, for example, commuting. I hope it might also encourage people to see science differently,
                    by making them "first laugh, then think."
                </motion.p>
            </div>
        </section>
    
        {/* Section 2: Image Right + 2 Paragraphs Left */}
        <h2 className="text-4xl md:text-5xl font-bold text-left font-noto-serif mt-6 mb-6">
            <span className="text-slate-300">// about the </span>
            <span className="text-sky-400">Prize.</span>
        </h2>
        <section className="flex flex-col md:flex-row gap-8 items-stretch justify-center px-4 md:px-8 lg:px-12 mb-2">
            {/* Text Container */}
            <div className="md:w-2/3 px-2 md:px-4 py-4 flex flex-col justify-center space-y-4">
                <motion.p 
                    className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify md:pr-12 py-2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
                    viewport={{ once: true }}
                >
                    The Ig Nobel Prize is a playful take on the famous Nobel Prizes. It was started 
                    in 1991 to honor research that seems odd or funny at first glance but often reveals 
                    something interesting about the world. The ceremony is held every year, usually in 
                    Cambridge, Massachusetts, and it brings together scientists, journalists, and a 
                    curious audience in a light-hearted event.
                </motion.p>
                <motion.p 
                    className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify md:pl-12 py-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 3 }}
                    viewport={{ once: true }}
                >
                    “The Ig Nobel awards are arguably the highlight of the scientific calendar... They are
                    a welcome antidote to the everyday seriousness and stuffiness of life in the lab. 
                    Some people may raise their eyebrows at such seemingly pointless science. But I would argue 
                    that we need research like this to lighten our lives.” — Nature.
                </motion.p>
                <motion.p 
                    className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify md:pr-12 py-2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
                    viewport={{ once: true }}
                >
                    Since its beginning, the Ig Nobel Prize has celebrated more than 300 quirky research 
                    achievements. Every year, about 10 prizes are handed out in different fields such as Physics, Medicine, Literature, and Peace. 
                    For example, a study that explored a possible link between country music and suicide rates won the 2004 
                    Medicine Prize. Meanwhile, the 2012 Neuroscience Prize went to researchers who used MRI scans 
                    to explore the brain activity of dead salmon. Interesting, isn't it?
                </motion.p>
            </div>

            {/* Image Container */}
            <div className="md:w-1/3 px-2 flex items-center">
                <img 
                    loading="lazy"
                    src="/ignobel-prize.webp"
                    alt="Ig Nobel Prize Image, year 2012"
                    className="rounded-lg shadow-xl w-full h-auto max-h-[500px] mx-auto"
                />
            </div>
        </section>

      </div>
    );
}