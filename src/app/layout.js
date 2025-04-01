import "./globals.css";
import { QueryProvider } from "@/context/QueryProvider";
import { GeneralProvider } from "@/context/GeneralContext";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "School Diary",
  description: "School Diary - Your digital companion for managing school activities, assignments and schedules",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <GeneralProvider>
              {children}
            </GeneralProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
