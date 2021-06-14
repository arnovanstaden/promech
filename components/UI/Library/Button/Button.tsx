import Link from "next/link";
import ClassNames from "classnames";

// styles
import styles from "./button.module.scss";

interface IProps {
    link?: string;
    text: string;
    hollow?: boolean;
    click?: any;
}

const Button = ({ link, text, hollow, click }: IProps) => {

    const classes = ClassNames(
        styles.button,
        hollow ? styles.hollow : null,
    )

    const Inner = () => {
        return (
            <button className={classes} onClick={click ? click : null}>
                {text}
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
