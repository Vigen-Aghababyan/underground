import classes from "./masters.module.css"
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { MASTERS } from '../Constants/Constants';


const Masters = () => {

    const [selectMaster, setSelectMaster] = useState({"id":"1","name":"Vil","style": "Realism"})
    const { t } = useTranslation()
    const insta = "https://www.instagram.com/"  
    const masterImage = MASTERS.find(elem=>elem.id === +selectMaster.id)
    
    const handleSelectMaster = (master) => {        
        setSelectMaster(master)
        
    }

    const mastersT = t('masters.master', { returnObjects: true })
    return ( <div className={classes.mastersSection}>
        <div className="wrapper">
            
            <div className={classes.masters}>
                <h3>{ t(`nav.masters`)}</h3>
                <div className={classes.content}>
                     <div className={classes.vilText}>
                        <h4>{ mastersT[+selectMaster.id-1].name }</h4>
                        <p>{mastersT[+selectMaster.id-1].style}</p>
                        <a
                            href={`${insta}${masterImage.email.substring(1)}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{color: "#767694"}}
                            aria-label="Instagram">{masterImage.email}</a>
                    </div>
                    <div className={classes.imageMaster}>
                        <img src={masterImage.photo} alt="MasterImage"/>
                    </div> 
                    <div className={classes.mastersName}>
                        <ul>
                            {
                                mastersT.map((master) => (
                                
                                <li key={master.id} onClick={()=>handleSelectMaster(master)} className={`${classes.text} ${selectMaster.id === master.id ? classes.active: null}`}>{master.name}</li>
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