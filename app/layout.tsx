import "./globals.css";

export const metadata = {
  title: "Kwadwo Sheldon Studios",
  description: "Best Youtube channel in Ghana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
        <body>{children}</body>
      </>
    </html>
  );
}
