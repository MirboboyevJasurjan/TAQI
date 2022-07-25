import React, { useState, useEffect } from "react";
import "./Nav.css";
import "../../Search/Search"
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../../assets/images/about/images/logoTaqi.png';
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const {t, i18n} = useTranslation()

  const changeLanguage = (e)=>{
    i18n.changeLanguage(e.target.value);
  }

  useEffect(()=>{
    for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
      const element = document.getElementsByClassName('lang')[index];
      if(element.value === i18n.language){
        element.setAttribute("selected", "true")
      }
    }
  })

  const [state, setState] = useState(false);
  // const [menu, setMenu] = useState(true)
  // const [navActive, setNavActive] = useState('')
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
                <Link className="link-logo" to="/#"  onClick={tops}>
                  <span className="link-logo-child">{t("navbar.Taqi")}</span>
                  <img className="navbarLogo" src={logo} alt="TAQI Logo" />
                </Link>
              </h2>
              <div className={isAcctive ? 'nav-top-link': 'nav-topMob'}>
                <ul>
                  <li>
                    <Link to="#" onClick={tops}>{t("navbar.talabalar")}</Link>
                  </li>

                  <li>
                    <Link to="#" onClick={tops}>{t("navbar.xodimlar")}</Link>
                  </li>

                  <li>
                    <Link to="#" onClick={tops}> {t("navbar.bitiruvchilar")} </Link>
                  </li>

                  <li>
                    <Link to="#" onClick={tops}> {t("navbar.tadqiqotchilar")}</Link>
                  </li>
                   
                  <li>
                    <div className="nav-search">
                      <button onClick={oncheng} type="submit" className="buttonsearch ">
                        {
                          state ?
                            <span  >
                              <ClearIcon className="clear1" id="CloseX" />
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
                    <select className="uz" aria-label="Default select example" onChange={changeLanguage} defaultValue="uz" >
                      <option className="uz lang" value="uz" selected="true">Uz</option>
                      <option className="uz lang" value="ru">RU</option>
                      <option className="uz lang" value="en">En</option>
                    </select>                  </li>

                  <button 
                    type="submit" 
                    className={isAcctive ? 'buttonMenu navMenu': 'buttonMenu navMenu btn-Nav-Link'}
                    onClick={onMenu} 
                  >
                    {
                      isAcctive ? 
                    <span> 
                      <BiMenu className="clear1 biMenu" />
                    </span>
                     : 
                     <span> 
                      <ClearIcon className="clear1 biMenu" id="CloseX" />
                    </span> 
                    }
                  </button>
                </ul>
              </div>


            </nav>
          </div>



          <div onclick={onMenu} className={'bgbtoon'}  activeClassName="active">
            <nav  className={isAcctive ? 'navigation-bottom': 'menuMob'}>
              <ul className="nav-bottom-link" >
                <li onClick={tops}><NavLink activeClassName="active" className={"link menuItem  "} to="/about"  >{t("navbar.haqida")}</NavLink></li>
                <li onClick={tops}><NavLink activeClassName="active" className={"link menuItem "} to="/news"   >{t("navbar.habarlar")}</NavLink></li>
                <li onClick={tops}><NavLink activeClassName="active" className={"link menuItem "} to="/tadbir1"  >{t("navbar.tadbirlar")}</NavLink></li>
                <li onClick={tops}><NavLink activeClassName="active" className={"link menuItem "} to="/ilmiy1"  >{t("navbar.ilmiy")}</NavLink></li>
                <li onClick={tops}><NavLink activeClassName="active" className={"link menuItem "} to="/tadqiqot" > {t("navbar.tadqiqot")} </NavLink></li>
                <li onClick={tops}><NavLink activeClassName="active" className={"link menuItem "} to="/qabul" >{t("navbar.qabul")}</NavLink></li>
                <li onClick={tops}><NavLink activeClassName="active" className={"link menuItem  "} to="/campus" >{t("navbar.campus")}</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>


        <div className={"divs1 nav__search"} style={state ? naviBGStyle : {}}>

          <div className="searchText">
            <h3> Qidiruv  </h3>
            <span>
              <input type="radio" name="search" />
              Web
            </span>
            <span>
              <input type="radio" name="search" />
              People
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
            <Link to="" onClick={tops}> Profillari </Link>

          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;