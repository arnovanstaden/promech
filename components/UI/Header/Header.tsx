import Link from "next/link";

// Components
import Components from "../Library/Container/Container"

// Styles
import styles from "./header.module.scss";

export default function Header() {

    return (
        <header className={styles.header}>
            <Components>
                <nav>
                    <div className={styles.logo}>
                        <Link href="/">
                            <a>
                                <img src="/images/branding/Logo.svg" alt="" />
                            </a>
                        </Link>
                    </div>
                    <ul className={styles.menu}>
                        <li className={styles.active}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.contact}>
                        <div>
                            <i className="icon-phone"></i>
                            <a href="tel:+27829254614">+27 82 925 4614</a>
                        </div>
                    </div>
                </nav>
            </Components>
        </header >
    )
}
