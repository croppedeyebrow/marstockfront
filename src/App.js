import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./utils/style/GlobalStyle";
import MainPage from "./main/MainPage";
import FormPage from "./form/FormPage";
import SigninPage from "./sign/SigninPage";
import SignupPage from "./sign/SignupPage";
import FindIdPage from "./sign/FindIdPage";
import FindPwPage from "./sign/FindPwPage";
import StockPage from "./stock/StockPage";
import StockInfoPage from "./stock/StockInfoPage";
import StockListPage from "./stock/StockListPage";
import StockIndexPage from "./stock/StockIndexPage";
import MyPage from "./my/MyPage";
import AdminPage from "./admin/AdminPage";
import NewsPage from "./news/NewsPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/stockpage" element={<StockPage />} />

            <Route path="/stockInfo/:name" element={<StockInfoPage />} />
            <Route path="/stockList" element={<StockListPage />} />
            <Route path="/stockIndex" element={<StockIndexPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/news" element={<NewsPage />} />

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
