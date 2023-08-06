import Image from "next/image";
import "./page.scss";

import {
  AdvancedStatistics,
  BoostLinks,
  Header,
  Hero,
  InputField,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <InputField />
      <AdvancedStatistics />
      <BoostLinks />
    </main>
  );
}
