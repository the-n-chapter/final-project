import '@fontsource/manrope/400.css';

export function About() {
    return (
      <div className="container py-8 space-y-16">
        {/* Section 1: Image Left + 4 Paragraphs Right */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="/bronze-statue.jpg" // Replace with your image path
              alt="Ig Nobelpedia Logo"
              className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">About the Project</h2>
            <p className="font-manrope text-muted-foreground">
                During my studies at Kanazawa University, I came across the research 
                of Professor Yukio Hirose, who won an Ig Nobel Prize for figuring out 
                why pigeons avoided a particular bronze statue in the city. 
                This interesting article sparked my curiosity in Ig Nobel Prize. 
                I started reading more and more about it. I was amazed by how much 
                I laughed at the winners' findings and realized, ‘Oh, science isn’t 
                always dry or difficult to understand—it can be that fun’.
            </p>
            <p className="font-manrope text-muted-foreground">
                This project is motivated by my desire to share that same excitement 
                about science with others. I hope to create something for people who 
                may feel that science is too complex or boring, and show them the opposite 
                — award-winning science can be fun, interesting, and relatable.
            </p>
            <p className="font-manrope text-muted-foreground">
                This project combines my love for science with my interest in learning 
                web development, one thing that I haven’t touched before. I would like it 
                to be a fun experience, not just for the users, but for me as well, as 
                I get to create something new and meaningful. Finally, I hope the website 
                will encourage people to see science differently—just like the Ig Nobel Prize 
                does—by making them "first laugh, then think." 😊
            </p>
          </div>
        </section>
  
        {/* Divider */}
        <div className="border-t" />
  
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