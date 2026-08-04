// Styles
import styles from "./banner.module.scss";

const logos = [
    "beacon_island",
    "build_it",
    "cavali",
    "diva",
    "komatsu",
    "mpact",
    "neopharm",
    "radisson",
    "spescare",
    "steinhoff",
    "unitrans",
];

const ClientBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.track}>
                {[0, 1].map((copy) => (
                    <div className={styles.inner} key={copy} aria-hidden={copy === 1}>
                        {logos.map((logo) => (
                            <div key={logo}>
                                <img src={`/images/other/clients/${logo}.png`} alt="" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientBanner
