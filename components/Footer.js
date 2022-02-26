import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex h-20 pt-0 mt-16 mb-8 border-t">
      <container className="container flex justify-between items-center">
        <div className="">
          <h1 className="text-base text-gray-800 hover:text-gray-600">
            <Link href="/">
              <a>
                <span className="pr-2 text-brand-blue font-bold">{`</>`}</span>
                Stephen Rutherford
              </a>
            </Link>
          </h1>
        </div>

        <ul className="flex space-x-4 list-none ">
          <li className="nav">
            <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank">
              <Image
                src="/images/github2.png"
                width={24}
                height={24}
                priority
                alt="GitHub Logo"
              />
            </a>
          </li>
          <li className="nav">
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank">
              <Image
                src="/images/linkedin.png"
                width={24}
                height={24}
                priority
                alt="LinkedIn Logo"
              />
            </a>
          </li>
        </ul>
      </container>
    </footer>
  );
}

export default Footer;
