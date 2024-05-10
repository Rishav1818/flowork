import Navbar from "@/components/Navbar";
import { LocationContextProvider } from "@/context/ContextProvider";
import "@/styles/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-black font-sans antialiased text-white"
      >
        <LocationContextProvider>
          <main className="w-full flex justify-center items-center flex-col">
            <div className="container sticky z-50 bg-background top-0">
              <Navbar />
            </div>
            <div className="container">{children}</div>
          </main>
        </LocationContextProvider>
      </body>
    </html>
  );
}
