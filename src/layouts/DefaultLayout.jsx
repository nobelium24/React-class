import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DefaultLayout = ({children})=> {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}

export default DefaultLayout;