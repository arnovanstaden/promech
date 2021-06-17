import Link from "next/link";
import ClassNames from "classnames";

// styles
import styles from "./button.module.scss";

interface IProps {
    link?: string;
    children: string;
    hollow?: boolean;
    click?: any;
}

const Button = ({ link, children, hollow, click, }: IProps) => {

    const classes = ClassNames(
        styles.button,
        hollow && styles.hollow,
    )

    const Inner = () => {
        return (
            <button className={classes} onClick={click ? click : null}>
                {children}
            </button>
        )
    }

    if (link) {
        return (
            <Link href={link} >
                <a>
                    <Inner />
                </a>
            </Link >
        )
    }

    return <Inner />
}

export default Button
