import classes from "./language.module.css"
import LanguageSwich from "./i18n/languageSwich";


const Language = () => {
    return (<div className={classes.language}>
      
        <LanguageSwich />
    </div> );
}
 
export default Language;