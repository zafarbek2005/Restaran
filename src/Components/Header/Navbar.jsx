import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="navbar conteiner ">
        <div className="logo">
          <h1>LOGO</h1>
        </div>

        {/* Dekstop uchun oddiy menyu */}
        <div className="items">
          <NavLink to="/">Меню</NavLink>
          <NavLink to="/">Новости</NavLink>
          <NavLink to="/">Бронирование</NavLink>
          <NavLink to="/">О нас</NavLink>
          <NavLink to="/">Контакты</NavLink>
        </div>

        <div className="right_items">
          <button>
            <IoMdHeartEmpty />
          </button>
          <button>
            <BsCart2 />
          </button>

          {/* Mobil menyu tugmasi */}
          <button className="menu-btn" onClick={() => setMenuOpen(true)}>
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Mobil menyu */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <IoClose />
        </button>
        <nav>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Меню</NavLink>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Новости</NavLink>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Бронирование</NavLink>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>О нас</NavLink>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Контакты</NavLink>
        </nav>
      </div>

      {/* Overlay (fon bosilganda menyuni yopish) */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default Navbar;
