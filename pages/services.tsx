import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";
import { IService } from "../utils/types";

// Components
import Page from "../components/UI/Library/Page/Page";
import Section from "../components/UI/Library/Section/Section"
import ServicesGrid from "../components/Content/Services/Services"

// Styles
import styles from "../styles/pages/services.module.scss";

const Services = ({ services }: { services: IService[] }) => {
  return (
    <Page
      head={{
        title: "Services | ProMech",
        description: "FIX THIS",
        canonical: "/",
      }}
      className={styles.services}
    >
      <Section
        className={styles.services}
        heading={{
          title: "Our Services",
          subtitle: "Comprehensive & Value-Driven"
        }}
      >

        <ServicesGrid services={services} />

      </Section>
    </Page>
  )
}

export default Services


export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await await client.query({
    query: gql`
        query {
          allService {
            category
            services
          }
          }
      `,
  });

  return {
    props: {
      services: data.allService
    }
  }
}