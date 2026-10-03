import "./globals.css";
export const metadata = { title: "Aniflex - Stream Movies & TV Shows" };
export default function RootLayout({ children }) {
  return (<html lang="en"><body className="bg-[#060608] text-white">{children}</body></html>);
}