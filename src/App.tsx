import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, LoadingSpinner } from "./components/common";
const Header = lazy(() => import("./components/layouts/header"));
const Home = lazy(() => import("./page/home"));
const Footer = lazy(() => import("./components/layouts/footer"));

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
