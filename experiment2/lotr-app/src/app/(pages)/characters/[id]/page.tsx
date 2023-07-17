import { getCharacter, getCharacterQuote } from "@/lib/api.methods";
import LoTRCharacterOne from "@/components/LoTRCharacterOne";
import LoTRQuotes from "@/components/LoTRQuotes";
import Link from "next/link";
import { Suspense } from "react";

export default async function Character({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [characterData, quoteData] = await Promise.all([
    getCharacter(id),
    getCharacterQuote(id),
  ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          maxWidth: "1200px",
          margin: "auto",
          paddingBottom: "8px",
        }}
      >
        <Link
          href="/characters"
          style={{ textDecoration: "none", color: "initial" }}
        >
          <span>&#8592;</span> Back
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          height: "85vh",
          alignItems: "stretch",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Suspense>
          <LoTRCharacterOne character={characterData}></LoTRCharacterOne>
        </Suspense>
        <Suspense>
          <LoTRQuotes quotes={quoteData}></LoTRQuotes>
        </Suspense>
      </div>
    </>
  );
}
