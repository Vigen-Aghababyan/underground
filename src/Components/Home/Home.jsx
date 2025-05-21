import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';
import classes from "./home.module.css"
import NavBar from "./NavBar/NavBar";
import image from "/images/Logo.png"
const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const { t } = useTranslation()
    

    return ( <div className={classes.home}>
        <div className='wrapper'>
            <NavBar />
            <div className={classes.homeInfo}>
                <div className={classes.logo}>
                    <img src={image} alt="logo"/>
                </div>
                <div className={classes.text}>
                    <span>{t(isMobile ? `home.create_mobile` : `home.create`)}
                </span>
                <h1>{t(isMobile ? `home.studio_mobile` : `home.studio`)}</h1>
                <p>{t(isMobile ? `home.cell_mobile` : `home.cell`)}</p>
            </div>

        </div>
    </div>
</div>)
    ;
}

export default Home