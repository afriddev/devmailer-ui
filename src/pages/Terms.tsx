import PolicyLayout from "../components/PolicyLayout";
import { termsPolicy } from "../data/legalContent";

export default function Terms() {
  return <PolicyLayout policy={termsPolicy} />;
}
