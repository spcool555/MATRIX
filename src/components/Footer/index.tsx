"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <h2 style={{ color: "#F6A705", fontSize: "36px" }}>
                    Matrix Incorporation
                  </h2>
                </Link>
                <p className="mb-1 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Off & Work
                </p>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Unit No.4-3-2/3 Near Janta Weight Bridge,Chincholi
                  Road,Telangana State-501141{" "}
                </p>
                <p className="mb-1 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  REGISTERED ADDRESS
                </p>

                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  #20-4-529/5&amp;6 Chowmohalla Palace Hyderabad-500002
                  Telangana State India{" "}
                </p>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Mob No.+91-7780599423 / +91-9052729776 Skype / WhatsApp /
                  wechat: +91-9052729776 Tel No. +91-40-31603812 Fax No.
                  +91-40-31603812{" "}
                <br />   Email:-  matrixhpc@gmail.com  matrixhpcomponents@gmail.com <br />
                  sales@incorporation.com <br />
                  exports@incorporation.com 
                  
                </p>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                 Website:-  www.matrixincorporation.com
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.055 2.007.24 2.478.41a4.91 4.91 0 011.675 1.074 4.91 4.91 0 011.073 1.675c.17.471.356 1.272.41 2.478.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.206-.24 2.007-.41 2.478a4.91 4.91 0 01-1.074 1.675 4.91 4.91 0 01-1.675 1.073c-.471.17-1.272.356-2.478.41-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.055-2.007-.24-2.478-.41a4.91 4.91 0 01-1.675-1.073 4.91 4.91 0 01-1.073-1.675c-.17-.471-.356-1.272-.41-2.478-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.206.24-2.007.41-2.478a4.91 4.91 0 011.074-1.675 4.91 4.91 0 011.675-1.074c.471-.17 1.272-.356 2.478-.41C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.738 0 8.332.013 7.052.072 5.78.132 4.732.304 3.877.612a6.907 6.907 0 00-2.518 1.642 6.907 6.907 0 00-1.642 2.518c-.308.855-.48 1.903-.54 3.175C-.013 8.332 0 8.738 0 12s.013 3.668.072 4.948c.06 1.272.232 2.32.54 3.175a6.907 6.907 0 001.642 2.518 6.907 6.907 0 002.518 1.642c.855.308 1.903.48 3.175.54C8.332 23.987 8.738 24 12 24s3.668-.013 4.948-.072c1.272-.06 2.32-.232 3.175-.54a6.907 6.907 0 002.518-1.642 6.907 6.907 0 001.642-2.518c.308-.855.48-1.903.54-3.175.06-1.28.072-1.686.072-4.948s-.013-3.668-.072-4.948c-.06-1.272-.232-2.32-.54-3.175a6.907 6.907 0 00-1.642-2.518 6.907 6.907 0 00-2.518-1.642c-.855-.308-1.903-.48-3.175-.54C15.668.013 15.262 0 12 0z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.996 3.996 0 110-7.992 3.996 3.996 0 010 7.992z"
                        fill="currentColor"
                      />
                      <circle
                        cx="18.406"
                        cy="5.594"
                        r="1.44"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.148-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.256-.464-2.39-1.479-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.917-2.207-.242-.58-.487-.5-.67-.51-.173-.007-.371-.009-.57-.009-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.099 3.202 5.086 4.488.711.307 1.263.489 1.695.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.273-.198-.57-.347zM12.02 2C6.477 2 2 6.477 2 12.02c0 2.121.652 4.09 1.77 5.73L2 22l4.392-1.75c1.602.878 3.401 1.37 5.628 1.37C17.565 21.62 22 17.185 22 12.02 22 6.477 17.522 2 12.02 2z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.004 0C5.373 0 0 5.373 0 12.004 0 17.162 3.434 21.379 8.188 23c-.113-.96-.215-2.435.044-3.486.236-.97 1.528-6.545 1.528-6.545s-.389-.78-.389-1.934c0-1.813 1.051-3.169 2.36-3.169 1.11 0 1.646.833 1.646 1.831 0 1.116-.711 2.787-1.077 4.337-.31 1.305.656 2.367 1.947 2.367 2.336 0 3.917-3.005 3.917-6.558 0-2.716-1.828-4.747-5.146-4.747-3.74 0-6.08 2.797-6.08 5.903 0 1.085.318 1.854.818 2.442.228.271.26.38.178.691-.058.229-.194.786-.25 1.007-.081.31-.335.42-.617.304-1.726-.705-2.512-2.588-2.512-4.711 0-3.5 2.957-7.688 8.805-7.688 4.713 0 7.807 3.412 7.807 7.084 0 4.826-2.696 8.423-6.66 8.423-1.338 0-2.594-.727-3.021-1.555l-.82 3.131c-.297 1.144-1.103 2.575-1.647 3.448C9.062 23.727 10.511 24 12.005 24 18.635 24 24 18.63 24 12.004 24 5.373 18.635 0 12.004 0z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Home
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Technical Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Clients & Projects
                </h2>
                <ul>
                  <li>
                    <Link
                      href="certification"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Certification
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Enquiry
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Brands
                </h2>
                <ul>
                  <li>
                    <Link
                      href="#"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Sorbplus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Strong Ply
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              © Copyright{" "}
              <a
                href="http://uideck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <span style={{ color: "#F6A705" }}> Matrix Incorporation </span>{" "}
                All Rights Reserved
              </a>{" "}
            </p>
            <p className="text text-base text-body-color dark:text-white">
              Developed by{" "}
              <a
                style={{ color: "blue" }}
                href="http://uideck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Kstar Technology
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
