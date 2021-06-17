import { Parallax } from 'react-parallax';
import ClassNames from "classnames";

// Components
import Container from "../../UI/Library/Container/Container"

// Styles
import styles from "./banner.module.scss"

const Banner = () => {

    return (
        <div >
            <Parallax strength={200} blur={{ min: -10, max: 15 }} bgImage="/images/pages/home/banner.png" bgImageAlt="Engineering Drawings">
                <Container>
                    <div className={styles.content}>
                        <div>
                            <h4>45</h4>
                            <p>Successful <br /> Projects <br /> Completed</p>
                        </div>
                        <div>
                            <h4>55</h4>
                            <p>Years Collective <br /> Team Experience</p>
                        </div>
                    </div>
                </Container>
            </Parallax>
        </div >
    )
}

export default Banner
