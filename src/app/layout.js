import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Phil",
  description: "Personal web dev portfolio representing Philip Roddenberry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex p-3 md:p-10 min-h-screen">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
