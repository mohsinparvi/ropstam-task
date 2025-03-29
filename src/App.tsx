import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, LoadingSpinner } from "./components/common";
import Header from "./components/layouts/header";
const Home = lazy(() => import("./page/home"));
import Footer from "./components/layouts/footer";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
