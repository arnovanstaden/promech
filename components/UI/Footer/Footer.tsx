import Link from "next/link";
import { useRouter } from 'next/router'

// Components
import Container from "../Library/Container/Container"

// Styles
import styles from "./footer.module.scss";

export default function Footer() {
    const router = useRouter();
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={`${styles.grid} ${styles.content}`}>
                    <Link href="/">
                        <a className={styles.logo}>
                            <img src="/images/logos/logo-white-text.png" alt="PR Engineering Logo" />
                        </a>
                    </Link>
                    <div className={styles.top}>
                        <ul className={`${styles.nav} ${styles.list}`}>
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
                        <ul className={`${styles.contact} ${styles.list}`}>
                            <li>
                                <i className="icon-room"></i>
                                <a href="https://g.page/Fire-Engineers?share" target="blank">
                                    Stellenbosch, Western Cape
                                </a>
                            </li>
                            <li>
                                <i className="icon-email"></i>
                                <a href="mailto:info@engpr.com">
                                    info@engpr.com
                                    </a>
                            </li>
                            <li>
                                <i className="icon-phone"></i>
                                <a href="tel:0210125393">
                                    021 012 5393
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.grid} ${styles.bottom}`}>
                    <div className={styles.social}>
                        <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
                            <i className="icon-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
                            <i className="icon-linkedin"></i>
                        </a>
                    </div>
                    <p>© {currentYear} - PR Engineering Africa (PTY) LTD.</p>
                    <p>Design &amp; Development by <a target="blank" href="https://webdacity.dev">Webdacity</a></p>
                </div>
            </Container>
        </footer>
    )
}
