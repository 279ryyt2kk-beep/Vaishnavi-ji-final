import "./globals.css";

export const metadata = {
  title: "Vaishnavi ji, Will You Be My Valentine?",
  description: "A cute valentine surprise website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
