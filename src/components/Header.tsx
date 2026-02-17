export default function Header() {
  return (
    <header className="header">
      <div className="page-mark">
        <div className="logo-container">
          <img src="/assets/images/logo.svg" alt="page logo" />
        </div>
        <h2 className="page-name"></h2>
      </div>

      <button className="theme-toggle">
        <img src="/assets/images/icon-moon.svg" alt="moon icon" />
      </button>
    </header>
  );
}
