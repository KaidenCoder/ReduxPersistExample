import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '2em',
      }}
    >
      <Link href="/homepage" passHref>
        <span style={{ textDecoration: 'underline' }}>Home</span>
      </Link>
      <Link href="/ui/bookmarks/charactersbookmark" passHref>
        <span style={{ textDecoration: 'underline' }}>Bookmarks</span>
      </Link>
    </div>
  );
};

export default Navbar;
