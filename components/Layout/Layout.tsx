import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
