import Image from 'next/image';
import { ReactNode } from 'react';

function Team({ name, rank, username, socials, imgSrc }) {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='w-[150px] h-[150px] relative aspect-square bg-primary-700 mt-3.5'>
                    <Image layout="fill" src='/img/nft_1.png' alt={name} />
                </div>
                <div className='mt-2.5'>
                    <h3 className='text-2xl font-inter text-center text-secondary font-semibold '>{name}</h3>
                    <p className='text-white/80 text-center'>{rank}</p>
                </div>
                <div className='flex items-center text-white justify-center mt-3 gap-5'>
                    {socials.map((social, i) => (
                        <a href={social.link} target="_blank" rel="noreferrer" key={i} className="hover:text-secondary duration-150">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
