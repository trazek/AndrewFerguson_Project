import { getCharacters } from "@/lib/api.methods";

import LoTRCharacters from "@/components/LoTRCharacters";
import { Suspense } from "react";

export default async function Characters() {
  const characters = await getCharacters();
  return (
    <Suspense fallback={<p>Fallback</p>}>
      <LoTRCharacters characters={characters}></LoTRCharacters>
    </Suspense>
  );
}
