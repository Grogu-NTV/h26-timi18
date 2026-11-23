import { Link } from "react-router";
import { categories, products } from "../data/products";
/// SKREF 2
export function Categories() {
  return (
    <>
      <h1>Flokkar</h1>
      <ul>
        {categories.map((category) => {
          // Hluti 2: Skref 7 (stendur 6)
          const count = products.filter(
            (p) => p.category === category.name,
          ).length;
          return (
            <li>
              <Link to={`/categories/${category.slug}`}>
                {category.name} ({count})
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
