// Components
import Page from "../components/UI/Library/Page/Page";
import Section from "../components/UI/Library/Section/Section"

// Styles
import styles from "../styles/pages/404.module.scss";

const PageNotFound = () => {
    return (
        <Page
            head={{
                title: "Page Not Found | ProMech",
                description: "Page Not Found",
                canonical: "/404",
                robots: false
            }}
            className={styles.pageNotFound}
        >
            <Section className={styles.section}>
                <div className={styles.error}>
                    <h2>4</h2>
                    <img src="/images/branding/LogoMark.svg" alt="ProMech Logomark" />
                    <h2>4</h2>
                </div>
                <h3>The page you are looking for does not exist...</h3>
            </Section>
        </Page>
    )
}

export default PageNotFound
