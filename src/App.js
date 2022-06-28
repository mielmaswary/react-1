import logo from "./logo.svg";
import TravelingCard from "./components/TravelingCard";
import data from "./data";
import Header from "./components/Header";

function App() {
  const travelingCards = data.map((item) => (
    <TravelingCard id={item.id} item={item} />
  ));
  return (
    <div>
      <Header />
      {travelingCards}
    </div>
  );
}

export default App;
