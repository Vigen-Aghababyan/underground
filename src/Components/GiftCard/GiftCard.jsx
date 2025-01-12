import { useTranslation } from "react-i18next";
import classes from "./giftcard.module.css"
import image from '/images/Gift_Map.png'
const GiftCard = () => {
    const {t} = useTranslation()
    return ( <div className={classes.giftcard}>
         <div className="wrapper">
             <div className={classes.giftCont}>
                <h3>{ t(`nav.giftcard`)}</h3>
                <img src={image} alt="gift card" />
                <p>{ t(`giftCardText`)}</p>
                </div>
            </div>
    </div>        );
}
 
export default GiftCard