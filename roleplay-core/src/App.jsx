import GameEventDisplay from "./components/GameEventDisplay";
import GameWindow from "./components/GameWindow";

const ButtonStyle = () => {
  return `inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 
          font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100
          min-w-[160px] min-h-[48px] justify-center
          sm:min-w-[120px] sm:min-h-[40px] sm:px-3 sm:py-1.5 sm:text-sm
          md:min-w-[140px] md:min-h-[44px] md:px-3.5 md:py-1.75 md:text-base
          lg:min-w-[160px] lg:min-h-[48px] lg:px-4 lg:py-2 lg:text-lg`; // Responsive adjustments
};

const PlayerCommandInterface = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <button className={ButtonStyle()}>Status</button>
      <button className={ButtonStyle()}>Inventory</button>
      <button className={ButtonStyle()}>Turn</button>
    </section>
  );
};

export default function App() {
  return (
    <div className="max-w-4xl min-h-screen mx-auto p-8 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl mb-6">Journey to Jotunheimen</h1>
      <GameWindow>
        <GameEventDisplay
          title="A Mysterious Encounter"
          content="As you journey through the forest, a mysterious figure appears in the distance. You are unsure if who or what you see if a friend or fow. You can hear the entity move closer and closer, your time is limited and you have to determine something quick. How do you want to proceed?"
        >
          <div className="grid grid-cols-2 gap-1">
            <button className={ButtonStyle()}>Approach</button>
            <button className={ButtonStyle()}>Ignore</button>
          </div>
        </GameEventDisplay>
      </GameWindow>
      <PlayerCommandInterface />
    </div>
  );
}