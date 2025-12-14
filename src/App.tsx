import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Home/HomePage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="Muhammad Aulia Rahman" />

                <HomePage />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
