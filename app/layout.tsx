import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col px-4 items-center">
            <header>
              <div className="flex items-center justify-end gap-8 py-4">
                <nav className="ml-auto text-sm font-medium space-x-6">
                <a className="active:bg-slate-500 hover:rounded-md p-1 hover:bg-slate-600 focus:ring-2" href="/">HOME</a>
                <a className="active:bg-slate-500 hover:rounded-md p-1 hover:bg-slate-600 focus:ring-2" href="/about">ABOUT</a>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
