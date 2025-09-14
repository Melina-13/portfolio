export default function ScrollToTopButton() {
  const scrollToTopSlow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-pink-400 text-white px-4 py-2 rounded-full shadow-lg font-bold hover:bg-pink-500"
        onClick={scrollToTopSlow}
      >
        ↑ Retour en haut ↑
      </button>
    </div>
  );
}
