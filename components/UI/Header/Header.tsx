import Link from "next/link";
import { useRouter } from 'next/router';
import { useRef, useEffect } from "react";

// Components
import Components from "../Library/Container/Container"

// Styles
import styles from "./header.module.scss";

export default function Header() {
  const router = useRouter();
  const mobileNavRef = useRef() as React.MutableRefObject<HTMLElement>;;

  // Handlers
  const handleNavToggle = () => {
    mobileNavRef.current.classList.toggle(styles.open)
  }

  const handleNavClose = () => {
    mobileNavRef.current.classList.remove(styles.open)
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleNavClose)
  })

  const Menu = () => {
    return (
      <ul className={styles.menu}>
        <li className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={router.pathname == "/about" ? styles.active : ""}>
          <Link href="/about">
            About
          </Link>
        </li>
        <li className={router.pathname == "/services" ? styles.active : ""}>
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className={router.pathname == "/projects" ? styles.active : ""}>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? styles.active : ""}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <header className={styles.header}>
      <Components>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/images/branding/Logo.svg" alt="" />
            </Link>
          </div>
          <Menu />
          <div className={styles.contact}>
            <div>
              <i className="icon-phone"></i>
              <a href="tel:+27829254614">+27 82 925 4614</a>
            </div>
          </div>
          <i className="icon-menu" onClick={handleNavToggle}></i>
        </nav>
        <nav className={styles.mobileNav} ref={mobileNavRef}>
          <i className="icon-clear" onClick={handleNavToggle}></i>
          <Menu />
        </nav>
      </Components>
    </header >
  )
}
