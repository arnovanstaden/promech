import Link from "next/link";
import { useRouter } from 'next/router'

// Components
import Container from "../Library/Container/Container"

// Styles
import styles from "./footer.module.scss";

export default function Footer() {
    const router = useRouter();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <img src="/images/branding/Logo-White.svg" alt="PR Engineering Logo" />
                        <p>Promech Engineering is a dynamic and experienced professional mechanical consulting engineering firm with the capacity to provide comprehensive and value-driven design and project management services.</p>
                        <div className={styles.copy}>
                            <p>© {currentYear} - Promech Engineering LTD.</p>
                            <p>Design &amp; Development by <a target="blank" href="https://webdacity.dev">Webdacity</a></p>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        <h5>Services</h5>
                        <ul className={`${styles.nav} ${styles.list}`}>
                            <li>
                                <Link href="/services">
                                    HVAC
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Refrigeration
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Pipe Gasses
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Wet Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Extraction Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Lifting Equipment
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Fire Design and Certification
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Plant Engineering
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.menu}>
                        <h5>Company</h5>
                        <ul className={`${styles.nav} ${styles.list}`}>
                            <li>
                                <Link href="/about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/about#values">
                                    Our Values
                                </Link>
                            </li>
                            <li>
                                <Link href="/about#memberships">
                                    Our Memberships
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    Past Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
