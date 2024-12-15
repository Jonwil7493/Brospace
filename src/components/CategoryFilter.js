import React from "react";
import "../styles/CategoryFilter.css";

const CategoryFilter = () => {
    const categories = ["All", "Workshop", "Social", "Conference", "Charity"];

    return (
        <div className="category-filter">
            <select>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
        );
    };

    export default CategoryFilter;