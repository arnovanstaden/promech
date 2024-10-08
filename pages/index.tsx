import Link from "next/link"
import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";
import { IProject, IService } from "../utils/types";

// Components
import Page from "../components/UI/Library/Page/Page";
import Container from "../components/UI/Library/Container/Container";
import Button from "../components/UI/Library/Button/Button";
import Section from "../components/UI/Library/Section/Section"
import ProjectGrid from "../components/Content/ProjectGrid/ProjectGrid"
import Contact from "../components/Content/Contact/Contact"
import ClientBanner from "../components/Content/ClientBanner/ClientBanner"
import StatsBanner from "../components/Content/StatsBanner/StatsBanner"
import ServicesGrid from "../components/Content/Services/Services"

// Styles
import styles from "../styles/pages/index.module.scss";
import Image from 'next/image';


interface IProps {
  projects: IProject[]
  services: IService[]
}

const Home = ({ projects, services }: IProps) => {

  // Subcomponents
  const LandingImage = () => {
    return (
      <div className={styles.imageContainer}>
        <Image
          src="/images/pages/home/landing.png"
          alt="Gears"
          priority
          fill
          className={styles.image}
        />
        <div className={styles.logo}>
          <div></div>
          <img src="/images/branding/LogoMark.svg" alt="" />
        </div>
      </div>
    )
  }
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
        <Container>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>
                Professional Mechanical
                Engineering Services
              </h1>
              <p>Promech Engineering is a dynamic and experienced consulting engineering firm with the capacity to provide comprehensive and value-driven design and project management services.</p>
              <div className={styles.buttons}>
                <Button link="/services">
                  Our Services
                </Button>
                <Button link="/projects"
                  hollow>
                  Past Projects
                </Button>
              </div>
            </div>
            <LandingImage />
          </div>
        </Container>
      </div>

      <Section
        className={styles.about}
        heading={{
          title: "We are a Dynamic and Experienced Consulting Engineering Firm.",
          subtitle: "Professional Mechanical Engineering Services"
        }}
        colour="grey"
      >
        <div className={styles.grid}>
          <Link href="/about">
            <div className={styles.item}>
              <img src="/images/pages/home/about-icon-1.svg" alt="Human Face and Gear Icon" />
              <h4>Who We Are</h4>
              <hr />
              <p>Learn more about who we are, our company &amp; values and our professional memberships.</p>
              <button>
                Read More
                <i className="icon-arrow_right"></i>
              </button>
            </div>
          </Link>
          <Link href="/services">
            <div className={styles.item}>
              <img src="/images/pages/home/about-icon-2.svg" alt="Settings Icon" />
              <h4>What We Do</h4>
              <hr />
              <p>Learn more about comprehensive and value-driven design and project management services.</p>
              <button>
                Read More
                <i className="icon-arrow_right"></i>
              </button>
            </div>
          </Link>
          <Link href="/projects">
            <div className={styles.item}>
              <img src="/images/pages/home/about-icon-3.svg" alt="Factory Icon" />
              <h4>What We’ve Done</h4>
              <hr />
              <p>Take a look at the successful projects we've contributed our unique value to in the past.</p>
              <button>
                Read More
                <i className="icon-arrow_right"></i>
              </button>
            </div>
          </Link>
        </div>
      </Section>

      <Section
        className={styles.services}
        heading={{
          title: "What We Do",
          subtitle: "Comprehensive & Value-Driven"
        }}
      >
        <ServicesGrid services={services} />
        <div className={styles.button}>
          <Button link="/services">
            View More
          </Button>
        </div>
      </Section>

      <ClientBanner />

      <Section
        className={styles.projects}
        heading={{
          title: "Our Recent Projects",
          subtitle: "What We’ve Done"
        }}
        colour="dark"
      >
        <ProjectGrid projects={projects} home />

        <div className={styles.button}>
          <Button link="/projects"
            hollow>
            View Past Projects
          </Button>
        </div>
      </Section>

      <StatsBanner />

      <Section
        className={styles.contact}
        heading={{
          title: "Have a burning question about your next project?",
          subtitle: "Get in Touch"
        }}
        colour="grey"
      >
        <Contact />
      </Section>
    </Page>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await await client.query({
    query: gql`
        query {
          allProject {
            title
            client
            location
            description
            home
            services {
              category
            }
            slug {
              current
            }
            thumbnail {
              asset {
                url
              }
            }
          }
          allService {
            category
            services
          }
          }
      `,
  });

  return {
    props: {
      projects: data.allProject,
      services: data.allService
    }
  }
}