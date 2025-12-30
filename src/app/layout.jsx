
import "@/styles/global.css";
import { Outfit, Poppins } from "next/font/google";
import AppProviders from "@/providers/AppProviders.js";
import ToastNotification from "@/utils/ToastNotificaton.jsx";
import { AuthProvider } from "@/context/AuthContext.jsx";

// ✅ define font first
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Apartment Dashboard",
  description: "Apartment Dashboard for managing apartments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${poppins.className} ${outfit.className}`}
        cz-shortcut-listen="true"
      >
        <AppProviders>
        <AuthProvider>
            <main>{children}</main>
          </AuthProvider>
        </AppProviders>
        <ToastNotification />
      </body>
    </html>
  );
}
