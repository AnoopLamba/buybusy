import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  productsAction,
  productsSelector,
} from "../../store/reducers/productsReducer";
import { Disclosure } from "@headlessui/react";
import { MenuDrownDownArrowWhiteIcon } from "../../Assets/svg/Icons";

function HomeSidebar() {
  const dispatch = useDispatch();
  const { selectedCategories, maxPrice } = useSelector(productsSelector);

  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      dispatch(
        productsAction.setSelectedCategories(
          selectedCategories.filter((cat) => cat !== category)
        )
      );
    } else {
      dispatch(
        productsAction.setSelectedCategories([...selectedCategories, category])
      );
    }
  };

  return (
    <div className={styles.Sidebar}>
      <label>
        <span className="font-medium">Price: ${maxPrice}</span>
        <input
          className="w-full"
          type="range"
          min={0}
          max={1000}
          value={maxPrice}
          step={50}
          onChange={(e) => dispatch(productsAction.setMaxPrice(e.target.value))}
        />
      </label>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-black px-3 py-2 text-left text-sm font-medium text-white hover:bg-[#7064e5] focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 transition-all duration-200 ease-in-out">
              <span>Category</span>
              <div
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500 flex items-center justify-center`}
              >
                <MenuDrownDownArrowWhiteIcon />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-1 pb-2 pt-1">
              <div className={styles.categories}>
                {categories.map((category) => (
                  <div key={category}>
                    <label className=" flex items-center justify-start">
                      <input
                        type="checkbox"
                        value={category.toLowerCase()}
                        checked={selectedCategories.includes(
                          category.toLowerCase()
                        )}
                        onChange={() =>
                          handleCategoryChange(category.toLowerCase())
                        }
                      />
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default HomeSidebar;
