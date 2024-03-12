import { Suspense, lazy } from "react";
import LoadingScreen from "./LoadingScreen.jsx";
const VideoGallary = lazy(() => import("../components/VideoGallary.jsx"));

function HomePage() {
  return (
    <Suspense fallback={LoadingScreen}>
      <VideoGallary />
    </Suspense>
  );
}

export default HomePage;
