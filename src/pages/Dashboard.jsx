import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Topbar />
        <main className="mt-16 p-6">
          {/* Page content goes here */}
          <div className="h-96 w-full bg-gray-100 border border-dashed rounded-lg flex items-center justify-center text-gray-400">
            Your content here
          </div>
        </main>
      </div>
    </div>
  );
}
