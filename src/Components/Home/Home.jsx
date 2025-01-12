import { useTranslation } from "react-i18next";
import classes from "./home.module.css"
import NavBar from "./NavBar/NavBar";
import image from "/images/Logo.png"
const Home = () => {

    const { t } = useTranslation()
    

    return ( <div className={classes.home}>
        <div className='wrapper'>
            <NavBar />
            <div className={classes.homeInfo}>
                        <div className={classes.logo}>
                            <img src={image} alt="logo" />
                        </div>
                        <div className={classes.text}>
                    <span>{ t(`home.create`)}</span>
                            <h1>{ t(`home.studio`)}</h1>
                            <p>{ t(`home.cell`)}</p>
                        </div>

                </div>
            </div>
    </div>);
}
 
export default Home