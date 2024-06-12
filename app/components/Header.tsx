import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>MyNextApp</a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="hover:text-gray-400">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-400">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-gray-400">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;