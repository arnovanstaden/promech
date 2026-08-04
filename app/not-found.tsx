// Components
import Layout from "../components/Layout/Layout";
import Page from "../components/UI/Library/Page/Page";
import Section from "../components/UI/Library/Section/Section"
import { buildMetadata } from "../utils/metadata";

// Styles & Icons
import '../styles/global.scss'
import "../assets/icons/style.css"
import "typeface-roboto"
import "typeface-montserrat"

import styles from "../styles/pages/404.module.scss";

export const metadata = buildMetadata({
  title: "Page Not Found | ProMech",
  description: "Page Not Found",
  canonical: "/404",
  robots: false,
})

const NotFound = () => {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Page className={styles.pageNotFound}>
            <Section className={styles.section}>
              <div className={styles.error}>
                <h2>4</h2>
                <img src="/images/branding/LogoMark.svg" alt="ProMech Logomark" />
                <h2>4</h2>
              </div>
              <h3>The page you are looking for does not exist...</h3>
            </Section>
          </Page>
        </Layout>
      </body>
    </html>
  )
}

export default NotFound
