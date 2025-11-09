import Link from "next/link";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout" style={{ zIndex: '1000' }}>
      <DashboardSidebar />
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
}