import Link from "next/link";
import { IProject } from "../../../utils/types";

// Components
import NextImage from "../../UI/Library/NextImage/NextImage";


// Styles
import styles from "./project.module.scss";

const Project = (project: IProject) => {

    // Data Manipulation
    const services = project.services.map(service => service.category)

    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <NextImage
                    src={project.thumbnail.asset.url}
                    alt={project.title}
                    width={600}
                />
            </div>
            <div className={styles.content}>
                <h4>{project.title}</h4>
                <h5>{services.join(", ")}</h5>
                <p>{project.description}</p>
                <hr />
            </div>
            <Link href={`/projects/${project.slug.current}`}>
                <a>
                    Explore
                    <i className="icon-arrow_right"></i>
                </a>
            </Link>
        </div>
    )
}

export default Project
