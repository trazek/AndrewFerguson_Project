import LoTRAppBar from "@/components/LoTRAppBar";

import LoTRCards from "@/components/LoTRCards";

export default function Home() {
  return (
    <>
      <LoTRAppBar title="Lord of the Rings Trivia"></LoTRAppBar>

      <section style={{ marginTop: "64px" }}>
        <LoTRCards></LoTRCards>
      </section>
    </>
  );
}
