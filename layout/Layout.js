import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";

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