import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { AuthProvider } from "@/contexts/AuthContextNew";
import { GardenProvider } from "@/contexts/GardenContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import NotificationContainer from "@/components/NotificationContainer";

const kanit = Kanit({ 
  subsets: ["thai", "latin"], 
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "ExamMaster - แพลตฟอร์มติวสอบข้าราชการออนไลน์",
  description: "เตรียมสอบข้าราชการครบวงจร ทั้งภาค ก. ข. และ ค. การันตีผลสอบ หรือเรียนซ้ำฟรี",
  keywords: "สอบข้าราชการ, ติวสอบภาค ก, ติวสอบภาค ข, ติวสอบภาค ค, ข้อสอบข้าราชการ, เตรียมสอบราชการ",
  authors: [{ name: "ExamMaster Team" }],
  creator: "ExamMaster",
  publisher: "ExamMaster",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://exammaster.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ExamMaster - แพลตฟอร์มติวสอบข้าราชการออนไลน์",
    description: "เตรียมสอบข้าราชการครบวงจร ทั้งภาค ก. ข. และ ค. การันตีผลสอบ หรือเรียนซ้ำฟรี",
    url: "https://exammaster.com",
    siteName: "ExamMaster",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExamMaster - แพลตฟอร์มติวสอบข้าราชการออนไลน์",
    description: "เตรียมสอบข้าราชการครบวงจร ทั้งภาค ก. ข. และ ค. การันตีผลสอบ หรือเรียนซ้ำฟรี",
    creator: "@exammaster",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#004eb3" />
      </head>
      <body className={`${kanit.className} antialiased transition-colors duration-300`}>
        <NotificationProvider>
          <AuthProvider>
            <GardenProvider>
              <ErrorBoundary>
                <div className="min-h-screen flex flex-col bg-white">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                  <NotificationContainer />
                </div>
              </ErrorBoundary>
            </GardenProvider>
          </AuthProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
