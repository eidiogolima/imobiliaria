import React from 'react'
import styles from '../../CSS/Utilits/SubHeader.module.css';


function SubHeader({title, cor, paragraph, paragraphColor, fontColor, fontColorParagraph, padding, border}) {
  return (
    <div className={styles.subHeader}>
      <h1 style={{background:`${cor}`, color:`${fontColor}`}} className='font-1-xl'>{title}</h1>
      <p className='font-2-xs' style={{background:`${paragraphColor}`, color:`${fontColorParagraph}`, padding:`${padding}`, border:`${border}`}}>{paragraph}</p>
    </div>
  )
}

export default SubHeader