import style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className={style.header}>
        <nav className={style.nav}>
          <div className={style.contact}>
            <img
              src="https://www.gstatic.com/images/branding/product/1x/contacts_48dp.png"
              height={"40px"}
              width="40px"
            ></img>
            <span>Contacts</span>
          </div>

          <input
            className={style.input}
            type="text"
            name="search"
            placeholder="Search"
          ></input>

          <div>
            <img
              src="https://admin.google.com/u/0/ac/images/logo.gif?uid=105374338632565604146&service=google_gsuite"
              height={"50px"}
              width={"100px"}
            ></img>
            <img
              src="https://lh3.google.com/u/0/ogw/ADea4I7rV5GNw0YGBxxGDA8M8AwqeOwrHYIvToNWcFnW=s32-c-mo"
              height={"30px"}
              width={"30px"}
              className={style.account}
            ></img>
          </div>
        </nav>
      </div>
      <div>
        <aside className={style.asideContainer}>
          <NavLink
            style={({ isActive }) => {
              return { backgroundColor: { isActive } ? "#e8f0fe" : "black" };
            }}
            to="/"
          >
            <div className={style.content}>Contacts</div>
          </NavLink>
          <Link to="/add">
            <div className={style.content}>Add To Contacts</div>
          </Link>
          <div className={style.content}>Frequently contacted</div>
          <div className={style.content}>Distionary</div>
        </aside>
      </div>
    </>
  );
};

export default Header;
