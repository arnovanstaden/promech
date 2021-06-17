import Link from "next/link";

// Styles
import styles from "./project.module.scss";

const Project = () => {
    return (
        <div className={styles.project}>
            <div className={styles.content}>
                <img src="" alt="" />
                <h4>Jonkers View Medical Facility</h4>
                <h5>HVAC, Fire, Wet Services</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                <hr />
            </div>
            <Link href="/">
                <a>
                    Explore
                    <i className="icon-arrow_right"></i>
                </a>
            </Link>
        </div>
    )
}

export default Project
