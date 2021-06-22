import ClassNames from "classnames";

// Components
import Components from "../Container/Container"

// Styles
import styles from "./section.module.scss";

interface IProps {
    children: React.ReactNode;
    heading?: {
        title: string;
        subtitle: string;
    };
    colour?: "white" | "grey" | "dark";
    className?: string;
    id?: string
}

const Section = ({ children, colour = "white", heading, className, id }: IProps) => {
    const classes = ClassNames(
        className,
        styles.section,
        styles[colour]
    )

    return (
        <section className={classes} id={id}>
            <Components>
                {heading &&
                    <div className={styles.heading}>
                        <h2>{heading.title}</h2>
                        <h3>{heading.subtitle}</h3>
                    </div>
                }
                {children}
            </Components>
        </section >
    )
}

export default Section
