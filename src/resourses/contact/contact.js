import { useTranslation } from 'react-i18next';
import './contact.scss';
import React from 'react';

function Contact() {
    const { t } = useTranslation();
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='block-contact'>
                    <div className='contact-tittle'>
                        <p className='item animation_item hide'>{t("contact")}</p>
                    </div>
                        <div className="contact-info">
                            <div className="contact-about fs-4">
                                <p className='mt-3 fw-bolder item-name animation_item hide'>{t("name")}<br></br>
                                    <input id='inputName' className="line" placeholder= {t("your_name")}></input>
                                </p>
                                <p className='mt-3 fw-bolder item-mail animation_item hide'>{t("email")}<br></br>
                                    <input id='inputMail' className="line" placeholder= {t("your_mail")}></input>
                                </p>
                            </div>
                            <div className="contact-textarea fs-4 mt-5 fw-bolder">
                                <p className='item animation_item hide msg'>{t("message")}</p>
                                <textarea id='inputText' className="line item animation_item hide" placeholder={t("your_message")}></textarea>
                            </div>
                            <div className="contact-send mt-5">
                                <button className='fw-bold animation_item hide'>{t("submit")}</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );     
}
export default Contact;