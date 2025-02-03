import "./globals.css";

export const metadata = {
  title: "Manoj Gohel",
  description: "Passinated about programming and learning new things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
