import { Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./components/common/error-boundary";
import LoadingSpinner from "./components/common/loading-spinner";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <h1 className="text-3xl font-bold bg-pink-200 underline">
            Vite + React
          </h1>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
