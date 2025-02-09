import '@fontsource/manrope/400.css';

export function About() {
    return (
      <div className="container py-8">
        {/* Section 1: Image Left + 3 Paragraphs Right */}
        <h2 className="text-4xl md:text-5xl font-bold text-left font-noto-serif mb-6">
            About the Project
        </h2>
        <section className="flex flex-col md:flex-row gap-8 items-stretch justify-center px-4 md:px-8 lg:px-12">
            {/* Image Container */}
            <div className="md:w-1/4 lg:w-1/3 px-2 md:px-4 flex items-center">
                <img 
                    src="/bronze-statue.jpg"
                    alt="Ig Nobel Prize Statue"
                    className="rounded-lg shadow-xl w-full h-auto max-h-[500px] mx-auto"
                />
            </div>

            {/* Text Container */}
            <div className="md:w-2/3 px-2 md:px-4 py-4 flex flex-col justify-center space-y-4">
                <p className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify pr-12 py-3">
                    During my studies at Kanazawa University, I came across the research of Professor Yukio Hirose, 
                    who won an Ig Nobel Prize for figuring out why pigeons avoided a particular bronze statue in the city. 
                    This fascinating discovery sparked my curiosity about the Ig Nobel Prize, and as I read more about it, 
                    I was amazed at how much I laughed at the winners' findings. It made me realize that science isn’t always 
                    dry or difficult to understand—it can be fun and full of surprises.
                </p>

                <p className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify pl-12 py-3">
                    This project is driven by my desire to share that excitement with others. I want to create 
                    something for those who might see science as too complex or boring and show them the opposite—award-winning 
                    discoveries can be very engaging, amusing, and relatable. I also see this project as a personal challenge 
                    and a new adventure. I had the chance to learn web development for the very first time and have discovered 
                    many cool things along the way.
                </p>

                <p className="font-manrope text-muted-foreground text-sm leading-relaxed tracking-wide text-justify pr-12">
                    I hope this website becomes a place where you can find inspiration for your research or simply enjoy 
                    reading it while, for example, commuting. Most importantly, I hope it encourages people to see science differently—by making them 
                    "first laugh, then think."
                </p>
            </div>
        </section>
    
        {/* Section 2: Image Right + 2 Paragraphs Left */}
        <section className="flex flex-col md:flex-row-reverse gap-8 items-center mt-16">
          <div className="md:w-1/2">
            <img
              src="/award-ceremony.jpg" // Replace with your image path
              alt="Ig Nobel Prize Ceremony"
              className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">About the Ig Nobel Prize</h2>
            <p className="text-muted-foreground">
              The Ig Nobel Prizes are a parody of the Nobel Prizes awarded annually 
              since 1991. Organized by the scientific humor magazine Annals of 
              Improbable Research, they honor achievements that "first make people 
              laugh, then make them think".
            </p>
            <p className="text-muted-foreground">
              Presented at a ceremony at Harvard University, the prizes are 
              awarded in ten categories that change each year. Notable past 
              winners include research on why wombat poop is cube-shaped, 
              and a study measuring the friction between a shoe and banana skin.
            </p>
          </div>
        </section>
      </div>
    );
  }