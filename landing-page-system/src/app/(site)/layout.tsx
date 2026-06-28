import Footer from "../components/footer";
import BackToLp from "../components/backtolp";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col overflow-x-hidden bg-[#F8FCFF]">
      <main className="flex w-full flex-1 flex-col items-center pt-32.5">
        {/* volta para a LP de origem (lp-1/2/3) salva no localStorage */}
        <div className="w-full max-w-145 px-6 pb-8">
          <BackToLp />
        </div>
        {children}
      </main>
      <Footer variant="light" />
    </div>
  );
}
