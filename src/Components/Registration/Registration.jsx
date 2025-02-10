import classes from './registration.module.css';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import youtub from '/images/social/youtube.png';
import vk from '/images/social/vk.png';
import facebook from '/images/social/facebook.png';
import instagram from '/images/social/instagram.png';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

emailjs.init('dJyZxIGEjeBkanIhz');
const Registration = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        // Send email using EmailJS
        emailjs.send(
            'service_8j8ck56', // EmailJS Service ID
            'template_fc1k8nc', // EmailJS Template ID
            {
                name: data.name,
                email: data.email,
                message: data.textarea,
            }
        )
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                reset();
                toast.success('Email sent successfully!');
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                toast.error('Failed to send email.');
            });
    };

    const insta = 'https://www.instagram.com/';
    const teleg = 'https://t.me/underground_evn';
    const whatcapp = 'https://wa.me/+37491950414';
    const youtu = 'https://www.youtube.com/@undergroundtattoo.';
    const fb = 'https://www.facebook.com/underground.evn';
    const vkont = 'https://vk.com/club223675495';

    return (
        <div className={classes.registration}>
            <ToastContainer />
            <div className="wrapper">
                <div className={classes.registrCont}>
                    <h3>{t(`nav.registration`)}</h3>
                    <div className={classes.form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                {t(`registration.name`)}
                                <input
                                    type="text"
                                    placeholder={t(`registration.placeName`)}
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && (
                                    <span className={classes.errorMessage}>{errors.name.message}</span>
                                )}
                            </label>
                            <label>
                                {'E-mail'}
                                <input
                                    type="email"
                                    placeholder="email"
                                    {...register('email', { required: 'Email is required' })}
                                />
                                {errors.email && (
                                    <span className={classes.errorMessage}>{errors.email.message}</span>
                                )}
                            </label>
                            <label className={classes.textA}>
                                {t(`registration.textArea`)}
                                <textarea
                                    rows={5}
                                    cols={50}
                                    placeholder="Type your message"
                                    style={{ fontSize: '18px' }}
                                    {...register('textarea', { required: 'Message is required' })}
                                />
                                {errors.textarea && (
                                    <span className={classes.errorMessage}>{errors.textarea.message}</span>
                                )}
                            </label>
                            <button style={{ cursor: 'pointer' }}  type="submit">{t(`registration.send`)}</button>
                        </form>
                    </div>
                    <div className={classes.contacts}>
                        <div className={classes.adress}>
                            <h4>{t('registration.contact')}</h4>
                            <ul>
                                <li>
                                    {t('registration.phonNumber')}
                                    <a href={whatcapp} target="_blank" rel="noopener noreferrer">
                                        (WhatsApp
                                    </a>
                                    <a href={teleg} target="_blank" rel="noopener noreferrer">
                                        /Telegram)
                                    </a>
                                </li>
                                <li>{t('registration.phone')}</li>
                                <li>{t('registration.adress')}</li>
                            </ul>
                        </div>
                        <ul className={classes.social}>
                            <div>
                                <li>
                                    <a href={youtu} target="_blank" rel="noopener noreferrer">
                                        <img src={youtub} alt="youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a href={vkont} target="_blank" rel="noopener noreferrer">
                                        <img src={vk} alt="vk" />
                                    </a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <a href={fb} target="_blank" rel="noopener noreferrer">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href={`${insta}/underground.evn`} target="_blank" rel="noopener noreferrer">
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;