import {
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Dashboard", icon: HomeIcon },
  { name: "Users", icon: UsersIcon },
  { name: "Settings", icon: Cog6ToothIcon }, // updated
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-lg border-r p-5 fixed">
      <div className="text-2xl font-bold text-indigo-600 mb-10">MyApp</div>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 p-2 text-gray-700 rounded-lg hover:bg-indigo-100 transition cursor-pointer"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}
