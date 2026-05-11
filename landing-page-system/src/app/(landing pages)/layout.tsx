import Footer from "../components/footer";

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[linear-gradient(to_bottom,#F8FCFF_90%,#0F192F_100%)]">
      <main className="flex w-full flex-1 justify-center">{children}</main>
      <Footer variant="dark" />
    </div>
  );
}
