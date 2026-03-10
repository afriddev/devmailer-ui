import PolicyLayout from "../components/PolicyLayout";
import { securityPolicy } from "../data/legalContent";

export default function Security() {
  return <PolicyLayout policy={securityPolicy} />;
}
