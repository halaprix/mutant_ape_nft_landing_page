import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
function Header() {
    const [showSidebar, setShowSidebar] = useState(false);

    const closeSidebar = (e) => e?.target?.id === 'mobile_sidebar' && setShowSidebar(false);
    const closeSidebarForcely = () => setShowSidebar(false);
    useEffect(() => {
        document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
    }, [showSidebar]);

    return (
        <header className="z-50 fixed backdrop-blur-sm top-0 left-0 w-full border-b bg-black border-white/10 py-2" >
            <div className='relative py-2.5 px-5 md:px-8 flex justify-between items-center '>
                {/* Logo Start */}
                <div>
                    <Link href='/'>
                        <a className="font-bold text-white text-2xl md:text-3xl" >
                            Your Logo
                        </a>
                    </Link>
                </div>
                {/* Logo End */}
                {/* Nav Start */}
                <div>
                    <div
                        onClick={closeSidebar}
                        id='mobile_sidebar'
                        className={`fixed pointer-events-none top-0 left-0 w-full h-screen mobile_nav_gradient md:mobile_nav_transparent z-50 md:static md:w-auto md:h-auto opacity-0 duration-200 ${showSidebar ? 'opacity-100 pointer-events-auto' : ''
                            } md:opacity-100 md:pointer-events-auto`}
                    >
                        <ul
                            className={`gap-10 font-medium text-white/80 pt-5 md:pt-0 w-[80%] md:w-auto md:flex h-full md:h-auto md:bg-transparent duration-200 ${showSidebar ? 'translate-x-0' : '-translate-x-full'
                                } md:translate-x-0`}
                        >
                            <li>
                                <a
                                    onClick={closeSidebarForcely}
                                    href="#roadmap"
                                    className='hover:text-white duration-100 flex items-center gap-4 px-6 py-2.5 md:p-1'
                                >
                                    Roadmap
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={closeSidebarForcely}
                                    href="#team"
                                    className='hover:text-white duration-100 flex items-center gap-4 px-6 py-2.5 md:p-1'
                                >
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={closeSidebarForcely}
                                    href="#faq"
                                    className='hover:text-white duration-100 flex items-center gap-4 px-6 py-2.5 md:p-1'
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Nav End */}

                    {/* Hamburger Icon --Start-- */}
                    <div
                        style={{ zIndex: showSidebar ? '999999' : 1 }}
                        className='text-[#999] md:hidden cursor-pointer relative'
                        onClick={() => setShowSidebar((prev) => !prev)}
                    >
                        {showSidebar ? <IoMdClose size={25} /> : <GiHamburgerMenu size={25} />}
                    </div>
                    {/* Hamburger Icon --End-- */}
                </div>
            </div>
        </header>
    );
}

export default Header;
