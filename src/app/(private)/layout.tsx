export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header></header>
      <main className="container my-6 mx-auto">{children}</main>
    </>
  );
}