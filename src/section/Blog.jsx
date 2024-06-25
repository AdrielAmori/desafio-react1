import styles from './Blog.module.css'

function Blog() {
  return(
    <div className={styles.blog} id='blog'>
      <h2>Blog</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h5>
            Making a design system from <br/>
            scratch
          </h5>
          <span> 12 Feb 2030    Design, Pattern</span>
          <p>
            Amet minim mollit non deserunt ullamco est sit <br/> aliqua dolor do amet sint. Velit officia consequat <br/> duis enim velit mollit.Exercitation veniam <br/> consequat sunt nostrud amet.
          </p>
        </div>
        <div className={styles.card}>
          <h5>
          Creating pixel perfect icons in <br/>
          Figma
          </h5>
          <p> 12 Feb 2030    Figma, Icon Design</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit <br/> aliqua dolor do amet sint. Velit officia consequat <br/> duis enim velit mollit.Exercitation veniam <br/> consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog;
