import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-top bg-cover bg-no-repeat pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-0 items-center ">
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <h1 className=" text-6xl text-blue-500 font-carter">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-pink-400 ">
              Stephen
            </span>
          </h1>
          <p className="text-2xl leading-relaxed text-gray-600">
            A data analyst specializing in fraud detection and account security.
            Front-End developer hobbyist.
          </p>
          <div className="flex mt-8 space-x-6">
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              className="btn-hero"
            >
              Resume
            </a>
            <Link href="/contact">
              <a className="btn-hero-2">Contact</a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-6 lg:justify-end">
          <Image
            src="/images/hero_5.png"
            width={500 * 0.8}
            height={500 * 0.8}
            priority
            alt="Hero Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
