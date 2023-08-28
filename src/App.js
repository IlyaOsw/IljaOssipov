import Header from './resourses/header/header';
import Main from './resourses/main/main';
import About from './resourses/about/about';
import Skills from './resourses/skills/skills';
import Experience from './resourses/experience/experience';
import Contact from './resourses/contact/contact';
import Footer from './resourses/footer/footer';
import React, { useEffect } from 'react';
import Particle from './resourses/Particle';
import i18n from './i18n';

function App() {
  i18n.init({
    resources: {
      en: {
        translation: require('./locales/en/translation.json')
      },
      ee: {
        translation: require('./locales/ee/translation.json')
      },
      ru: {
        translation: require('./locales/ru/translation.json')
      }
    }
  });
  useEffect(() => {
      // Hide Burger-menu
      const body = document.body
      const burgerBtn = document.getElementById('menu')
      const burgerMenu = document.getElementById('navbarSupportedContent');

      body.addEventListener('click', (event) => {
        if(!burgerMenu.contains(event.target) && event.target !== burgerBtn) {
          if(burgerMenu.classList.contains('show')) {
            burgerBtn.click()
          }
        }
      })

      // Dark/Light Theme
      const bodyColor = document.querySelector('body')
      const headerColor = document.querySelector('.header_color')
      const darkTheme = document.querySelector('.dark_theme')
      const lightTheme = document.querySelector('.light_theme')

      const nav = document.querySelectorAll('.nav-link')
      const blocks = document.querySelectorAll('.block-about, .block-skills, .block-experience, .block-contact, .block-footer')

      const InputName = document.getElementById('inputName')
      const InputEmail = document.getElementById('inputMail')
      const Message = document.getElementById('inputText')

      lightTheme.addEventListener('click', () => {
        bodyColor.style.backgroundImage = 'linear-gradient(to right, #d4d4d4, #f3f3f3)';
        headerColor.style.backgroundImage = 'linear-gradient(to right, #d4d4d4, #f3f3f3)';

        nav.forEach(link => {
          link.style.color = '#141414';
          link.style.setProperty('color', '#141414', 'important');
        });
        const color = '#141414';
        const borderBottom = '1px solid ' + color;
        blocks.forEach(block => {
          block.style.color = color;
        });
        
        [InputName, InputEmail, Message].forEach(input => {
          input.style.color = color;
          input.style.borderBottom = borderBottom;
        });
      })
      
      darkTheme.addEventListener('click', () => {
        bodyColor.style.backgroundImage = 'linear-gradient(to right, #141414, #494949)';
        headerColor.style.backgroundImage = 'linear-gradient(to right, #141414, #494949)';

        nav.forEach(link => {
          link.style.color = '#f8f9fa';
          link.style.setProperty('color', '#f8f9fa', 'important');
        });

        const color = '#f8f9fa';
        const borderBottom = '1px solid ' + color;
        blocks.forEach(block => {
          block.style.color = color;
        });

        [InputName, InputEmail, Message].forEach(input => {
          input.style.color = color;
          input.style.borderBottom = borderBottom;
        });
      })

      // Scroll To Blocks
      const aboutBlock = document.querySelector('.block-about')
      const skilssBlock = document.querySelector('.block-skills')
      const experienceBlock = document.querySelector('.block-experience')
      const contactBlock = document.querySelector('.block-contact')

      function scrollToBlock(element) {
      const windowHeight = window.innerHeight
      const elementHeight = element.clientHeight
      const scrollTopOffset = element.offsetTop - (windowHeight - elementHeight) / 2

        window.scroll({
            left: 0,
            top: scrollTopOffset,
            behavior: 'smooth'
          })
        }
        document.getElementById('aboutBtn').addEventListener('click', (event) => {
            event.preventDefault();
            scrollToBlock(aboutBlock)
        })
        document.getElementById('skilssBtn').addEventListener('click', (event) => {
          event.preventDefault();
          scrollToBlock(skilssBlock)
        })
        document.getElementById('experienceBtn').addEventListener('click', (event) => {
          event.preventDefault();
          scrollToBlock(experienceBlock)
        })
        document.getElementById('contactBtn').addEventListener('click', (event) => {
            event.preventDefault();
            scrollToBlock(contactBlock)
        })

      // Animations
      const animationItems = document.querySelectorAll('.animation_item');
      if (animationItems.length > 0) {
        window.addEventListener('scroll', animationOnScroll);
        function animationOnScroll() {
          for(let i = 0; i < animationItems.length; i++) {
            const animationItem = animationItems[i];
            const animationItemHeight = animationItem.offsetHeight;
            const animationItemOffset = offset(animationItem).top;
            const animationStart = 4;

            let animationItemPoint = window.innerHeight - animationItemHeight / animationStart;
            if (animationItemHeight > window.innerHeight) {
              animationItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((window.scrollY > animationItemOffset - animationItemPoint) && window.scrollY < (animationItemOffset + animationItemHeight)) {
              animationItem.classList.add('active');
            } else if (!animationItem.classList.contains('hide')){
              animationItem.classList.remove('active');
            }
          }
        }
        animationOnScroll();
        function offset(el) {
          const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        }

      // Back To Top Button
      const scrollButton = document.querySelector('.scroll-btn');
      scrollButton.addEventListener('click', () => {
      window.scroll(0, 0);
      })
      window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollButton.classList.remove('hidden');
      } else {
        scrollButton.classList.add('hidden');
      }
      });
      }, []);

    return (
      <div className="App">
        <Header/>
        <Main/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
        <Particle/>
      </div>
    );
}
export default App;