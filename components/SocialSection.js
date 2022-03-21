import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

function SocialSection() {
  return (
    <section className="mt-28 md:mt-32 mb-14">
      <div className="text-center section_title">Join Our Community</div>
      <ul className="flex items-center justify-center gap-12">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/MutantApeSolana"
            className="text-white hover:text-secondary"
          >
            <BsTwitter size={35} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/VbkDnb5F"
            className="text-white hover:text-secondary"
          >
            <SiDiscord size={35} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mutantapesolanaclub/"
            className="text-white hover:text-secondary"
          >
            <BsInstagram size={35} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/+CyrSEkvZs8pkZWIx"
            className="text-white hover:text-secondary"
          >
            <FaTelegramPlane size={35} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SocialSection;
