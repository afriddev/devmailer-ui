import PolicyLayout from "../components/PolicyLayout";
import { privacyPolicy } from "../data/legalContent";

export default function Privacy() {
  return <PolicyLayout policy={privacyPolicy} />;
}
