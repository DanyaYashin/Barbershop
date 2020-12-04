import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import sc1 from "../../static/414-4143251_png-file-scissors-svg.png";
import sc2 from "../../static/414-4143251_png-file-scissors-svg (1).png";
import usiki1 from "../../static/usiki1.png";
import usiki2 from "../../static/usiki2.png";
import usiki3 from "../../static/usiki3.png";
import usiki4 from "../../static/usiki4.png";



export default function Home() {

  //const [scrollPosition, setScrollPosition] = useState(0);
  const [Angle, setAngle] = useState(0);
  const [usiki, setUsiki] = useState(0);
  const [gallery, setGallery] = useState(0);
  const handleScroll = () => {
    //const position = window.pageYOffset;
    //setScrollPosition(position);
    let supportAngle = ((window.pageYOffset)/5)%30;
    let movingUsiki = ((window.pageYOffset)/2)%6;
    let horizontalScrolling = ((window.pageYOffset));
    if (supportAngle > 15){
      supportAngle = 30 - supportAngle;
    }
    if (movingUsiki > 3){
      movingUsiki = 6 - supportAngle;
    }
    setAngle(supportAngle);
    setUsiki(movingUsiki);
    setGallery(horizontalScrolling);
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
      <img src ={sc1} style = {{transform: `rotate(-${Angle}deg)`}} className = {styles.img_1_1} alt="image"/>
      <img src ={sc2} style = {{transform: `rotate(${Angle}deg)`}} className = {styles.img_1_2} alt="image"/>
      </Parallax>
      <Parallax className={styles.img_parallax} y={[100, -100]}>
      <img src ="https://svgsilh.com/svg/158079.svg" className = {styles.img_2} alt="image"/>
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
          <img src ={`usiki${usiki.toString()}`} alt="image"/>
        </div>
      </div>

      <div className={styles.gallery} style = {{margin: `-${gallery}px`}} id="gallery">
        <img src ="https://techcrunch.com/wp-content/uploads/2019/06/songe-dave-barbershop.jpg?w=730&crop=1"/>
        <img src ="https://avatars.mds.yandex.net/get-altay/2004078/2a0000016f1a2fcdb8668a715260e6e09956/XXL"/>
        <img src ="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/to3pHsmq9xGEvp9F2thJiOq221c=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/UKX5C3AHQ4I6TEW3FHT2VWB2IU.jpg"/>
        <img src ="https://i1.wp.com/provladimir.ru/wp-content/uploads/2019/08/20190813_top_gan-18.jpg"/>
        <img src ="https://static1-repo.aif.ru/1/8e/662079/17d7306e264ac2fed78642a2784e73f4.jpg"/>
        <img src ="https://media-cdn.tripadvisor.com/media/photo-s/12/41/7b/99/welcome-to-the-barbershop.jpg"/>
      </div>

      <ParallaxProvider>
      <Parallax className={styles.contact_parallax} y={[-40, 65]}>
      <div className={styles.contact} id="contact">
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
