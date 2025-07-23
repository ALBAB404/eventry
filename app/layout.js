import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import "./globals.css";
import "./output.css";
import AuthProvider from "./providers/AuthProvider";

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
