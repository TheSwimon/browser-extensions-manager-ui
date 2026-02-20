import React from "react";

interface IProps {
  filter: string;
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "active" | "inactive">
  >;
}

export default function FilterSection({ filter, setFilter }: IProps) {
  return (
    <div className="filter-section">
      <h1 className="title">Extensions List</h1>
      <div className="control-bar" role="tablist">
        <button
          onClick={() => setFilter("all")}
          role="tab"
          className={"filter-button " + (filter === "all" ? "active" : "")}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          role="tab"
          className={"filter-button " + (filter === "active" ? "active" : "")}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("inactive")}
          role="tab"
          className={"filter-button " + (filter === "inactive" ? "active" : "")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
