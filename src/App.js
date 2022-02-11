import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./component/Navbar/Navbar";
import ContentTB from "./component/ContenTB/ContentTB";
import Content from "./component/Content/Content";
import Testimoni from "./component/Testimoni/Testimoni";
import Footer from "./component/Footer/Footer";
import Product from "./component/Product/Product";
import { WA } from "./component/Plugin/Plugin";
// import ScrollToTop from "react-scroll-to-top";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="plugin">
                {/* <ScrollToTop smooth color="#729b10" /> */}
                <WA />
            </div>
            <ContentTB />
            <Content />
            <Product />
            <Testimoni />
            <Content />

            {/* <div className="bg-content2"></div> */}
            <Footer />
        </div>
    );
}

export default App;
