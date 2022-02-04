import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../src/component/Navbar";
import Content from "./component/Content";
import Footer from "./component/Footer";
import ContentTB from "./component/ContentTB";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ContentTB />
            <Content />
            <ContentTB />
            <Content />
            <ContentTB />
            <Footer />
        </div>
    );
}

export default App;
