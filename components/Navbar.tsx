import { NAV_LINKS } from '@/constants'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'



const Navbar = () => {
  
  return (
    <div className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <Image src="/Samitha.png" alt='logo' width={65} height={20}/>
        </Link>
        <ul className='hidden h-full gap-12 lg:flex' >
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key}
                className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
                >
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className='z-30 py-3 lg:flexCenter hidden'>
        <Link href="https://github.com/SamithaSandaruwan">
            <Image src="/github-icon.svg" alt='logo' width={32} height={32}/>
        </Link>
        </div>
    </div>
  )
}

export default Navbar