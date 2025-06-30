import Apod from "./components/Apod";
import IssTracker from "./components/IssTracker";
import SatellitePasses from "./components/SatellitePasses";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200 font-sans">

      <header className="bg-blue-900 text-white p-5 shadow">
        <h1 className="text-3xl md:text-4xl font-bold text-center tracking-wide">
          AstroAid: Explore Space from Earth
        </h1>
      </header>

      <main className="space-y-12 p-6 max-w-6xl mx-auto">
        <Apod />
        <IssTracker />
        <SatellitePasses />
      </main>

      <footer className="text-center text-sm text-gray-500 p-4 border-t dark:border-gray-700 mt-10">
        AstroAid © 2025 · Built with React, NASA & N2YO APIs
      </footer>
    </div>
  );
}

export default App;
