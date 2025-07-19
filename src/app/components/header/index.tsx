import Link from 'next/link'

import lj from '../../../../public/jdl.png'
import jl from '../../../../public/jl.png'



export function Header(){
    return(
        <header className='bg-blue-500 h-15'>
            <nav className='max-w-7xl mx-auto flex justify-between items-center'>
                  
                    <Link href='/'><img src={lj.src} alt="logo" className='w-15 h-12 '/></Link>
                    
                    <img src={jl.src} alt="icon" className='w-15'/>


            </nav>
        </header>
    )
}