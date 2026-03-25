import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Empathy Seeds",
  description: "Counselling and parenting guidance platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}