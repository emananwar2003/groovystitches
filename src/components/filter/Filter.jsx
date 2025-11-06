import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import { useFilter } from "../../contextapi/FilterContext";

export function FilterMenu() {
  const { selectedCategories, toggleCategory } = useFilter();
  const categories = ["All", "Bags", "Tops", "Accessories"];

  return (
    <Menu dismiss={{ itemPress: false }}>
      <MenuHandler>
        <Button className="bg-orange-800 hover:bg-orange-900">Filter</Button>
      </MenuHandler>

      <MenuList>
        {categories.map((category) => (
          <MenuItem key={category} className="p-0">
            <label className="flex cursor-pointer items-center gap-2 p-2">
              <Checkbox
                color="orange"
                ripple={false}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              {category}
            </label>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
