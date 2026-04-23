import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254723214344"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat
      </a>
    </>
  );
}

export default App;