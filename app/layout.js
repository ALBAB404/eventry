import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import "./globals.css";
import "./output.css";

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
