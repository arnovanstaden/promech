import { IProject } from "../../../utils/types";

// Components
import Project from "../Project/Project"

// Styles
import styles from "./grid.module.scss";

interface IProps {
    projects: IProject[]
    home?: boolean
}

const ProjectGrid = ({ projects, home }: IProps) => {

    // if (featured) {
    //     // FIX THIS - CAROUSEL
    //     return (
    //         projects.map((project, index) => (
    //             <Project {...project} key={index} />
    //         ))
    //     )
    // }

    return (
        <div className={styles.grid}>
            {projects.map((project, index) => (
                <Project {...project} key={index} />
            ))}
        </div>
    )
}

export default ProjectGrid
