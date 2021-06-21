import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";
import { IService } from "../utils/types";

// Components
import Page from "../components/UI/Library/Page/Page";
import Section from "../components/UI/Library/Section/Section";
import Container from "../components/UI/Library/Container/Container";
import NextImage from "../components/UI/Library/NextImage/NextImage";
import ServicesGrid from "../components/Content/Services/Services";


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

      <section className={styles.list}>
        <Container>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div className={styles.service} key={index} id={`${service.category.replace(/ /g, "-").toLowerCase()}`}>
                <div className={styles.image}>
                  <NextImage
                    background
                    width={600}
                    src={service.image.asset.url}
                    alt={service.category}
                    align='Center'
                  />
                </div>
                <div className={styles.content}>
                  <h4>{service.category}</h4>
                  <hr />
                  <ul>
                    {service.services.map((item, index) => (
                      <li key={index}>
                        <i className="icon-block"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
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
            image {
              asset {
                url
              }
            }
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