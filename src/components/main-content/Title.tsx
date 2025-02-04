import '@fontsource/noto-serif/400.css';
import '@fontsource/noto-serif/700.css';
import '@fontsource/manrope/400.css'; // Default weight

export function Title() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 font-noto-serif">
        Ig Nobelpedia
      </h1>
      <h3 className="text-2xl mb-4 py-4 font-manrope">
        For achievements that first make people laugh, then think
      </h3>
    </div>
  );
}