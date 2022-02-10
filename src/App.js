import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./component/Navbar/Navbar";
import ContentTB from "./component/ContenTB/ContentTB";
import Content from "./component/Content/Content";
import Testimoni from "./component/Testimoni/Testimoni";
import Footer from "./component/Footer/Footer";
import Product from "./component/Product/Product";

function App() {
    return (
        <div className="App">
            <Navbar />
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
