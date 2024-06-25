import styles from './Card.module.css'

function Card ({img, title, text}) {
  return(
    <div className={styles.card}>
      <img src={img} alt="Error"/>
      <div>
        <h3>{title}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>

  )
}

export default Card
