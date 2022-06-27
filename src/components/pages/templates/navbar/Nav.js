import React, { useState, useEffect } from "react";
import { Search } from "@mui/icons-material";
import "./Nav.css";
import "../../Search/Search"
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../../assets/images/about/images/logoTaqi.png';
import logo1 from '../../../assets/images/main/logo2.png'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import haqda from '../../About/About.js'
import { BiSearch } from "react-icons/bi";
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Nav = () => {
  const {t, i18n} = useTranslation()
  const changeLanguage = (lang)=>{
    i18n.changeLanguage(lang);
  }

  const [state, setState] = useState(false);
  const [menu, setMenu] = useState(true)
  const [navActive, setNavActive] = useState('')
  function oncheng() {
    setState(p => !p)
  }
 
  const [isAcctive, setAcctive] = useState(true);
  function onMenu () { 
      setAcctive(!isAcctive);
  }

  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }



  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  
  const naviBGStyle = {
    display: 'flex',
    position: 'relative',
    top: '-50px',
    opacity: 1,
    height: '100vh'
  };
  function tops(){
    window.scrollTo(0,0)
  }
 
  return (
    
    <>
      <nav className="navigation">

        <div className={"nav_div1"}  >
          <div className={"bgtop"}  >
            <nav className="navigation-top">
              <h2 className="logo">
                <Link className="link-logo" to="/#" >
                  <span className="link-logo-child">TOSHKENT ARXITEKTURA QURILISH INSTITUTI</span>
                  <img className="navbarLogo" src={logo} alt="TAQI Logo" />
                </Link>
              </h2>
              <div className={isAcctive ? 'nav-top-link': 'nav-topMob'}>
                <ul>
                  <li>
                    <a href="#">Talabalar</a>
                  </li>

                  <li>
                    <a href="#">Xodimlar</a>
                  </li>

                  <li>
                    <a href="#"> Biturichilar </a>
                  </li>

                  <li>
                    <a href="#"> Tadqiqotchilar </a>
                  </li>
                   
                  <li>
                    <div className="nav-search">
                      <button onClick={oncheng} type="submit" className="buttonsearch ">
                        {
                          state ?
                            <span  >
                              <ClearIcon className="clear1" />
                              Yopish
                            </span>
                            :
                            <span>
                              <SearchIcon className="clear1" />
                              Qidiruv
                            </span>
                        }
                      </button>
                    </div>
                  </li>

                  <li>
                    <select className="uz">
                      <option className="uz" value="uz" onClick={()=>changeLanguage("uz")}>Uz</option>
                      <option className="uz" value="ru" onClick={()=>changeLanguage("ru")}>Ru</option>
                      <option className="uz" value="en" onClick={()=>changeLanguage("en")}>En</option>
                    </select>
                  </li>

                  <button 
                    type="submit" 
                    className={isAcctive ? 'buttonMenu navMenu': 'buttonMenu navMenu btn-Nav-Link'}
                    onClick={onMenu} 
                  >
                    <span> 
                      <BiMenu className="clear1 biMenu" />
                    </span>
                  </button>
                </ul>
              </div>


            </nav>
          </div>



          <div onclick={onMenu} className={'bgbtoon'}  activeClassName="active">
            <nav  className={isAcctive ? 'navigation-bottom': 'menuMob'}>
              <ul className="nav-bottom-link" >

                <li onClick={tops}>
                  <NavLink activeClassName="active" className={"link menuItem  "} to="/about"  >Haqida</NavLink>
                </li>

                <li onClick={tops}>
                  <NavLink activeClassName="active" className={"link menuItem "} to="/news"   >Habarlar</NavLink>
                </li>

                <li onClick={tops}>
                  <NavLink activeClassName="active" className={"link menuItem "} to="/tadbir1"  >Tadbirlar</NavLink>
                </li>

                <li onClick={tops}>
                  <NavLink activeClassName="active" className={"link menuItem "} to="/ilmiy1"  >Ilmiy</NavLink>
                </li>

                <li onClick={tops}>
                  <NavLink activeClassName="active" className={"link menuItem "} to="/tadqiqot1" > Tadqiqot </NavLink>
                </li>

                <li onClick={tops}>
                  <NavLink activeClassName="active" className={"link menuItem "} to="/qabul1" >Qabul</NavLink>
                </li>

                <li onClick={tops}>
                  <NavLink activeClassName="active" className={"link menuItem  "} to="/campus1" >Campus Life</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>


        <div className={"divs1 nav__search"} style={state ? naviBGStyle : {}}>

          <div className="searchText">
            <h3> Qidiruv  </h3>
            <span>
              <input type="radio" name="search" />
              web
            </span>
            <span>
              <input type="radio" name="search" />
              peopele
            </span>
          </div>
          <div className="searchButtons">
            <input type="text" className="searchInput" placeholder="Qidiruv TAQI websayt " />
            <button> <SearchIcon /> Qidiruv  </button>
          </div>
          <div className="serarchFooter">
            Qidiruvning boshqa usullari:
            <a target="_blank" href=" 
            https://www.google.com/maps/place/Toshkent+Arxitektura+Qurilish+Instituti/@41.3597783,69.3025876,17z/data=!3m1!4b1!4m5!3m4!1s0x38aef3e6ddff9841:0xb895faaef342b335!8m2!3d41.3597743!4d69.3047763
            "> Xarita </a>
            <a href=""> Profillari </a>

          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;