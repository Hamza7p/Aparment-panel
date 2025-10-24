import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">Overview</Link>
          </li>
          <li>
            <Link href="/dashboard/products">Manage Products</Link>
          </li>
          <li>
            <Link href="/dashboard/orders">Manage Orders</Link>
          </li>
          <li>
            <Link href="/dashboard/users">Manage Users</Link>
          </li>
          <li>
            <Link href="/dashboard/analytics">Analytics</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}