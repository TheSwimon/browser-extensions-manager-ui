export default function FilterSection() {
  return (
    <div className="filter-section">
      <h1 className="title">Extensions List</h1>
      <div className="control-bar" role="tablist">
        <button role="tab" className="filter-button all">
          All
        </button>
        <button role="tab" className="filter-button active">
          Active
        </button>
        <button role="tab" className="filter-button inactive">
          Inactive
        </button>
      </div>
    </div>
  );
}
