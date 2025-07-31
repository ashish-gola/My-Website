
import "./globals.css";
export const metadata = {
  title: 'Portfolio - Ashish Gola',
  description: 'Personal portfolio website developed with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
