import { Suspense, lazy } from "react";
import LoadingScreen from "./LoadingScreen.jsx";
const SubscriptionData = lazy(() =>
  import("../components/SubscriptionData.jsx")
);

function SubscriptionsPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SubscriptionData />;
    </Suspense>
  );
}

export default SubscriptionsPage;
