import React, { Component } from "react";
import { IProject } from "../../../utils/types";
import Slider from "react-slick";


// Components
import Project from "../Project/Project"

// Styles
import styles from "./grid.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
  projects: IProject[]
  home?: boolean
}

const ProjectGrid = ({ projects, home }: IProps) => {
  class Slick extends Component {

    render() {
      const settings = {
        customPaging: (i) => {
          return (
            <a className={styles.pageing}>
            </a>
          );
        },
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              infinite: true,
              arrows: false
            }
          }
        ]
      };
      return (
        <Slider {...settings} className={styles.slider}>
          {projects.map((project, index) => (
            project.home && <Project {...project} key={index} />
          ))}
        </Slider>
      );
    }
  }


  if (home) {
    return <Slick />
  }

  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  )
}

export default ProjectGrid
