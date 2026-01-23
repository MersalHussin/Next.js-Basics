import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='flex gap-5 justify-center py-5 '>
            <Link href= "/">Home</Link>
            <Link href= "/products">Products</Link>
        </nav>
    );
}

export default NavBar;
