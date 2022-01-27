import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../src/component/Navbar";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Content />
            <Content />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
