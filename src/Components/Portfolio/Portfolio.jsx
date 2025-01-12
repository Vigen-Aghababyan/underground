import { useTranslation } from "react-i18next";
import classes from "./portfolio.module.css"
import Slider from "./Slider/Slider"

const Portfolio = () => {
    const {t} = useTranslation()
    return ( <div className={classes.portfolio}>
        <div className="wrapper">
             <div className={classes.portfolioCont}>
                <h3>{t(`nav.portfolio`) }</h3>
                <Slider />
                </div>
        </div>
    </div>        );
}
 
export default Portfolio