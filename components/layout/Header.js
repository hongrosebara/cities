import ThemeChanger from './ThemeChanger';
import Link from 'next/link'

export default function Header({}) {

  return (
    <header className='section-header text-base p-3'>
      <div className='grid grid-cols-4 items-center lg:grid-cols-9'>
        <div className='col-span-3 lg:col-span-3 flex items-center'>
          <Link href="/">
            Autocomplete
          </Link>
        </div>

        <nav className='col-span-1 lg:col-span-6'>
          <ul className='flex justify-end items-center space-x-4'>
            <ThemeChanger />
          </ul>
        </nav>
      </div>
    </header>
  );
}