import NavLayout from "@/components/NavLayout";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavLayout>  
          {children} 
        </NavLayout>
      </body>
    </html>
  );
}
