interface ICard {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  onToggle: () => void;
}

export default function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  onToggle,
}: ICard) {
  return (
    <>
      <article className="card">
        <div className="card-main">
          <figure className="logo-wrapper">
            <img src={logo} alt={logo + " icon"} />
          </figure>
          <div className="card-info">
            <h3 className="card-title">{name}</h3>
            <p className="card-description">{description}</p>
          </div>
        </div>
        <div className="card-options">
          <button className="remove-button">Remove</button>
          <label className="toggle-track">
            <input
              type="checkbox"
              defaultChecked={isActive}
              onChange={onToggle}
            />
            <span typeof="checkbox" className="slide-ball"></span>
          </label>
        </div>
      </article>
    </>
  );
}
