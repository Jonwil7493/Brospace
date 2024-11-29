import React from "react";
import "../styles/FilterBar.css";

const FilterBar = () => {
    const [filter, setFilter] = React.useState("");

    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search groups..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    )
};

export default FilterBar;