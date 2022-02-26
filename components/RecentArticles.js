import Image from "next/image";
import Link from "next/link";

function RecentArticles({ linkSrc, iconSrc, title, description, date }) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl justify-between p-8">
      <div className="grid grid-cols-1 ">
        <Image
          className="object-contain object-left"
          src={iconSrc}
          width={50}
          height={50}
          priority
          alt={title + " icon"}
        />
        <Link href={linkSrc}>
          <a>
            <h2 className="text-lg font-bold line-clamp-3 pt-4 pb-4 text-gray-800 hover:text-gray-600">
              {title}
            </h2>
            <p className="line-clamp-3">{description}</p>
          </a>
        </Link>
      </div>
      <div className="">
        <p className="text-sm italic text-gray-500">{date}</p>
      </div>
    </div>
  );
}

export default RecentArticles;
