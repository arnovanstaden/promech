// Components
import Page from "../components/UI/Page/Page";

// Styles
import styles from "../styles/pages/index.module.scss";

const Home = () => {
  return (
    <Page
      head={{
        title: "ProMech Mechanical Engineering",
        description: "FIX THIS",
        canonical: "/",
      }}
      className={styles.home}
    >
      <div className={styles.landing}>

      </div>
    </Page>
  )
}

export default Home

