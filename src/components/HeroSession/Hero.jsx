import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils.js"

const Hero = () => {

    return (
        <div>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Hi, I'm Richmond</h1>
                    <p className={styles.description}>I'm an aspiring full-stack web developer with 2 years of experinece using React and Node Js. Reach out to me if you'd want my service!</p>
                    <a href="mailto:richmondandoh00@gmail.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                </div>
                <img src={getImageUrl("Passport.png")} alt="My profile image" 
                  className={styles.heroImg}
                />
                <div className={styles.topBlur}></div>
                <div className={styles.bottomBlur}></div>
            </section>
        </div>
    )
}

export default Hero;