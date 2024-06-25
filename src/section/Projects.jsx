import styles from './Projects.module.css'

import Card from '../elements/Card'
import img1 from '../image/img1.svg'
import img2 from '../image/img2.svg'
import img3 from '../image/img3.svg'

function Projects() {
  return(
    <div className={styles.projects} id='projeto'>
      <h1>Projetos</h1>
      <div className={styles.card}>
        <div>
          <Card
            img={img1}
            title="Designing Dashboards"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
        <hr/>
        <div>
          <Card
            img={img2}
            title="Vibrant Portraits of 2020"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
        <hr/>
        <div>
          <Card
            img={img3}
            title="36 Days of Malayalam type"
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Projects;
