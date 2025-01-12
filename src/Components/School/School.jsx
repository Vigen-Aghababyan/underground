import { useTranslation } from "react-i18next";
import classes from "./school.module.css"
import image from "/images/Director.png"

const School = () => {

    const {t} = useTranslation()

     return ( <div className={classes.school}>
            <div className="wrapper">
             <div className={classes.schoolCont}>
                 <h3>{ t(`nav.school`)}</h3>
                 <div className={classes.cont}>
                     <div className={classes.aboutSchool}>
                         <ul className={classes.learning}>
                             <li>  {t(`school.lite`) } — 299 000 AMD  </li> 
                             <li>    {t(`school.classes`) }  </li> 
                             <li>  {t(`school.practic`) } </li> 
                             <li>  {t(`school.materials`) } </li> 
                             <li>  {t(`school.cooperate`) }  </li> 
                             <li>  {t(`school.discount`) } </li> 
                             <li>  {t(`school.duration`) } </li> 
                             <li>  {t(`school.credit`) } </li> 
                            
                         </ul>
                         <ul className={classes.price}>
                              <li>   {t(`school.pro`) } — 450 000 AMD  </li> 
                             <li>  {t(`school.classesPro`) }  </li> 
                             <li> {t(`school.paintIpad`) }  </li> 
                             <li>  {t(`school.marceting`) } </li> 
                             <li>  {t(`school.practicPro`) } </li> 
                             <li>  {t(`school.materialsPro`) }   </li> 
                             <li>  {t(`school.cooperatePro`) } </li> 
                             <li>  {t(`school.discountPro`) } </li> 
                             <li>  {t(`school.durationPro`) } </li> 
                             <li>  {t(`school.creditPro`) } </li> 
                         </ul>
                     </div>
                     <div className={classes.masterclass}>
                         <img src={image} alt="director" />
                         <p>  {t(`school.masterClass`) }  </p>
                    </div>
                 </div>
                </div>
            </div>
        </div>);
}
 
export default School;