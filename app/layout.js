import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import "./globals.css";
import "./output.css";
import AuthProvider from "./providers/AuthProvider";

export const metadata = {
  title: "Eventry - Home",
  description: "Eventry is a platform for creating and managing events",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
