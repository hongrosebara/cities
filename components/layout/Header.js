import { motion } from 'framer-motion';
import DarkModeButton from './DarkModeButton';

export default function Header({}) {
  
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
      rotate: 0,
      transition: { duration : 1 }
    },
  }
  
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };

  return (
    <header className='text-base'>
      <div className='grid grid-cols-4 lg:grid-cols-9 m-3'>
        <div className='col-span-3 lg:col-span-3 flex items-center'>
          {/* <motion.svg 
            className='text-3xl m-3'
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title>
            <path 
              variants={pathVariants}
              d="M4.645 7.472c2.1.53 4.779.8 8.008.8 3.299 0 5.918-.27 8.008-.8 2.23-.52 3.299-1.22 3.299-1.88 0-.47-.48-.93-1.35-1.28.2.13.35.35.35.59 0 .67-1.01 1.22-3.039 1.68-1.88.41-4.279.7-7.198.7-2.82 0-5.329-.29-7.138-.68-1.95-.48-2.97-1-2.97-1.68 0-.28.13-.52.52-.8-1.22.47-1.88.87-1.88 1.47.07.68 1.16 1.36 3.39 1.88zm4.689-2.16c2.27-.2 2.929-1.659 5.588-1.899 1.31-.1 2.14.16 2.23.62.08.43-.57.72-1.36.78-1.09.11-1.54-.28-1.63-.65-.81.09-.94.43-.9.67.09.46 1.07.92 2.75.76 1.9-.15 2.54-.9 2.38-1.65-.2-.98-1.66-1.8-4.28-1.55-3.359.3-3.339 1.86-5.628 2.05-.94.09-1.46-.13-1.55-.5-.06-.37.4-.55.94-.59.5-.05 1.11.04 1.4.2.21-.11.28-.22.26-.35-.1-.35-.79-.5-1.66-.44-1.7.15-1.7.91-1.64 1.25.17.87 1.48 1.45 3.1 1.3zm11.417 3.84c-2.1.49-4.779.809-8.008.809-3.3 0-5.989-.34-8.078-.8-1.88-.48-2.88-1.01-3.23-1.56.18 1.23.49 2.42.89 3.55-.48.3-.91.67-1.3 1.17a4.519 4.519 0 00-1.019 3.098 3.6 3.599 0 001.42 2.62c.87.68 1.81.88 2.879.68.41-.07.87-.28 1.29-.42-.88 0-1.62-.28-2.36-.87a3.55 3.549 0 01-1.49-2.42c-.2-.94 0-1.81.53-2.579.12-.15.25-.28.39-.4.3.73.62 1.45.98 2.12.81 1.23 1.62 2.299 2.43 3.459.35.68.58 1.35.74 2.019a3.899 3.899 0 002.229 1.5c1.15.4 2.35.58 3.579.51h.13a10.197 10.197 0 003.689-.52 4.179 4.179 0 002.16-1.49h.07c.13-.67.35-1.34.67-2.02.799-1.17 1.619-2.229 2.419-3.458A20.995 20.993 0 0024 7.612c-.43.6-1.44 1.13-3.25 1.54z">
            </path>
          </motion.svg> */}
          <div>We Dream Of Coffee</div>
        </div>

        <nav className='col-span-1 lg:col-span-6'>
          <ul className='flex justify-end items-center space-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <DarkModeButton />
          </ul>
        </nav>
      </div>
    </header>
  );
}