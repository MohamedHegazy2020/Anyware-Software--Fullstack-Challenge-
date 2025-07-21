import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { withRequireAuth } from "../routes/RequireAuth";

export function Layout() {
  return (
    <div className="flex min-h-screen bg-neutral-light">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

Layout.displayName = "Layout";

const ProtectedLayout = withRequireAuth(Layout);
export default ProtectedLayout;
