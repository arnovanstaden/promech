// Components
import Project from "../Project/Project"

// Styles
import styles from "./grid.module.scss";

const ProjectGrid = () => {
    return (
        <div className={styles.grid}>
            <Project />
            <Project />
            <Project />
        </div>
    )
}

export default ProjectGrid
