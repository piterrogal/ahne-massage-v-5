
export const metadata = {
  title: "An He Massage Dublin",
  description: "Relaxing massage in Dublin"
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
