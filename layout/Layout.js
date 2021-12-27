import HeaderBar from "./header/HeaderBar";
import FooterBar from "./footer/FooterBar";

const Layout = ( {children} ) => {
    return (
        <>
            <HeaderBar></HeaderBar>
            { children }
            <FooterBar></FooterBar>
        </>
    );
}

export default Layout;