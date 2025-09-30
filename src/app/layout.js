import "./globals.css";


export const metadata = {
  title: "Dash",
  description: "Life stories on a QR code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
