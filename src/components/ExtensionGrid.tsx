import ExtensionCard from "./ExtensionCard";
import CardData from "../data.json";
import { useState } from "react";

export default function ExtensionGrid() {
  const [cards, setCards] = useState(CardData);

  const handleToggle = (id: number) => {
    setCards((prev) => {
      prev.map((card) => {
        if ((card.id = id)) card.isActive = !card.isActive;
      });
    });
  };

  return (
    <>
      <main className="extension-grid">
        {cards.map((data) => (
          <ExtensionCard
            id={data.id}
            logo={data.logo}
            name={data.name}
            description={data.description}
            isActive={data.isActive}
          ></ExtensionCard>
        ))}
      </main>
    </>
  );
}
