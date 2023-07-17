import LoTRAppBar from "@/components/LoTRAppBar";
import LoTRBreadCrumbsBar from "@/components/LoTRBreadCrumbsBar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoTRAppBar></LoTRAppBar>
      {/* <LoTRBreadCrumbsBar></LoTRBreadCrumbsBar> */}

      <section style={{ marginTop: "96px" }}>{children}</section>
    </>
  );
}
