import Image from "next/image";
import { ReactNode } from "react";
import image1 from "../public/img/nft_1.png";

function Team({ name, rank, username, socials, imgSrc }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[150px] h-[150px] relative aspect-square bg-primary-700 mt-3.5">
          <Image
            layout="fill"
            src={image1}
            alt={name}
            width="512"
            height="512"
            priority
            placeholder="blur"
          />
        </div>
        <div className="mt-2.5">
          <h3 className="text-2xl font-semibold text-center font-inter text-secondary ">
            {name}
          </h3>
          <p className="text-center text-white/80">{rank}</p>
        </div>
        <div className="flex items-center justify-center gap-5 mt-3 text-white">
          {socials.map((social, i) => (
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="duration-150 hover:text-secondary"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
