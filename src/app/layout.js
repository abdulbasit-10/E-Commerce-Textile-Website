import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: "Kashaf Textile Hub",
  description: "Learning and Development Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </html>
  );
}
