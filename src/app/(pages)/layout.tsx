import Sidebar from "@/components/Sidebar/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-evenly relative">
      <Sidebar />
      <div className="w-screen flex justify-end">{children}</div>
    </div>
  );
}
