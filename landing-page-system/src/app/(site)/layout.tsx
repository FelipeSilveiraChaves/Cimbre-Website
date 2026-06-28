import Footer from "../components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col overflow-x-hidden bg-[#F8FCFF]">
      <main className="flex w-full flex-1 justify-center pt-32.5">{children}</main>
      <Footer variant="light" />
    </div>
  );
}
