import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/common/error-boundary";
import LoadingSpinner from "./components/common/loading-spinner";
import Header from "./components/layouts/header";
import Home from "./page/home";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
