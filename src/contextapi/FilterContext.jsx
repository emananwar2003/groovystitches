import { createContext, useContext, useState } from "react";


const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedCategories, setSelectedCategories] = useState(["All"]);

    const toggleCategory = (category) => {
        let newCategories = [...selectedCategories];
        if (category === "All") {
            newCategories = ["All"];
        } else {
            newCategories = newCategories.filter((c) => c !== "All");
            if (newCategories.includes(category)) {
                newCategories = newCategories.filter((c) => c !== category);
            } else {
                newCategories.push(category);
            }
            if (newCategories.length === 0) newCategories = ["All"];
        }
        setSelectedCategories(newCategories);
    };
    return (
        <FilterContext.Provider value={{ selectedCategories, toggleCategory }}>
            {children}
        </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);