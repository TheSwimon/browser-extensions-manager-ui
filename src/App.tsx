import { useState } from "react";
import "./App.css";
import CardData from "./data.json";
import ExtensionGrid from "./components/ExtensionGrid";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";

function App() {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [cards, setCards] = useState(CardData);

  return (
    <div className="page-wrapper">
      <Header></Header>
      <FilterSection filter={filter} setFilter={setFilter}></FilterSection>
      <ExtensionGrid
        filter={filter}
        cards={cards}
        setCards={setCards}
      ></ExtensionGrid>
    </div>
  );
}

export default App;
