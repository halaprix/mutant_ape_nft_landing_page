import { useState } from "react";
import Collapsible from "react-collapsible";
import { IoChevronDownOutline } from "react-icons/io5";

const paragraphClasses =
  "font-inter text-white/80 text-sm md:text-base leading-[1.6]";

const faqs = [
  {
    question: "When will MASC launch?",
    answer:
      "Currently that is TBA so if you see anyone else claiming to be our launch or you recieve any messages saying we are launching on a certain date, it is a scam. We will announce and change this message once the launch date is official. ",
  },
  {
    question: "What will the price be at launch?",
    answer: "2 SOL + gas fees ",
  },
  {
    question:
      "I've been offered an exclusive minting opportunity/ Presale/ Raffle DM! Is that real?",
    answer:
      "No, we will not DM you or share anything with you personally. Please turn off DMs from the discord. It looks legit... It's a scam. ",
  },
  {
    question: "Then how do I get a MASC?",
    answer:
      "You'll need to wait until our release date, which will be announced. You can be active in the discord and get on the whitelist, or get one during our public release. After that, you will have to buy one from a third party market on Solsea or MagicEden ",
  },
  {
    question: "How can I get on the Goldlist/ Whitelist?",
    answer:
      "The Goldlist is for special super early investors who were willing to put money into the project back when it was just an idea, so they have a special place with us and will go first when minting. As for whitelist spots, keep an eye out in the announcements tab and on our official twitter for chances and opportunities to win a whitelist spot. There will be tons of opportunities leading up to the release, the best chances are going to be being KIND and active in our server, and also by creating and sharing art featuring us! ",
  },
  {
    question: "What happens when all the whitelist spots are filled up?",
    answer:
      "Then you have to wait until the public sale, or win one of our giveaways! (edited)",
  },
  {
    question:
      "Ok, cool, so the best thing to do is @ the team all the time then?",
    answer:
      "Please do not do this. We understand you want us to see your amazing work but we are a small core team and if everyone @s us (or DMs) then no-one gets seen. Mods bring your work to our attention anyway and we’re much less likely to change your role if you’ve spammed your work across multiple channels and @d the team. ",
  },
  {
    question: "How can I trust this is fair?",
    answer:
      "Practically, here’s what happens. If a mod spots something or someone they think is worth Whitelisting they share it in a private group. One person in the senior mod team is responsible for going through those proposals, checking and changing the status if they ",
  },
  {
    question:
      "agree. On occasion Alphas will award the WL status on their own. Is that fair?",
    answer:
      "Perhaps not. We know it’s imperfect, at least, and there will always be people acting in bad faith to trick us. Many will succeed. There is no perfect solution. Grinding produces terrible content. Cheats (sometimes) win competitions. Art can be paid for. Gas wars destroy everyone. Raffles get botted. Everything gets botted. We’ve looked into every option. Hand-selection takes time and is vulnerable to human error but it is our preferred route. If that makes you uncomfortable you should not be on the server trying to grind out a MASC. (edited)",
  },
  {
    question: "So why should I be here?",
    answer:
      "The community and the journey. We know we’ll have far more people than Mutant Apes. While we can’t promise you’ll all get one (quite the opposite; we know all of you won’t), we can promise two things: If you’re interested in the project itself and our long term plans then we want you here alongside us and we want you to share in the adventures we’re going to have along the roadmap. We will do our best to include everyone. Our community is full of incredible people and a kind, collaborative atmosphere. We’ll continue to build and shape the server with you. As long as you’re meeting people, learning and / or having a good time then your time here isn’t being wasted. Talk to a Dr. if your happiness and mental health depends on getting a MASC you should not be here. This project is not for you and that’s OK. ",
  },
  {
    question: "Is my OG role permanent?",
    answer:
      "No. We reserve the right to change your role (and remove your wallet from the Whitelist) for any reason. Practically speaking the following will certainly see your role removed / downgraded and may result in you being ejected from the server. i) Being disrespectful to other members of the MASC community ii) Running multiple accounts on our server, particularly with the intent of subverting the process we’ve designed to get MASC to as many different people as possible iii) Selling, trading or buying accounts It’s also possible we’ll move you from OG / WL based on your activity (or otherwise). ",
  },
  {
    question: "Aren’t you worried that people are just pretending to be nice?",
    answer:
      "What’s the difference between pretending to be nice and actually being nice?",
  },
  {
    question:
      "What’s the difference between pretending to be nice and actually being nice?",
    answer: "(edited)",
  },
  {
    question: "Can I be a mod?",
    answer:
      "If you want to apply contact Founder@MutantApeSolanaClub.io | Speculative applications to an OG will be ignored. ",
  },
  {
    question:
      "I’m an #influencer. Can I have a WL spot in exchange for promotion?",
    answer:
      "If you love our project we’d love you to talk about it on social – but we can’t promise anything in return. ",
  },
  {
    question: "If I do [x], will that get me Whitelisted?",
    answer:
      "Again, no guarantees. There is no circumstance in which we will promise a WL space ahead of time. It’s also worth noting that we won’t award Whitelist for anything that puts you at risk of harm or contravenes local law. ",
  },
  {
    question: "I’ve got a business proposal for MASC. Who should I contact?",
    answer: "Email: Founder@MutantApeSolanaClub.io ",
  },
  {
    question: "Collabs?",
    answer: "Absolutely. But we’ve nothing to announce yet",
  },
];

function FaqSection() {
  return (
    <section className="scroll-mt-28 mt-28 md:mt-32" id="faq">
      <div className="container">
        <div className="section_title">FAQ</div>
        <div className="md:max-w-[650px] mx-auto text-white space-y-3">
          {faqs.map((faq, index) => (
            <FaqAccordion
              title={faq.question}
              description={faq.answer}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;

const FaqAccordion = ({ title, description, ...rest }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div {...rest}>
      <Collapsible
        transitionTime={200}
        openedClassName="currently_open"
        trigger={
          <div className="flex items-center justify-between px-5 py-3 text-white select-none font-inter bg-secondary">
            <p className="pr-6 text-base font-medium md:text-lg">{title}</p>
            <div>
              <IoChevronDownOutline
                size={24}
                className={`duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </div>
          </div>
        }
        onOpening={() => setisOpen(true)}
        onClosing={() => setisOpen(false)}
      >
        <p className={`${paragraphClasses} px-5 pb-5 pt-3 bg-white/10`}>
          {description}
        </p>
      </Collapsible>
    </div>
  );
};
