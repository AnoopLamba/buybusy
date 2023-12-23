import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { productsSelector } from "../../store/reducers/productsReducer";

function HomeList() {
  const { products, searchQuery, maxPrice, selectedCategories } =
    useSelector(productsSelector);

  const filteredProducts = products.filter((product) => {
    const isSearchMatched = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const inPriceRange = product.price <= maxPrice;

    const inSelectedCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return isSearchMatched && inPriceRange && inSelectedCategory;
  });

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 p-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.itemCode} product={product} />
      ))}
    </div>
  );
}

export default HomeList;
