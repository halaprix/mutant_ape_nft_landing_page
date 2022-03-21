const Devider = ({ children }) => {
  return <div className="divide-y-[1px] divide-secondary mt-4">{children}</div>;
};
const Item = ({ children }) => {
  return (
    <div className="p-4">
      <div className="text-sm leading-snug prose">{children}</div>
    </div>
  );
};
const Title = ({ children }) => {
  return (
    <p className="text-lg font-bold text-left sm:text-3xl after:left-4 md:after:left-1/2 text-secondary">
      {children}
    </p>
  );
};
const TitleSmall = ({ children }) => {
  return (
    <p className="mb-3 text-lg text-left sm:text-xl after:left-4 md:after:left-1/2">
      {children}
    </p>
  );
};
const RoadmapBox = ({ children, alignRight = false }) => {
  return (
    <section
      className={`relative flex justify-between w-full mb-8 items-center ${
        alignRight ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-secondary absolute left-[calc(20px-14px)] md:left-1/2 md:-translate-x-1/2 top-0 flex items-center justify-center">
        <div className="w-4 h-4 bg-black rounded-full md:w-6 md:h-6"></div>
      </div>
      <div className="order-1 w-1/12 md:w-5/12" />
      <div className="order-1 w-10/12 px-1 py-4 text-left md:w-5/12">
        {children}
      </div>
    </section>
  );
};

function RoadmapSection() {
  return (
    <>
      <div className="container scroll-mt-28 mt-28 md:mt-0" id="roadmap">
        <div className="overflow-hidden text-white">
          <h2 className="section_title">Roadmap</h2>
          <div className="max-w-4xl lg:mx-auto">
            <div className="w-full h-full mx-auto">
              <div className="relative h-full px-0 py-4 overflow-hidden wrap md:px-8">
                <div className="absolute h-[100%] border-2 rounded-l-lg top-4 border-secondary left-4 md:left-auto md:right-1/2 border-2-2" />
                <div className="absolute h-[100%] border-2 rounded-r-lg top-4 border-secondary left-5 md:left-1/2 border-2-2" />
                <RoadmapBox>
                  <TitleSmall>Significant events:</TitleSmall>
                  <Title>Auction for one of the 1/1s</Title>
                  <Devider>
                    <Item>25 % will go towards the artist.</Item>
                    <Item>25 % will go towards marketing costs.</Item>
                    <Item>
                      50 % will go towards charity{" "}
                      <a
                        className="block _link"
                        href="http://www.orangutans-sos.org"
                      >
                        www.orangutans - sos.org
                      </a>
                    </Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox alignRight>
                  <Title>A portion of the project goes to charity.</Title>
                  <Devider>
                    <Item>
                      10% of each of the Generational drops will go towards
                      charity
                    </Item>
                    <Item>
                      The charity of choice is{" "}
                      <a
                        className="block _link"
                        href="http://www.orangutans-sos.org"
                      >
                        www.orangutans-sos.org
                      </a>
                    </Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox>
                  <Title>Project Changes:</Title>
                  <Devider>
                    <Item>
                      Supply will be changed to 7,777 from the original 10,000.
                    </Item>
                    <Item>
                      We will now be doing 3 Generational drops, each increasing
                      in rarity and value.{" "}
                    </Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox alignRight>
                  <TitleSmall>
                    1st Gen will include a supply of 7,777 with 100 traits.
                  </TitleSmall>
                  <Title>Gen 1 Mint:</Title>
                  <Devider>
                    <Item>Goldlist: 1 Sol (3 mints)</Item>
                    <Item>Whitelist: 1.5 Sol (3 mints)</Item>
                    <Item>Public 2 Sol (3 mints per wallet)</Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox>
                  <Title>Gen 1 holders will receive:</Title>
                  <Devider>
                    <Item>Keychain of the Base MASC Design.</Item>
                    <Item>1x staking option.</Item>
                    <Item>
                      Access to the Exclusive Clothing on the website.
                    </Item>
                    <Item>Access to MetaMansion in Solanaverse.</Item>
                    <Item>Exclusive Whitelist for 2nd Gen</Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox alignRight>
                  <TitleSmall>
                    2nd Gen will include a supply of 3,333 with 100 more unique
                    traits.
                  </TitleSmall>
                  <Title>
                    2nd Gen requires holding 1st Gen to Mint. 2nd Gen Whitelist
                    is exclusively for 1st Gen Holders.
                  </Title>
                </RoadmapBox>

                <RoadmapBox>
                  <Title>
                    Gen 2 Mint: 1 Gen 2 can be minted per each Gen 1 NFT
                  </Title>

                  <Devider>
                    <Item>Goldlist: 1.5 Sol (up to 3 mints)</Item>
                    <Item>Whitelist: 1.75 Sol </Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox alignRight>
                  <Title>Gen 2 holders will receive:</Title>
                  <Devider>
                    <Item>Free T-shirt.</Item>
                    <Item>1.25x staking option. </Item>
                    <Item>
                      Access to the Exclusive Clothing on the website.
                    </Item>
                    <Item>Access to MetaMansion in Solanaverse.</Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox>
                  <TitleSmall>
                    3rd Gen will include a supply of 1,111 with 50 ultra-rare{" "}
                  </TitleSmall>
                  <Title>
                    Gen 3 Mint: 1 Gen 3 can be minted per each Gen 2 NFT
                  </Title>
                  <Devider>
                    <Item>Goldlist: 1.75 Sol (up to 3 mints)</Item>
                    <Item>Whitelist: 2 Sol (up to 3 mints)</Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox alignRight>
                  <TitleSmall>
                    3rd Gen requires holding 2nd Gen to Mint. 3rd Gen Whitelist
                    is exclusively for 2nd Gen Holders.
                  </TitleSmall>
                  <Title>Gen 3 holders will receive:</Title>
                  <Devider>
                    <Item>Portrait of your Gen 3 NFT.</Item>
                    <Item>1.5x staking option. </Item>
                    <Item>
                      Access to the Exclusive Clothing on the website.
                    </Item>
                    <Item>Access to MetaMansion VIP room in Solanaverse.</Item>
                    <Item>Total supply = 12,221</Item>
                  </Devider>

                  <Item>
                    <p className="italic">
                      Each Generation will receive more rare traits and supply
                      will be lower creating more value with the art becoming
                      better with each generation.
                    </p>
                  </Item>
                </RoadmapBox>

                <RoadmapBox>
                  <Title>Gen 1 will release on April 9th.</Title>
                  <Devider>
                    <Item>12 p.m. est for Goldlist</Item>
                    <Item>2 p.m. est for Whitelist</Item>
                    <Item>4 p.m. est for Public</Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox alignRight>
                  <Title>Gen 2 will release on April 30th.</Title>
                  <Devider>
                    <Item>12 p.m. est for Goldlist</Item>
                    <Item>2 p.m. est for Whitelist</Item>
                    <Item>4 p.m. est for Public</Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox>
                  <Title>Gen 3 will release on May 7th.</Title>
                  <Devider>
                    <Item>12 p.m. est for Goldlist</Item>
                    <Item>2 p.m. est for Whitelist</Item>
                    <Item>4 p.m. est for Public</Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox alignRight>
                  <Title>Staking options being added</Title>
                  <Item>
                    We will create a coin on the Solana network that can be
                    staked via your NFT. You will be paid daily based on the
                    Generation NFT you own.
                  </Item>
                  <Devider>
                    <Item>Gen 1: 1x staking</Item>
                    <Item>Gen 2: 1.25x staking</Item>
                    <Item>Gen 3: 1.5x staking</Item>
                  </Devider>
                </RoadmapBox>

                <RoadmapBox>
                  <Title>Clothing/store options that will be available:</Title>
                  <Devider>
                    <Item>
                      1st mint Gen 1 Holders will receive a free keychain of the
                      Base MASC ape. (will ship when Gen 2 drops)
                    </Item>
                    <Item>
                      1st mint Gen 2 Holders will receive a free keychain +
                      T-shirt. (Will ship when Gen 3 drops)
                    </Item>
                    <Item>
                      1st mint Gen 3 Holders will receive a free keychain +
                      T-shirt + Portrait of Gen 3 ape. (will ship when Store
                      opens)
                    </Item>
                  </Devider>

                  <div>
                    <Item>
                      MASC plans to partner with a clothing brand and release
                      our clothing store on May 31st at the latest. The date is
                      subject to change. Only holders will have access, and the
                      store will either be tiered based on which generation you
                      hold or you will receive a % off based on which Gen you
                      hold. Free clothing and accessories will be given to
                      holders throughout the year, giveaways will be done as
                      well that only holders can enter.
                    </Item>
                  </div>
                </RoadmapBox>

                <RoadmapBox alignRight>
                  <Title>Metaverse Mansion:</Title>
                  <div className="mt-4">
                    <Item>
                      The Mansion will begin being created the day after the 1st
                      generational drop and will be completed by the 3rd
                      generational drop.
                    </Item>
                    <Item>
                      We will create a mansion in the Solanaverse and since we
                      are partnered with Solanaverse will be buying 10 plots of
                      land. More information on the mansion will be available
                      after the 1st Gen drop.
                    </Item>
                    <Item>
                      The plan is to create a 4 tier mansion, where we can have
                      parties, hold concerts, and include a VIP area for 3rd Gen
                      holders. We would like to include a rooftop area only
                      accessible by Gen 2 and Gen 3 holders.
                    </Item>
                  </div>
                </RoadmapBox>

                <RoadmapBox>
                  <Title>Goldlist:</Title>
                  <Devider>
                    <TitleSmall>Will receive:</TitleSmall>
                    <Item>
                      All Gen 1-3 Perks automatically (Free Keychain, Tshirt,
                      and Portrait)
                    </Item>
                    <Item>1.75x staking ability</Item>
                    <Item>Gen 1 mint first for 1 Sol each</Item>
                    <Item>Gen 2 mint first for 1.5 Sol each</Item>
                    <Item>Gen 3 mint first for 2 Sol each</Item>
                    <Item>Exclusive rooftop access to MetaMansion</Item>
                    <Item>
                      Physical Drops and gifts of clothing as we test new
                      apparel.
                    </Item>
                    <Item>
                      (Not confirmed) each Goldlist member will receive an
                      airdrop of the coin we create for staking, amount
                      equivalent to $500.
                    </Item>
                    <Item>More to be added.</Item>
                  </Devider>
                </RoadmapBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadmapSection;
