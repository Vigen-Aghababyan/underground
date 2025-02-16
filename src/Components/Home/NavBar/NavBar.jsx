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
  const [scrolButtom,setScrollButton] = useState(false)
    
  const navbarRef = useRef(null)

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 160) {
   setScrollButton(true)
    } else {
   setScrollButton(false)
    }
  };

  const handleScrollTo = () => {
    scroller.scrollTo(NAVBAR[0].path, {
      smooth: true,
      duration: 500,
      offset: -10 //-navbarHeight, 
      
    });
  }

   useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
  
    };

    window.addEventListener('resize', handleResize);
 window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    useLayoutEffect(() => {
      // const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
    scroller.scrollTo(NAVBAR[0].path, {
      smooth: true,
      duration: 500,
      offset: -10 //-navbarHeight, 
      
    });
  }, []); 


    return ( 
      <nav ref={navbarRef} className={classes.nav}>
        {scrolButtom && <div className={classes.arrow} onClick={handleScrollTo}>
    <span></span>
    <span></span>
    <span></span>
</div>}
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
                    offset= {-10}  //{-navbarRef.current?.offsetHeight} 
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
                  
                  }}  >UNDERGROUND</h2> <p onClick={toggleMenu}>☰</p> <Language /></div>
                }
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
                    offset={-10}//{navbarRef.current?.offsetHeight}
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
