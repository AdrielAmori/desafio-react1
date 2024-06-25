import Button from '../elements/Button'
import styles from './Presentation.module.css'

function Presentation(){
  return(
    <div className={styles.presentation}>
      <h1>
        Olá, eu sou Adriel <br/>
        Desenvolvedor Full-Stack
      </h1>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/>
        consequat sunt nostrud amet.
      </p>
      <Button text="Download resumo" link="https://github.com/AdrielAmori"/>
    </div>
  )
}

export default Presentation;
