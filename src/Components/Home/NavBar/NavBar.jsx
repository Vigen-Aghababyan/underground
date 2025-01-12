import { useTranslation } from "react-i18next";
import { NAVBAR } from "../../Constants/Constants";
import Language from "./Language/Language";
import classes from "./navbar.module.css"
import { Link, scroller } from "react-scroll";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const NavBar = () => {

    const { t } = useTranslation()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(NAVBAR[0].path);
    
  const navbarRef = useRef(null)
  

   useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Обработчик клика по бургер-меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    useLayoutEffect(() => {
      const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
    // Учитываем высоту фиксированного navbar при прокрутке
    scroller.scrollTo(NAVBAR[0].path, {
      smooth: true,
      duration: 500,
      offset:-10 //-navbarHeight, 
    });
  }, []); // Пустой массив зависимости гарантирует, что код выполнится только один раз при монтировании компонента.


    return ( 
      <nav ref={navbarRef} className={classes.nav}>
          {/* Если ширина окна больше 1330, показываем обычное меню */ }
        {windowWidth > 1330 ? (
          <ul className={classes.navLinks}>
            {
              NAVBAR.map(menu => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    smooth={true}
                    duration={500}
                    activeClass={activeSection === menu.path ? classes.activeLink : ''}
                    spy={true}
                    offset= {-10}  //{-navbarRef.current?.offsetHeight} // Используем высоту navbar для расчета offset
                    onSetActive={() => {
                    
                      setActiveSection(menu.path)
                    }}
                  >
                    {t(`nav.${menu.name}`)}
                  </Link>
                </li>
              ))
            }
            <Language />
          </ul>
        ) : (
            
            <div className={`${classes.mobile} ${isMenuOpen ? classes.active : ''}`}>
              
              <div className={classes.burgerIcon} >
                
                {isMenuOpen ? <button onClick={toggleMenu}>X</button> : <div className={classes.navrow} ><h2 onClick={() => {
                 scroller.scrollTo(NAVBAR[0].path, {
      smooth: true,
      duration: 500,
      offset:-10 //-navbarHeight, 
    });
                  
              }}  >UNDERGROUND</h2> <p onClick={toggleMenu}>☰</p> <Language /></div>}
              </div>
              
              {
                isMenuOpen && <ul className={`${classes.navLinks} ${classes.menuItems}`}>
              
            {
              NAVBAR.map(menu => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    smooth={true}
                    duration={500}
                    activeClass={activeSection === menu.path ? classes.activeLink : ''}
                    spy={true}
                    offset={-10}//{navbarRef.current?.offsetHeight} // Используем высоту navbar для расчета offset
                    onSetActive={() => setActiveSection(menu.path)}
                    onClick={()=>setIsMenuOpen(false)}
                  >
                    {t(`nav.${menu.name}`)}
                  </Link>
                </li>
              ))
            }
              </ul>
              }
            </div>
        )}
        
      </nav>
     );
}
 
export default NavBar;
