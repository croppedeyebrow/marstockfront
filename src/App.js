import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./utils/style/GlobalStyle";
import MainPage from "./main/MainPage";
import FormPage from "./form/FormPage";
import SigninPage from "./sign/SigninPage";
import SignupPage from "./sign/SignupPage";
import FindIdPage from "./sign/FindIdPage";
import FindPwPage from "./sign/FindPwPage";
import StockInfoPage from "./stock/StockInfoPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/stockInfo" element={<StockInfoPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/findid" element={<FindIdPage />} />
            <Route path="/findpw" element={<FindPwPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
