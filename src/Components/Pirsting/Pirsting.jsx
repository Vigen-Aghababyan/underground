import { useTranslation } from "react-i18next";
import classes from "./pirsting.module.css"
import image from "/images/Masters/master.png"

const Pirsting = () => {

    const {t} = useTranslation()

    return ( <div className={classes.pirsting}>
        <div className="wrapper">
            <div className={classes.content}>
                <h3>{ t(`nav.pirsting`)}</h3>
                <div className={classes.textPirsting}>
                    <img src={image} alt="pirting" />
                    <p>{ t(`pirsting`)}</p>
                </div>
            </div>
       </div>
    </div>        );
}
 
export default Pirsting