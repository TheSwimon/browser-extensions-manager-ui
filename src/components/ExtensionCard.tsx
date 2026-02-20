import type { Dispatch, SetStateAction } from "react";

interface ExtensionCardProps {
  extensionCard: ExtensionCard;
  onToggle: () => void;
  setCards: Dispatch<SetStateAction<ExtensionCard[]>>;
}

export default function ExtensionCard({
  extensionCard,
  onToggle,
  setCards,
}: ExtensionCardProps) {
  const handleRemove = (id: number) => {
    setCards((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <article className="card">
      <div className="card-main">
        <figure className="logo-wrapper">
          <img src={extensionCard.logo} alt={extensionCard.logo + " icon"} />
        </figure>
        <div className="card-info">
          <h3 className="card-title">{extensionCard.name}</h3>
          <p className="card-description">{extensionCard.description}</p>
        </div>
      </div>
      <div className="card-options">
        <button
          className="remove-button"
          onClick={() => handleRemove(extensionCard.id)}
        >
          Remove
        </button>
        <label className="toggle-track">
          <input
            type="checkbox"
            defaultChecked={extensionCard.isActive}
            onChange={onToggle}
          />
          <span typeof="checkbox" className="slide-ball"></span>
        </label>
      </div>
    </article>
  );
}
