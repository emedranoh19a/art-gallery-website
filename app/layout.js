import { Big_Shoulders_Display, Outfit } from 'next/font/google';
import "./globals.css"
const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ['latin'], // or ['latin-ext'], etc.
  weight: ['400', '900'], // You can specify the weights you want
  variable:"--big-shoulders-display"
});
const outfit =Outfit({
  subsets: ['latin'], // or ['latin-ext'], etc.
  weight: ['300'], // You can specify the weights you want
  variable:"--outfit"
});

export const metadata = {
  title: "Art Gallery Website",
  description:
    "A Junior challenge from Front End Mentor, taken by Eric Medrano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${bigShouldersDisplay.variable}`}>{children}</body>
    </html>
  );
}
