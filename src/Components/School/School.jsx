import { useTranslation } from "react-i18next";
import classes from "./school.module.css"
import image from "/images/Director.png"
import { useEffect, useState } from "react";

const School = () => {

    const { t } = useTranslation()


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [more,setMore] = useState(false)
    const [morePro, setMorePro] = useState(false)
    

       useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    const showLite = () => setMore(prev=>!prev)
    const showPro = () => setMorePro(prev=>!prev)

     return ( <div className={classes.school}>
            <div className="wrapper">
             <div className={classes.schoolCont}>
                 <h3>{ t(`nav.school`)}</h3>
                 <div className={classes.cont}>
                     <div className={classes.aboutSchool}>
                        {
                             windowWidth > 1330 ? <><ul className={classes.learning}>
                                 <li>  {t(`school.lite`)} — 299 000 AMD  </li>
                                     <li>    {t(`school.classes`)}  </li>
                                     <li>  {t(`school.practic`)} </li>
                                     <li>  {t(`school.materials`)} </li>
                                     <li>  {t(`school.cooperate`)}  </li>
                                     <li>  {t(`school.discount`)} </li>
                                     <li>  {t(`school.duration`)} </li>
                                     <li>  {t(`school.credit`)} </li>
                             
                             </ul>
                                 <ul className={classes.price}>
                                     <li>   {t(`school.pro`)} — 450 000 AMD  </li>
                                         <li>  {t(`school.classesPro`)}  </li>
                                         <li> {t(`school.paintIpad`)}  </li>
                                         <li>  {t(`school.marceting`)} </li>
                                         <li>  {t(`school.practicPro`)} </li>
                                         <li>  {t(`school.materialsPro`)}   </li>
                                         <li>  {t(`school.cooperatePro`)} </li>
                                         <li>  {t(`school.discountPro`)} </li>
                                         <li>  {t(`school.durationPro`)} </li>
                                         <li>  {t(`school.creditPro`)} </li>
                                 </ul></>
                                 :
                                 <><ul className={classes.learning}>
                                     <p onClick={showLite}>  {t(`school.lite`)} — 299 000 AMD  </p>
                                     {more && <div onClick={showLite}>
                                         <li>    {t(`school.classes`)}  </li>
                                         <li>  {t(`school.practic`)} </li>
                                         <li>  {t(`school.materials`)} </li>
                                         <li>  {t(`school.cooperate`)}  </li>
                                         <li>  {t(`school.discount`)} </li>
                                         <li>  {t(`school.duration`)} </li>
                                         <li>  {t(`school.credit`)} </li>
                                     </div>}

                                 </ul><ul className={classes.price}>
                                         <p onClick={showPro}>   {t(`school.pro`)} — 450 000 AMD  </p>
                                         {morePro && <div onClick={showPro}>
                                             <li>  {t(`school.classesPro`)}  </li>
                                             <li> {t(`school.paintIpad`)}  </li>
                                             <li>  {t(`school.marceting`)} </li>
                                             <li>  {t(`school.practicPro`)} </li>
                                             <li>  {t(`school.materialsPro`)}   </li>
                                             <li>  {t(`school.cooperatePro`)} </li>
                                             <li>  {t(`school.discountPro`)} </li>
                                             <li>  {t(`school.durationPro`)} </li>
                                             <li>  {t(`school.creditPro`)} </li>
                                         </div>}
                                     </ul></> 
                        }
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