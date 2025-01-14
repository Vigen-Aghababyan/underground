import classes from "./registration.module.css"
import { useForm } from "react-hook-form";
import youtub from '/images/social/youtube.png'
import vk from '/images/social/vk.png'
import facebook from '/images/social/facebook.png'
import instagram from '/images/social/instagram.png'
import { useTranslation } from "react-i18next";


const Registration = () => {

    const { t } = useTranslation()
    
    const {register,handleSubmit, formState: {errors},reset} = useForm()

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }

    return ( <div className={classes.registration}>
        <div className="wrapper">
            <div className={classes.registrCont}>
                <h3>{ t(`nav.registration`)}</h3>
                
                <div className={classes.form}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label >
                            {t(`registration.name`)}
                            <input type="text" placeholder={t(`registration.placeName`)} {...register('name')} />
                        </label>
                        <label htmlFor="">
                            {t(`registration.number`)}
                            <input type="number" placeholder= {t(`registration.numberPlace`)} {...register('Phone')} />
                        </label>
                    <button type="phone">{t(`registration.send`)}</button>
                    </form>
                </div>
                <div className={classes.contacts}>
                    <div className={classes.adress}>
                        <h4>{t('registration.contact')}</h4>
                        <ul>
                            <li>
                                <a href="#">
                                    {t('registration.phonNumber')} 
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    {t('registration.phone')}
                            </a>
                            </li>
                            <li>
                               {t('registration.adress')}
                        </li>
                        </ul>
                    </div>
                    <ul className={classes.social}>
                        <div>
                              <li>
                            <a href="https://www.youtube.com/@undergroundtattoo.">
                                <img src={youtub} alt="youtube" /> 
                            </a>
                        </li>
                        <li>
                            <a href="https://vk.com/club223675495">
                                <img src={vk} alt="vk" />       
                            </a>
                        </li>
                      </div>
                        <div>
                             <li>
                            <a href="https://www.facebook.com/underground.evn">
                                <img src={facebook} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/underground">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </li>
                       </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>        );
}
 
export default Registration