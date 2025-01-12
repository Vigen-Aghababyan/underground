import classes from "./masters.module.css"
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { MASTERS } from '../Constants/Constants';

const Masters = () => {

    
    const [selectMaster, setSelectMaster] = useState({"id":"1","name":"Vil","style": "  Realism"})
    const { t } = useTranslation()
    
    const masterImage = MASTERS.find(elem=>elem.id === +selectMaster.id).photo

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
                        <p>{ t(`masters.style`)} {mastersT[+selectMaster.id-1].style}</p>
                        <p>@pnk_tattoos</p>
                    </div>
                    <div className={classes.imageMaster}>
                        <img src={masterImage} alt="MasterImage" width={500} height={400} />
                    </div> 
                    <div className={classes.mastersName}>
                        <ul>
                            {
                                mastersT.map((master) => (
                                
                                <li key={master.id} onClick={()=>handleSelectMaster(master)}>{master.name}</li>
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