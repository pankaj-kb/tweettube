import { Suspense } from "react";
import SubscriptionData from "../components/SubscriptionData";
import LoadingScreen from "./LoadingScreen";
function SubscriptionsPage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <SubscriptionData />;
    </Suspense>
  );
}

export default SubscriptionsPage;
