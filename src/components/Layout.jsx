import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './App.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  margin: 20px;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

const Layout = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <StyledLink
          to="/"
          className={css.navLink}
          activeclassname={css.active_link}
        >
          Home
        </StyledLink>
        <StyledLink
          to="/movies"
          className={css.navLink}
          activeclassname={css.active_link}
        >
          Movies
        </StyledLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
