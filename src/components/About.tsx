// src/components/about/About.tsx
export function About() {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-4">About Ig Nobelpedia</h1>
        <p className="text-lg mb-4">
          Ig Nobelpedia is a curated collection of Ig Nobel Prize winners, 
          celebrating achievements that make people laugh, then think.
        </p>
        <p className="text-muted-foreground">
          The Ig Nobel Prizes are a parody of the Nobel Prizes and are given out 
          annually for unusual or trivial achievements in scientific research.
        </p>
      </div>
    );
}