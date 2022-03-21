import { BsTwitter, BsInstagram } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import Team from "./Team";

const teams = [
  {
    rank: "Founder",
    name: "Jordan H.",
    imgSrc: "/img/team/image 1.png",
    socials: [
      {
        link: "https://www.instagram.com/Hockman_43/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/Hockman_43",
        icon: <BsTwitter />,
      },
    ],
  },
  {
    rank: "Co-Founder",
    name: "Andy P.",
    imgSrc: "/img/team/image 1.png",
    socials: [
      {
        link: "https://www.instagram.com/realandypeters/",
        icon: <BsInstagram />,
      },
      {
        link: "@andypeters",
        icon: <SiDiscord />,
      },
    ],
  },
  {
    rank: "Accounting Manager",
    name: " Ken M.",
    imgSrc: "/img/team/image 1.png",
    socials: [
      {
        link: "@scruffyfm",
        icon: <SiDiscord />,
      },
      {
        link: "https://www.instagram.com/scruffyfm09/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/scruffyfm09",
        icon: <BsTwitter />,
      },
    ],
  },
  {
    rank: "Marketing Manager",
    name: "Logan J.",
    imgSrc: "/img/team/image 1.png",
    socials: [
      {
        link: "@illstaygolden",
        icon: <SiDiscord />,
      },
      {
        link: "https://www.instagram.com/the_illstaygolden/",
        icon: <BsInstagram />,
      },
      {
        link: "https://twitter.com/StayGoldenSol",
        icon: <BsTwitter />,
      },
    ],
  },
  {
    rank: "Head Development Team",
    name: "Ry",
    imgSrc: "/img/team/image 1.png",
    socials: [
      {
        link: "@RyGuy07",
        icon: <SiDiscord />,
      },
    ],
  },
  {
    rank: "Marketing/Website Designer",
    name: "Jermaine H.",
    imgSrc: "/img/team/image 1.png",
    socials: [
      {
        link: "@Mello",
        icon: <SiDiscord />,
      },
      {
        link: "https://www.instagram.com/jermainehesterjr/",
        icon: <BsInstagram />,
      },
    ],
  },
];

function TeamSection() {
  return (
    <>
      {/* Team Section Start */}
      <section className="bg-primary-800 mt-28 md:mt-32 scroll-mt-28" id="team">
        <div className="container">
          <h2 className="section_title">
            Connect with our Team members and Founders:
          </h2>

          <div className="grid grid-cols-2 gap-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3 md:gap-y-20">
            {teams.map((team, i) => (
              <Team {...team} key={i} />
            ))}
          </div>
        </div>
      </section>
      {/* Team Section End */}
    </>
  );
}

export default TeamSection;
