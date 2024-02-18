import React from 'react';


const NavBar=()=>{
    const [sticky,setSticky]=useState(true);

    const menuLinks =[
        {name: 'HOME',link:'#home',},
        {name: 'ABOUT',link:'#about',},
        {name: 'SKILLS',link:'#skills',},
        {name: 'PROJECTS',link:'#projects',},
        {name: 'CONTACT',link:'#contact',}

    ]
    return(
        <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "md:bg-white text-gray-900":"text-white"}`}>
            <div className='flex items-center justify-between'>
                <div className='mx-7'>
                    <h4 className='text-4xl uppercase font-bold'>
                        S<span className='text-cyan-600'>D</span>
                    </h4>

                </div>
                <div className='text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full'>
                    <ul className='flex items-center gap-1 py-2 text-lg'>
                        {
                            menuLinks?.map((menuLink,index)=>(
                                <li key={index} className='px-6 hover:text-yellow '>
                                    <a href={menuLink?.link}>{menuLink?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
        )
}

export default NavBar;