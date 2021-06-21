import Ticker from "react-ticker";

// Styles
import styles from "./banner.module.scss";

const ClientBanner = () => {
    return (
        <div className={styles.banner}>
            <Ticker speed={2}>
                {({ index }) => (
                    <div className={styles.inner}>
                        <div>
                            <img src="/images/other/clients/beacon_island.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/build_it.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/cavali.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/diva.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/komatsu.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/mpact.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/neopharm.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/radisson.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/spescare.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/steinhoff.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/other/clients/unitrans.png" alt="" />
                        </div>
                    </div>
                )}
            </Ticker>
        </div>
    )
}

export default ClientBanner
