import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-grow bg-white h-screen">
      {/* Main content */}
      <h2>lorem</h2>
    </div>
  </div>
  );
}
