import { NavMenuUl } from "../styled";

function Nav() {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <NavMenuUl>
        <li>
          <a href="#">Women's</a>
        </li>
        <li>
          <a href="#">Men's</a>
        </li>
        <li>
          <a href="#">On the Street</a>
        </li>
        <li>
          <a href="#">The Catwalk</a>
        </li>
        <li>
          <a href="#">AdWatch</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </NavMenuUl>
    </nav>
  );
}

export default Nav;
