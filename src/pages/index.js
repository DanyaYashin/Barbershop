import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"

const simpleParallax = require ('simple-parallax-js');

var image = document.getElementsByClassName('img_1');
new simpleParallax(image, {
scale: 1.5
});

export default function Home() {

  return (

    <div>
      <div className={styles.topmenu}>
        <ul>
          <li><Link to = '/'><div className={styles.title}><p>Usiki</p></div></Link></li>
          <li><Link to = '/'><p>Услуги</p></Link></li>
          <li><Link to = '/'><p>Контакты</p></Link></li>
        </ul>
      </div>
      <img src ="https://static1-repo.aif.ru/1/8e/662079/17d7306e264ac2fed78642a2784e73f4.jpg" className = {styles.img_1} alt="image"/>
      <div className={styles.text_1}>
        Мы вынуждены отталкиваться от того, что синтетическое тестирование говорит о возможностях укрепления моральных ценностей. Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы формируют глобальную экономическую сеть и при этом - заблокированы в рамках своих собственных рациональных ограничений. Таким образом, социально-экономическое развитие напрямую зависит от как самодостаточных, так и внешне зависимых концептуальных   решений. Лишь активно развивающиеся страны третьего мира являются только методом политического участия и объединены в целые кластеры себе подобных. Мы вынуждены отталкиваться от того, что высокое качество позиционных исследований способствует подготовке и реализации глубокомысленных рассуждений.
      </div>
    </div>


  )

}
