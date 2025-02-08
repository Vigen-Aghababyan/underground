import { useTranslation } from "react-i18next";
import classes from "./pirsting.module.css"
import image from "/images/Pirsting/pirstingMaster.jpg"

const Pirsting = () => {

    const { t } = useTranslation()
    

    return ( <div className={classes.pirsting}>
        <div className="wrapper">
            <div className={classes.content}>
                <h3>{ t(`nav.pirsting`)}</h3>
                <div className={classes.textPirsting}>
                    <div className={classes.avat}>
                        <img src={image} alt="pirting" />
                        <a href="https://www.instagram.com/vahagn.piercer" target="_blanck">@vahagn.piercer</a>
                   </div>
                    <p>{ t(`pirsting`)}</p>
                </div>
            </div>
       </div>
    </div>        );
}
 
export default Pirsting