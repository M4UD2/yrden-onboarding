import OnboardingExperienceRedesign from "./components/OnboardingExperienceRedesign";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  return (
    <>
      <OnboardingExperienceRedesign />
      <Toaster position="top-right" richColors />
    </>
  );
}
