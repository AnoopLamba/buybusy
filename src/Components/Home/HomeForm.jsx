import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  productsAction,
  productsSelector,
} from "../../store/reducers/productsReducer";
import Filter from "./Filter";
import { SearchIcon } from "../../Assets/svg/Icons";

function HomeForm() {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(productsSelector);

  return (
    <div className="px-4 max-w-[720px] w-full mx-auto mt-8">
      <div className={`${styles.HomeForm} relative`}>
        <div className="absolute left-[9px]">
          <SearchIcon />
        </div>
        <input
          className={styles.SearchProduct}
          onChange={(e) =>
            dispatch(productsAction.setSearchQuery(e.target.value))
          }
          value={searchQuery}
          placeholder="Search..."
        />
        <Filter />
      </div>
    </div>
  );
}

export default HomeForm;
