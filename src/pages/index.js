import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"
import { ParallaxProvider, Parallax } from "react-scroll-parallax";


export default function Home() {

  return (
    <div>
      <div className={styles.topmenu}>
        <ul>
          <li><Link to = '/'><div className={styles.title}><p>Usiki</p></div></Link></li>
          <li><Link to = '#price'><p>Услуги</p></Link></li>
          <li><Link to = '/'><p>Контакты</p></Link></li>
        </ul>
      </div>
      <ParallaxProvider className={styles.img_1_parallax} y={[-20, 20]}>
      <img src ="https://static1-repo.aif.ru/1/8e/662079/17d7306e264ac2fed78642a2784e73f4.jpg" className = {styles.img_1} alt="image"/>
      </ParallaxProvider>
      <div className={styles.text_1}>
        Мы вынуждены отталкиваться от того, что синтетическое тестирование говорит о возможностях укрепления моральных ценностей. Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы формируют глобальную экономическую сеть и при этом - заблокированы в рамках своих собственных рациональных ограничений. Таким образом, социально-экономическое развитие напрямую зависит от как самодостаточных, так и внешне зависимых концептуальных   решений. Лишь активно развивающиеся страны третьего мира являются только методом политического участия и объединены в целые кластеры себе подобных. Мы вынуждены отталкиваться от того, что высокое качество позиционных исследований способствует подготовке и реализации глубокомысленных рассуждений.
      </div>
      <div className={styles.price_list} id="price">
        <div className={styles.price}>
          <ul>
            <li><div className={styles.price_title}><p>Цены</p></div></li>
            <li><p>Мужская</p></li>
            <li><p>Женская</p></li>
            <li><p>Детская</p></li>
          </ul>
        </div>
      </div>
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyAPhcq3V_wJvwhQtCLnfb4QnQinuSOAAn3A&usqp=CAU" className = {styles.img_2}/>
    </div>
  )

}
