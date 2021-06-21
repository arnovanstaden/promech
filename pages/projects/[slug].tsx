import { client } from "../../utils/apollo-client";
import { gql } from "@apollo/client";
import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from "react";
import { IProject } from "../../utils/types";

// Components
import Page from "../../components/UI/Library/Page/Page";
import Section from "../../components/UI/Library/Section/Section"
import Container from "../../components/UI/Library/Container/Container"
import NextImage from "../../components/UI/Library/NextImage/NextImage"

// Styles
import styles from "../../styles/pages/projects/[slug].module.scss";

const Project = ({ project }: { project: IProject }) => {
    return (
        <Page
            head={{
                title: `${project.title} | PR Engineering`,
                description: `${project.description}`,
                canonical: `/project/${project.slug}`,
            }}
            className={styles.project}
        >
            <section className={styles.landing}>
                <div className={styles.image}>
                    <NextImage
                        src={project.thumbnail.asset.url}
                        alt={project.title}
                        width={1920}
                        background
                        priority
                    />
                </div>
                <div className={styles.overlay}>
                    <div className={styles.content}>
                        <div className={styles.content}>
                            <h1>{project.title}</h1>
                            <hr />
                            <p>
                                <i className="icon-room"></i>
                                {project.location}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Section
                className={styles.details}
            >
                <div className={styles.grid}>
                    <div className={styles.stats}>
                        <ul>
                            <li>
                                <span>Scope:</span>{project.services.join(", ")}
                            </li>
                            <li>
                                <span>Date:</span>{project.year}
                            </li>
                            <li>
                                <span>Location:</span>{project.location}
                            </li>
                        </ul>
                    </div>
                    <div className={styles.description}>
                        <p>{project.description}</p>
                    </div>
                </div>
            </Section>

            <Section
                className={styles.gallery}
            >
                <div className={styles.grid}>
                    {project.images.map((image, index) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.image}>
                                <div className={styles.overlay}></div>
                                <NextImage
                                    src={image.asset.url}
                                    alt={project.title}
                                    width={400}
                                    background
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </Page>
    )
}

export default Project

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // FIX THIS - GraphQL Vars
    const { data } = await client.query({
        query: gql`
          query GetProjects {
            allProject {
                title
                client
                location
                description
                home
                year
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
                images {
                    asset {
                        url
                        }
                }
            }
            }
        `,
    });

    const project = data.allProject.filter(project => project.slug.current === params.slug)[0]

    return {
        props: {
            project,
        },
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
          query GetProjects {
            allProject {
                slug {
                current
                }
            }
          }
        `,
    });

    const paths = data.allProject.map((project) => ({
        params: {
            slug: project.slug.current
        },
    }))

    return {
        paths,
        fallback: false
    }

}