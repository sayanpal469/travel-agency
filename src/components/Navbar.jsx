import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";

const navigation = [
  { name: "About", href: "#about", current: false },
  { name: "Gallery", href: "#gallery", current: false },
  { name: "Why Us", href: "#whyUs", current: false },
  { name: "Tours", href: "#tour", current: false },
  { name: "Review", href: "#review", current: false },
  { name: "Contact Us", href: "#contact", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(logo);

  return (
    <Disclosure
      as="nav"
      className={`transition-colors lg:mt-5 sticky top-0 z-50 duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-20">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    src={logo}
                    alt="Description of the image"
                    className="h-8 mr-2 lg:h-11 "
                  />
                  <h1
                    className={`text-2xl ${
                      scrolled ? "text-black" : "text-white"
                    }  lg:text-4xl`}
                  >
                    <a
                      href="#"
                      className={
                        scrolled
                          ? "text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#FF69B4] via-[#E64569] to-[#0ed715b0] "
                          : "text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#E64569] via-[#E64569] to-green-500"
                      }
                    >
                      IndiaXplorers
                    </a>
                  </h1>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <ScrollLink
                        key={item.name}
                        to={item.href.substring(1)} // Remove the '#' symbol
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Set the scroll duration in milliseconds
                        className={
                          item.current
                            ? "bg-gradient-to-r from-[#FF69B4] via-[#df93a4] to-[#79df7cb0] text-white font-semibold px-3 py-2 rounded-md cursor-pointer"
                            : `${
                                scrolled ? "text-black" : "text-white"
                              } px-3 py-2 text-sm font-medium cursor-pointer`
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-white">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " bg-[#E64569] text-black"
                      : "text-black-300 hover:bg-pink-200 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
