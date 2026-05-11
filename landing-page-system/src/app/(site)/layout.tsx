import Footer from "../components/footer";

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#F8FCFF]">
      <main className="flex w-full justify-center">{children}</main>
      <Footer variant="light" />
    </div>
  );
}
