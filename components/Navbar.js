import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <header className="flex h-40 align-center md:h-20 border-b mb-8">
      <div className="container flex justify-between items-center">
        <div className="hidden lg:block">
          <h1 className="text-xl text-gray-800 hover:text-gray-600">
            <Link href="/">
              <a>
                <span className="pr-2 text-brand-blue font-bold">{`</>`}</span>
                Stephen Rutherford
              </a>
            </Link>
          </h1>
        </div>

        <ul className="flex flex-col md:flex-row md:space-x-16 list-none">
          <li
            className={`nav ${router.pathname === "/work" ? "nav-active" : ""}`}
          >
            <Link href="/works">
              <a>Work</a>
            </Link>
          </li>
          <li
            className={`nav ${
              router.pathname === "/articles" ? "nav-active" : ""
            }`}
          >
            <Link href="/articles">
              <a>Articles</a>
            </Link>
          </li>
          <li className="nav">
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank">
              Resume
            </a>
          </li>
          <li
            className={`nav ${
              router.pathname === "/contact" ? "nav-active" : ""
            }`}
          >
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
