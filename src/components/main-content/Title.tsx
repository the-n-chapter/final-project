import '@fontsource/noto-serif/400.css';
import '@fontsource/noto-serif/700.css';
import '@fontsource/manrope/400.css'; // Default weight

export function Title() {
  return (
    <div>
      {/* Container for title + IPA */}
      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-4 md:mb-8">
        <h1 className="text-7xl font-bold font-noto-serif">
          Ig Nobelpedia
        </h1>
        <span className="text-sm text-gray-600 md:-mb-1">
          /ɪɡ noʊˌbɛlˈpiːdiə/
        </span>
      </div>
      
      {/* Subtitle */}
      <h3 className="text-2xl mb-4 py-4 font-manrope">
        For achievements that first make people laugh, then think
      </h3>
    </div>
  );
}