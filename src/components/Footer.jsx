import logo from "../assets/logo.png";
import { BsWhatsapp } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 bg-slate-100">
          <div className="grid grid-cols-1  sm:grid-cols-2">
            <div className="lg:ml-[5rem]">
              <p>
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  Call us
                </span>

                <a
                  href="#"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                >
                  9088844432
                </a>
              </p>

              <ul className="mt-8 space-y-1 text-sm text-gray-700">
                <li>Monday to Friday: 10am - 5pm</li>
                <li>Weekend: 10am - 3pm</li>
              </ul>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61550237266629&mibextid=ZbWKwL"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/india_xplorers/?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/9088844432" // Replace with your WhatsApp number
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <BsWhatsapp className="w-[20px] h-[22px]"></BsWhatsapp>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-gray-500">Useful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#gallery"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <ScrollLink
                        to={"gallery"} // Remove the '#' symbol
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Set the scroll duration in milliseconds
                        
                      >
                        Gallery
                      </ScrollLink>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#tour"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <ScrollLink
                        to={"tour"} // Remove the '#' symbol
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Set the scroll duration in milliseconds
                        
                      >
                        Tours
                      </ScrollLink>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#review"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <ScrollLink
                        to={"review"} // Remove the '#' symbol
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Set the scroll duration in milliseconds
                        
                      >
                        Review
                      </ScrollLink>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <ScrollLink
                        to={"about"} // Remove the '#' symbol
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Set the scroll duration in milliseconds
                        
                      >
                        About
                      </ScrollLink>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-300 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-start items-center">
                <img className="h-8 mr-2 lg:h-11 " src={logo} alt="" />
                <h1 className="text-2xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#E64569] via-[#E64569] to-green-500">
                  IndiaXplorers
                </h1>
              </div>
              <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                &copy; 2023. IndiaXplorers. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
