import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "Shraddha",
	authors: {
		name: "chensokheng",
	},

	description:
		"I'm a MERN STACK Developer passionate about building a web applications that users love.",
	openGraph: {
		title: "Shraddha",
		description:
			"I'm a MERN STACK Developer passionate about building a web applications that users love.",
		url: "http://localhost:3000",
		siteName: "Shraddha",
		images: "/Screenshot(23).png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
