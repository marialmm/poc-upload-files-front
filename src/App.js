import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import GlobalStyle from "./assets/GlobalStyles";
import Images from "./components/Images";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/images" element={<Images />} />
            </Routes>
        </BrowserRouter>
    );
}
