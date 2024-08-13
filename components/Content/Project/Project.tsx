import Link from "next/link";
import { IProject } from "../../../utils/types";

// Styles
import styles from "./project.module.scss";
import Image from 'next/image';

const Project = (project: IProject) => {

  // Data Manipulation
  const services = project.services.map(service => service.category)

  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <Image
          src={project.thumbnail.asset.url}
          alt={project.title}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h4>{project.title}</h4>
        <h5>{services.join(", ")}</h5>
        <p>{project.description}</p>
        <hr />
      </div>
      <Link href={`/projects/${project.slug.current}`}>
        Explore
        <i className="icon-arrow_right"></i>
      </Link>
    </div>
  )
}

export default Project
