import { useTranslation } from 'react-i18next';
import './skills.scss';
import React from 'react';
import htmlIcon from './icons/html.svg';
import cssIcon from './icons/css.svg';
import sassIcon from './icons/sass.svg';
import jsIcon from './icons/js.svg';
import tsIcon from './icons/ts.svg';
import reactIcon from './icons/react.svg';
import gitIcon from './icons/git.svg';
import bootstrapIcon from './icons/bootstrap.svg';

function Skills() {
    const { t } = useTranslation();
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='block-skills'>
                    <div className='skills-tittle'>
                        <p className='animation_item hide'>{t("skills")}</p>
                    </div>
                    <div className='skills-info fs-2'>
                        <p className='animation_item hide'>{t("Stack")}</p>
                    </div>
                    <div className='skills-icons'>
                        <img src={htmlIcon} alt='Html icon' className='animation_item hide'></img>
                        <img src={cssIcon} alt='Css icon' className='animation_item hide'></img>
                        <img src={sassIcon} alt='Sass icon' className='animation_item hide'></img>
                        <img src={bootstrapIcon} alt='Bootstrap icon' className='animation_item hide'></img>
                        <img src={jsIcon} alt='Javascript icon' className='animation_item hide'></img>
                        <img src={tsIcon} alt='Typescript icon' className='animation_item hide'></img>
                        <img src={reactIcon} alt='React icon' className='animation_item hide'></img>
                        <img src={gitIcon} alt='Git icon' className='animation_item hide'></img>
                    </div>
                </div>
            </div>
        </div>
    );     
}
export default Skills;