import '@fontsource/noto-serif/400.css';
import '@fontsource/noto-serif/700.css';
import '@fontsource/manrope/400.css'; // Default weight
import { ReactTyped } from "react-typed";

export function Title() {
  return (
    <div>
      {/* Container for title + IPA */}
      <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-5 mb-4 md:mb-8">
        <h1 className="text-6xl md:text-8xl font-bold font-noto-serif">
          Ig Nobelpedia.
        </h1>
        <span className="text-sm text-gray-500 md:-mb-1">
          /ɪɡ noʊˌbɛlˈpiːdiə/
        </span>
      </div>
      
      {/* Subtitle */}
      <h3 className="text-1xl md:text-2xl mb-4 py-4 font-manrope">
        <span>{"For achievements that #️⃣ "}</span>
        <ReactTyped
          strings={[
          `<span class="text-slate-300">first make people laugh </span>`,
          `<span class="text-slate-300">then make them think</span>`,
        ]}
          typeSpeed={60}
          startDelay={1500}
          backDelay={2000}
          backSpeed={30}
          loop
          loopCount={Infinity}
          showCursor
          cursorChar=" _"
          className="[&_.typed-cursor]:text-sky-400" // correct usage to customize cursor
        />
      </h3>
    </div>
  );
}