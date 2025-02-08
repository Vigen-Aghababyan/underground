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
    const insta = "https://www.instagram.com/"
    const teleg = "https://t.me/underground_evn"
    const whatcapp = "https://wa.me/+37491950414"
    const youtu = "https://www.youtube.com/@undergroundtattoo."
    const fb = "https://www.facebook.com/underground.evn"
    const vkont = "https://vk.com/club223675495"

    return ( <div className={classes.registration}>
        <div className="wrapper">
            <div className={classes.registrCont}>
                <h3>{ t(`nav.registration`)}</h3>
                <div className={classes.form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            {t(`registration.name`)}
                            <input type="text" placeholder={t(`registration.placeName`)} {...register('name')} />
                        </label>
                        <label>
                            {'E-mail'}
                            <input type="e-mail" placeholder='tato@mail.com' {...register('name')} />
                        </label>
                        <label className={classes.textA} >
                            {t(`registration.textArea`)}
                            <textarea rows={50} cols={50}
                        
          {...register('textarea', { required: 'Поле обязательно для заполнения' })}         
        />
                        </label>
                            {/* {t(`registration.number`)} */}
                            {/* <input type="number" placeholder= {t(`registration.numberPlace`)} {...register('Phone')} /> */}
                        
                    <button type="phone">{t(`registration.send`)}</button>
                    </form>
                </div>
                <div className={classes.contacts}>
                    <div className={classes.adress}>
                        <h4>{t('registration.contact')}</h4>
                        <ul>
                            <li>
                                {t('registration.phonNumber')} 
                                <a href={whatcapp} target="_blank">
                                    (WhatsApp</a>
                                <a href={teleg} target="_blank">
                                    /Telegram)</a>
                            </li>
                            <li>
                                    {t('registration.phone')}
                            </li>
                            <li>
                               {t('registration.adress')}
                        </li>
                        </ul>
                    </div>
                    <ul className={classes.social}>
                        <div>
                              <li>
                            <a href={youtu} target="_blank">
                                <img src={youtub} alt="youtube" /> 
                            </a>
                        </li>
                        <li>
                            <a href={vkont} target="_blank">
                                <img src={vk} alt="vk" />       
                            </a>
                        </li>
                      </div>
                        <div>
                             <li>
                            <a href={fb} target="_blank">
                                <img src={facebook} alt="facebook" />
                            </a>
                        </li>
                        <li>
                                <a href={`${ insta}/underground.evn`} target="_blank">
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