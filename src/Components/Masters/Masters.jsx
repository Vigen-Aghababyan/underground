import masterImage from '/images/Masters/master.png'
import classes from "./masters.module.css"
import { useTranslation } from "react-i18next";

const Masters = () => {
    
    const { t } = useTranslation()

    const MASTERS = t('masters.master', { returnObjects: true })

    return ( <div className={classes.mastersSection}>
        <div className="wrapper">
            <div className={classes.masters}>
                <h3>{ t(`nav.masters`)}</h3>
                <div className={classes.content}>
                    <div className={classes.vilText}>
                        <h4>{ t(`masters.vil`)}</h4>
                        <p>{ t(`masters.style`)} { t(`masters.realism`)}</p>
                        <p>@pnk_tattoos</p>
                    </div>
                    <div className={classes.imageMaster}>
                        <img src={masterImage} alt="MasterImage" />
                    </div>
                    <div className={classes.mastersName}>
                        <p>{ t(`masters.vil`)}</p>
                        <ul>
                            {
                            MASTERS.map((master,i) => (
                                <li key={i+Math.random()}>{master}</li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>        );
}
 
export default Masters