import Link from "next/link";
import { useRouter } from 'next/router';

// Components
import Components from "../Library/Container/Container"

// Styles
import styles from "./header.module.scss";

export default function Header() {
    const router = useRouter();

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
                        <li className={router.pathname == "/" ? styles.active : ""}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/about" ? styles.active : ""}>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services" ? styles.active : ""}>
                            <Link href="/services">
                                <a>Services</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/projects" ? styles.active : ""}>
                            <Link href="/projects">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/contact" ? styles.active : ""}>
                            <Link href="/contact">
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
