import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export const metadata = {
  title: "Ayushi Pal | Full-Stack Developer",
  description:
    "Showcasing all my work and experience in the field of technology!",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "16x16" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f19] text-white relative overflow-x-hidden">
        {/* Background Glow */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

          {/* Top Left Glow */}
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-blue-600/20 blur-[100px] sm:blur-[120px] rounded-full -top-32 -left-32 sm:-top-40 sm:-left-40"/>

          {/* Bottom Right Glow */}
          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] bg-purple-600/20 blur-[100px] sm:blur-[120px] rounded-full bottom-0 right-0"/>

        </div>

        <Navbar />

        <main className="pt-24 sm:pt-28">{children}</main>

        <Footer />
        
      </body>
    </html>
  );
}
