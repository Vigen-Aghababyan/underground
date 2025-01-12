import { useTranslation } from "react-i18next";
import classes from "../language.module.css"
import { useEffect, useState } from "react";

const LanguageSwich = () => {

    const { i18n } = useTranslation()
    const [optionVal,setOptionVal] = useState('')
    

   const swichLang = (event) => {
        const lang = event.target.value;
       i18n.changeLanguage(lang);
       localStorage.setItem('key', lang)
       setOptionVal(lang)
    }

    useEffect(() => {
        let lng = localStorage.getItem('key') 
        setOptionVal(lng)
    },[])
    
    return (<div className={classes.selectCont}>
            <select value={optionVal} onChange={swichLang}  className={classes.selectBox}>
                <option value='en'>EN</option>
                <option value='ru'>RU</option>
                <option value='am'>AM</option>
            </select>
       </div> );
}
 
export default LanguageSwich;