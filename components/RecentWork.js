import Image from "next/image";
import Link from "next/link";

function RecentWork({ linkSrc, thumbnailSrc, title, description }) {
  return (
    <div className="flex flex-col overflow-hidden  rounded-xl ">
      <Link href={linkSrc}>
        <a>
          <Image
            className="object-cover rounded-xl hover:scale-105 transition ease-in-out duration-500"
            src={thumbnailSrc}
            width={1000}
            height={800}
            priority
            alt={title + " cover image"}
          />
        </a>
      </Link>
      <div className="grid grid-cols-1 pt-8 prose">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default RecentWork;
