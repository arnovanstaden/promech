import Link from "next/link";
import { IService } from "../../../utils/types";

// Styles
import styles from "./services.module.scss"

interface IProps {
    services: IService[]
}

const Services = ({ services }: IProps) => {

    return (
        <div className={styles.grid}>
            {services.map((service, index) => (
                <Link href={`/services#${service.category.replace(/ /g, "-").toLowerCase()}`}>
                    <a className={styles.item} key={index}>
                        <h5>{service.category}</h5>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Services
