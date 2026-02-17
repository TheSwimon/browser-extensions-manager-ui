import "./App.css";
import ExtensionCard from "./components/ExtensionCard";
import ExtensionGrid from "./components/ExtensionGrid";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header></Header>
        <FilterSection></FilterSection>
        <ExtensionGrid></ExtensionGrid>
      </div>
    </>
  );
}

export default App;
