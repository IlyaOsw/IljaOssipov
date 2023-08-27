import { useTranslation } from 'react-i18next';
import './experience.scss';
import React from 'react';
import expImg from './image/exp.jpg';

function Experience() {
    const { t } = useTranslation();
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='block-experience'>
                    <div className='experience-tittle mb-5'>
                        <p className='item animation_item hide'>{t("experience")}</p>
                    </div>
                    <div className='experience-body'>
                        <div className='experience-information fs-5'>
                            <ul>
                                <li className='animation_item hide'><p>{t("html")}</p></li>
                                <li className='animation_item hide'><p>{t("css")}</p></li>
                                <li className='animation_item hide'><p>{t("sass")}</p></li>
                                <li className='animation_item hide'><p>{t("bootstrap")}</p></li>
                                <li className='animation_item hide'><p>{t("js")}</p></li>
                                <li className='animation_item hide'><p>{t("ts")}</p></li>
                                <li className='animation_item hide'><p>{t("git")}</p></li>
                                <li className='animation_item hide'><p>{t("react")}</p></li>
                            </ul>
                        </div>
                        <div className='exp-image mb-5 mt-5'>
                            <img src={expImg} alt='Experience image' className="img-fluid animation_item hide"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );     
}
export default Experience;