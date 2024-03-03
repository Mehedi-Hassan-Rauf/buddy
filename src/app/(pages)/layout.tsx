import Sidebar from "@/components/Sidebar/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex:col sm:flex-row relative justify-end">
      <Sidebar />
      {children}
    </div>
  );
}
