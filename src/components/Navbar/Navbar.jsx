import { getImageUrl } from "../../utils"
import styles from "./Navbar.module.css"
import { useState } from "react"

const Navbar = () => {
    const [ menuOpen, setMenuOpen ] = useState(false)
    return (
        <div>
            <nav className={styles.navbar}>
                <a href="" className={styles.title}>Richy</a>

                <div className={styles.menu}>
                    <img src={menuOpen ? getImageUrl("closeIcon.png") : getImageUrl("menuIcon.png")} alt="" 
                      className={styles.menuBtn}
                      onClick={() => setMenuOpen(!menuOpen)}
                    />

                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                      onClick={() => setMenuOpen(false)}
                    >
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#about">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar