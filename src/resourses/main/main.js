import { useTranslation } from 'react-i18next';
import React from 'react';
import './main.scss';
import firstPhoto from './photos/mainPhoto1.jpg';
import secondPhoto from './photos/mainPhoto2.jpg';
import thirdPhoto from './photos/mainPhoto3.jpg';
import arrowUp from './photos/arrowUp.png';

function Main() {
  const { t } = useTranslation();
    return (
      <div className='wrapper'>
          <div id="carouselExampleDark" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={firstPhoto} alt='Main photo 1' className="d-block w-100"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='fs-2 item animation_item hide'>{t("Welcome")}</h5>
                    <p className='fs-4 item animation_item hide'>{t("Developer")}</p>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={secondPhoto} alt='Main photo 2' className="d-block w-100"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='fs-2'>{t("ExperienceSkills")}</h5>
                    <p className='fs-4'>{t("MySkills")}</p>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={thirdPhoto} alt='Main photo 3' className="d-block w-100"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='fs-2'>{t("Profile")}</h5>
                    <p className='fs-4'>{t("Info")}</p>
                  </div>
                </div>
              </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
        <div className='scroll-btn hidden'>
          <a href='#'>
            <img src={arrowUp} alt='Arrow up'></img>
          </a>
        </div>
    </div>
  );     
}
export default Main;