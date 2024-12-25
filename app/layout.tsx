import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <link rel="icon" type="image/png" href="assets/favicon.png" />
      <body>{children}</body>
    </html>
  );
}
