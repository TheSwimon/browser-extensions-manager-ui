import ExtensionCard from "./ExtensionCard";
import { type Dispatch, type SetStateAction } from "react";

interface ExtensionGridProps {
  filter: string;
  cards: ExtensionCard[];
  setCards: Dispatch<SetStateAction<ExtensionCard[]>>;
}

export default function ExtensionGrid({
  filter,
  cards,
  setCards,
}: ExtensionGridProps) {
  const filteredCards = cards.filter((card) => {
    if (filter === "all") return true;
    if (filter === "active") return card.isActive;
    if (filter === "inactive") return !card.isActive;
  });

  const handleToggle = (id: number) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isActive: !card.isActive } : card,
      ),
    );
  };

  return (
    <main className="extension-grid">
      {filteredCards.map((card) => (
        <ExtensionCard
          key={card.id}
          extensionCard={card}
          onToggle={() => handleToggle(card.id)}
          setCards={setCards}
        ></ExtensionCard>
      ))}
    </main>
  );
}
