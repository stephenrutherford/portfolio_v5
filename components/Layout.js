import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Hero from "../components/Hero";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

function Layout({ children }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [{ children }]);

  const router = useRouter();

  return (
    <div className="">
      <main className="container pl-4 pr-4 max-w-6xl min-h-[calc(100vh-18rem)] lg:pl-0 lg:pr-0">
        <Navbar />
        {router.pathname === "/" ? <Hero /> : ""}
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
