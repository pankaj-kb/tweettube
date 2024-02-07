import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";
import VideoGallary from "../components/VideoGallary";

function HomePage() {
  return (
    <Suspense fallback={LoadingScreen}>
      <VideoGallary />
    </Suspense>
  );
}

export default HomePage;
