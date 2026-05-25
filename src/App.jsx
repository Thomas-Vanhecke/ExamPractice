import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamHub from "./pages/ExamHub";
import NetworkExamPage from "./pages/NetworkExamPage";
import Programming2Page from "./pages/Programming2Page";
import BackendPage from "./pages/BackendPage";
import ITBusinessPage from "./pages/ITBusinessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"             element={<ExamHub />} />
        <Route path="/networks"     element={<NetworkExamPage />} />
        <Route path="/programming2" element={<Programming2Page />} />
        <Route path="/backend"      element={<BackendPage />} />
        <Route path="/itbusiness"   element={<ITBusinessPage />} />
      </Routes>
    </BrowserRouter>
  );
}