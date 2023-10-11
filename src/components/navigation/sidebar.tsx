'use client';
import React from 'react'; 
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


interface SidebarProps {
  isOpen: boolean,
  toggleSidebar: () => void
};

// Sidebar component
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const dynamicLink = (route: string, linkText:string) => {
    return (
      <div className="">
        <Link href={route} className='text-orange-300 hover:text-gray-300 transition duration-300'>
          {linkText}
        </Link>
      </div>
    )
  };

  const sidebarVariants = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  };

  // Handle click outside to close sidebar
  const handleClickOutside = (e: any) => {
    if (e.target.classList.contains('backdrop')) toggleSidebar();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="backdrop fixed inset-0 z-30 bg-black bg-opacity-50" onClick={handleClickOutside}>
          {/* Actual Sidebar */}
          <motion.div
            className="fixed h-screen w-1/6 bg-white z-40 shadow-lg"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sidebarVariants}
          >
            <div className="absolute" >
             
            {/* Close Button */}
            <button className="p-4" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {/* Menu Items */}
            <div className="flex flex-col justify-center h-full space-y-4">
              {dynamicLink("/", "Home")}
              {dynamicLink("/about", "About")}
              {dynamicLink("/services", "Services")}
              {dynamicLink("/contact", "Contact")}
            </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;




// import React, {useState} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Offcanvas, Button }from "react-bootstrap";

// import logo from "../../assets/GPRlogoBlack.png";
// import Image from 'next/image';



// const NavBarMenu = () => {
//   const options = [
//     {
//       name: <FontAwesomeIcon icon="ellipsis" />,
//       scroll: true,
//       backdrop: true,
//     }
//   ];
  
//   function ClickMenu({ name, ...props }: string | any) {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const toggleShow = () => setShow((s) => !s);
  
//     return (
//       <div>
//         <Button variant="primary" onClick={toggleShow} className="me-2">
//           {name}
//         </Button>
//         <Offcanvas show={show} onHide={handleClose} {...props}>
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Our Services</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <ul className='onClick-menu-list'>
//               <li><a>Concrete</a> </li>
//               <li> <a>Shortcrete</a></li>
//               <li> <a>Demolition</a></li>
//             </ul>
//             <div className='onClick-menu-list-nav-links'>
//               <div className='links'>
//                 <a href="/">Home</a>
//                 <a href="/about">About</a>
//                 <a href="/contact">Contact</a>
//               </div>
//             </div>
//             <div className='onClick-menu-logo'>
//               <Image alt="gpr logo" src={logo} />
//             </div>
//           </Offcanvas.Body>
//         </Offcanvas>
//       </div>
//     );
//   }
  
//   function Menu() {
//     return (
//       <div>
//         {options.map((props, idx) => (
//           <ClickMenu key={idx} {...props} />
//         ))}
//       </div>
//     );
//   }
  
//   return (
//     <div>
//       <Menu />
//     </div>
//     );
// }

// export default NavBarMenu;