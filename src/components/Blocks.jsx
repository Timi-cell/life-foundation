export const InfoBlock = ({ icon, heading, text }) => {
  return (
    <div className="bg-gray-100 hover:text-white infoblock hover:bg-yellow-300 flex flex-col items-center h-80 justify-between gap-4 p-5">
      <img src={icon} alt={heading} />
      <h3 className="text-base sm:text-lg md:text-xl">{heading}</h3>
      <p className="text-base">{text}</p>
    </div>
  );
};

export const ImageBlock = ({ image, text }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-full h-full relative">
      <img className="h-full w-full" src={image} alt={text} />
      <div className="bg-gradient-to-t from-black h-full w-full absolute top-0">
        <p className="absolute bottom-4 left-2/4 -translate-y-1/2 -translate-x-1/2 lg:text-lg text-sm sm:text-base mt-2 text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export const BlogBlock = ({ image, date, heading, text }) => {
  return (
    <div className="relative flex flex-col justify-between items-start gap-4 md:gap-8 text-left w-full rounded-lg overflow-hidden border-gray-300 border border-">
      <div className="h-80 bg-gray-300 w-full">
       {image ? <img src={image} alt={heading} className="w-full h-full" /> : ""}
      </div>
      <p className="absolute lg:text-sm text-xs top-4 left-4 bg-blue-700 text-white p-2 rounded-lg">
        {date}
      </p>
      <div className="px-4 pb-2 flex flex-col justify-between h-auto md:h-3/4">
        <h2 className="text-xl sm:text-2xl md:text-3xl">{heading}</h2>
        <p className="lg:text-lg text-sm sm:text-base md:mt-0 mt-2">{text}</p>
        <div>
          <hr className="md:mt-0 mt-6" />
          <div className="mt-1 cursor-pointer flex flex-row justify-between gap-4 items-center">
            <p className="lg:text-lg text-sm sm:text-base">READ MORE</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.125 4.69994L19.725 11.2999C19.825 11.3999 19.896 11.5083 19.938 11.6249C19.98 11.7416 20.0007 11.8666 20 11.9999C20 12.1333 19.979 12.2583 19.937 12.3749C19.895 12.4916 19.8243 12.5999 19.725 12.6999L13.125 19.2999C12.9417 19.4833 12.7123 19.5789 12.437 19.5869C12.1617 19.5949 11.9243 19.4993 11.725 19.2999C11.525 19.1166 11.4207 18.8873 11.412 18.6119C11.4033 18.3366 11.4993 18.0993 11.7 17.8999L16.6 12.9999L5.42498 12.9999C5.14165 12.9999 4.90399 12.9039 4.71199 12.7119C4.51998 12.5199 4.42432 12.2826 4.42498 11.9999C4.42498 11.7166 4.52065 11.4789 4.71199 11.2869C4.90332 11.0949 5.14098 10.9993 5.42498 10.9999L16.6 10.9999L11.7 6.09994C11.5167 5.91661 11.4207 5.68327 11.412 5.39994C11.4033 5.1166 11.4993 4.88327 11.7 4.69994C11.8833 4.49994 12.1167 4.39994 12.4 4.39994C12.6833 4.39994 12.925 4.49994 13.125 4.69994Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlexBlock = ({ image, heading, text, reverse }) => {
  return (
    <div
      className={`flex ${reverse ? "flex-col-reverse" : "flex-col"} ${
        reverse ? `md:flex-row-reverse` : "md:flex-row"
      } items-start md:items-center gap-4 md:gap-8 mt-10 md:mt-20`}
    >
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl md:text-3xl">{heading}</h2>
        <p className="mt-5 leading-7 lg:text-lg text-sm sm:text-base">{text}</p>
      </div>
      <img src={image} alt={heading} className="md:w-1/2 w-full h-full" />
    </div>
  );
};