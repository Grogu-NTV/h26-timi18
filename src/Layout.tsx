import { NavLink, Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Heim</NavLink>
        <NavLink to="/about">Um okkur</NavLink>
        <NavLink to="/products">Vörur</NavLink>
        {/* Skref 3 */}
        <NavLink to="/categories">Vöruflokkar</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
