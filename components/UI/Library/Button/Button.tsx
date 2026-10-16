import Link from "next/link";
import ClassNames from "classnames";

// styles
import styles from "./button.module.scss";

interface IProps {
  link?: string;
  children: string;
  hollow?: boolean;
  click?: any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({ link, children, hollow, click, type = "button", disabled = false }: IProps) => {

  const classes = ClassNames(
    styles.button,
    hollow && styles.hollow,
  )

  const Inner = () => {
    return (
      <button className={classes} onClick={click ? click : null} type={type} disabled={disabled}>
        {children}
      </button>
    )
  }

  if (link) {
    return (
      <Link href={link} >
        <Inner />
      </Link >
    )
  }

  return <Inner />
}

export default Button
