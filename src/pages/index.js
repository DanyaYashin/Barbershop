import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import sc1 from "../../static/414-4143251_png-file-scissors-svg.png";
import sc2 from "../../static/414-4143251_png-file-scissors-svg (1).png";
import us1 from "../../static/usiki1.png";
import us2 from "../../static/usiki2.png";
import us3 from "../../static/usiki3.png";
import us4 from "../../static/usiki4.png";


export default function Home() {

  //const [scrollPosition, setScrollPosition] = useState(0);
  const frameArray = [us1,us2,us3,us4];
  const [Angle, setAngle] = useState(0);
  const [frame, setFrame] = useState(0);
  const [galleryPosition, setGallery] = useState(250);
  const handleScroll = () => {
    //const position = window.pageYOffset;
    //setScrollPosition(position);
    let supportAngle = (window.pageYOffset)%50;
    let supportFrame = (Math.floor(window.pageYOffset/200))%6;
    if (supportAngle > 25){
      supportAngle = 50 - supportAngle;
    };
    setAngle(supportAngle);
    if (supportFrame > 3){
      supportFrame = 6 - supportFrame;
    };
    setFrame(supportFrame);
    let gp = 250-window.pageYOffset;
    setGallery(gp);
};


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  return (


    <div>

      <div className={styles.topmenu}>
        <ul>
          <li><Link to = '/'><div className={styles.title}><p>Usiki</p></div></Link></li>
          <li><Link to = '#price'><p>Услуги</p></Link></li>
          <li><Link to = '#gallery'><p>Галерея</p></Link></li>
          <li><Link to = '#contact'><p>Контакты</p></Link></li>
        </ul>
      </div>

      <ParallaxProvider>
      <Parallax className={styles.img_parallax} y={[-50, 50]}>
      <img src ={sc1}  className = {styles.img_1_1} alt="image"/>
      <img src ={sc2} style = {{transform: `rotate(${Angle}deg)`}} className = {styles.img_1_2} alt="image"/>
      </Parallax>
      <Parallax className={styles.img_parallax} y={[100, -100]}>
      <img src ={`${frameArray[`${frame}`]}`} className = {styles.img_2} alt="image"/>
      </Parallax>
      <Parallax className={styles.img_parallax} y={[-70, 70]}>
      <img src ="https://cdn.onlinewebfonts.com/svg/img_135463.png" className = {styles.img_3} alt="image"/>
      </Parallax>
      <Parallax className={styles.img_parallax} y={[100, -100]}>
      <img src ="https://svgsilh.com/svg/2702564.svg" className = {styles.img_4} alt="image"/>
      </Parallax>
      </ParallaxProvider>

      <div className={styles.text_1}>
        Мы вынуждены отталкиваться от того, что синтетическое тестирование говорит о возможностях укрепления моральных ценностей. Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы формируют глобальную экономическую сеть и при этом - заблокированы в рамках своих собственных рациональных ограничений. Таким образом, социально-экономическое развитие напрямую зависит от как самодостаточных, так и внешне зависимых концептуальных   решений. Лишь активно развивающиеся страны третьего мира являются только методом политического участия и объединены в целые кластеры себе подобных. Мы вынуждены отталкиваться от того, что высокое качество позиционных исследований способствует подготовке и реализации глубокомысленных рассуждений.
      </div>

      <div className={styles.text_2}>
        Разнообразный и богатый опыт начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. Товарищи! консультация с широким активом способствует подготовки и реализации новых предложений. Повседневная практика показывает, что укрепление и развитие структуры позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требуют от нас анализа направлений прогрессивного развития.
      </div>

      <div className={styles.price_list} id="price">
        <div className={styles.price}>
          <ul>
            <li><div className={styles.price_title}><h2>Цены :</h2></div></li>
            <li><p>Мужская........................................................................1000р</p></li>
            <li><p>Женская.........................................................................1500р</p></li>
            <li><p>Детская..........................................................................1000р</p></li>
          </ul>
        </div>
      </div>

      <div className={styles.gallery} style={{marginLeft: `${galleryPosition}vw`}} id="gallery">
        <img src ="https://techcrunch.com/wp-content/uploads/2019/06/songe-dave-barbershop.jpg?w=730&crop=1"/>
      </div>

      <ParallaxProvider>
      <Parallax className={styles.contact_parallax}  y={[-40, 65]}>
      <div className={styles.contact}  id="contact">
      <Parallax className={styles.contact_parallax} y={[-40, 65]}>
        <h2>Контакты</h2>
        <p>Место для вашего номера телефона</p>
        <p>Место для вашего мыла</p>
        <p>Инста</p>
        <p>Ещё что-нибудь важное</p>
        </Parallax>
      </div>
      </Parallax>
      </ParallaxProvider>

    </div>
  )

}
