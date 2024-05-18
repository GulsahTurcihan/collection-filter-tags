import Title from "./components/Title";
import menu from "./data";
import Menu from "./components/Menu";
import { useState } from "react";
import Categories from "./components/Categories";

/*const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories)
const tempItems = ['all', ...tempSet] */ // short version at below, it will be better and shorter and cleaner for your code

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="menu">
      <h2>
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </h2>
    </section>
  );
};
export default App;
