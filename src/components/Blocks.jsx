import { Link } from "react-router-dom";

export const InfoBlock = ({ icon, heading, text }) => {
  return (
    <div className="bg-gray-100 rounded-md hover:text-white infoblock hover:bg-yellow-300 transition-all delay-100 ease-in flex flex-col items-center h-full justify-between gap-4 p-5">
      <img src={icon} alt={heading} />
      <h3 className="text-base sm:text-lg md:text-xl">{heading}</h3>
      <p className="text-base">{text}</p>
    </div>
  );
};

export const ImageBlock = ({ image, heading, text }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-full h-full relative">
      <img className="h-full w-full" src={image} alt={heading} />
      <div className="bg-gradient-to-t from-black h-full w-full absolute top-0">
        <div className="absolute bottom-2 left-2/4 -translate-y-1/2 -translate-x-1/2 mt-2 text-white w-full px-4">
          <h3 className="lg:text-lg text-base sm:text-sm">{heading}</h3>
          <p className="mt-2 text-base sm:text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export const BlogBlock = ({ image, date, heading, text, blogLink }) => {
  return (
    <div className="relative flex flex-col justify-between items-start gap-4 md:gap-8 text-left w-full rounded-lg overflow-hidden border-gray-300 border">
      <div className="h-80 bg-gray-300 w-full">
        {image ? (
          <img src={image} alt={heading} className="w-full h-full" />
        ) : (
          ""
        )}
      </div>
      <p className="absolute lg:text-sm text-xs top-4 left-4 bg-blue-700 text-white p-2 rounded-lg">
        {date}
      </p>
      <div className="px-4 pb-2 flex flex-col justify-between h-auto md:h-3/4">
        <h2 className="text-xl sm:text-2xl md:text-3xl">{heading}</h2>
        <p className="lg:text-lg text-sm sm:text-base md:mt-0 mt-2">{text}</p>
        <div>
          <hr className="md:mt-0 mt-6" />
          <Link to={blogLink}>
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
          </Link>
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

export const TeamMemberBlock = ({ image, name, bio, marginT }) => {
  return (
    <div
      className={`bg-white p-5 flex flex-col md:flex-row justify-content items-start gap-4 md:gap-8 rounded-lg ${
        marginT ? "mt-10" : ""
      }`}
    >
      <div className="h-full w-full md:w-72">
        <img src={image} alt={name} className="w-full h-full" />
      </div>
      <div className="md:w-3/5 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl">{name}</h1>
        <p className="lg:text-lg text-sm sm:text-base mt-2 text-gray-600">
          {bio}
        </p>
      </div>
    </div>
  );
};

export const BlogsPostBlock = ({
  image1,
  smallTitle,
  title,
  date,
  text1,
  image2,
  image3,
  image4,
  image5,
  text2,
}) => {
  return (
    <section className="mt-32 px-4 md:px-8 mb-8">
      <div className="flex flex-row gap-4 items-start justify-start">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <p>&gt;</p>
        <Link to={"/blog"}>
          <p>Blog</p>
        </Link>
        <p>&gt;</p>
        <p>{smallTitle}</p>
      </div>
      <div className="md:w-[32rem] w-full mt-10">
        <img
          src={image1}
          alt="smallTitle"
          className="w-full h-full md:h-[378px]"
        />
      </div>
      <h1 className="mt-5 text-2xl sm:text-3xl">{title}</h1>
      <div className="flex flex-col justify-start items-start gap-5">
        <p className="mt-3 md:w-3/4 w-full break-words">{text1}</p>
        <div class="flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="md:w-1/2 w-full">
            <img src={image2} alt="image2" className="w-full" />
          </div>
          <div className="md:w-1/2 w-full">
            <img src={image3} alt="image3" className="w-full" />
          </div>  
        </div>
        <p className="mt-3 md:w-3/4 w-full break-words">{text2}</p>
       {image4 && image5 ?  <div class="flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="md:w-1/2 w-full">
            <img src={image4} alt="image3" className="w-full" />
          </div>
          <div className="md:w-1/2 w-full">
            <img src={image5} alt="image3" className="w-full" />
          </div>
          </div> : ""}
        {/* <form className="w-full md:w-1/2">
            <h2 className="text-2xl lg:text-3xl text-left">
             Post a comment
            </h2>
            <p className="mt-1">Your email address will not be published</p>
            <div className="mt-4">
              <label htmlFor="comment">Comment*</label>
              <textarea
                id="comment"
                cols="20"
                 required
                rows="5"
                className="w-full block mt-1 rounded-lg placeholder:text-gray-600"
              ></textarea>
            </div>
            <div className="flex flex-col mt-4 md:flex-row justify-start items-start gap-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full block mt-1 rounded-lg placeholder:text-gray-600"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="email">E-mail Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full block mt-1 rounded-lg placeholder:text-gray-600"
                  required
                />
              </div>
            </div>
            <button className="px-6 py-3 mt-4 lg:text-lg text-sm sm:text-base bg-yellow-300 text-white rounded-md transition-all delay-100 ease-in hover:bg-yellow-400  hover:border-yellow-400 focus:bg-yellow-500 focus:border-yellow-500">
             Post
            </button>
          </form> */}
      </div>
    </section>
  );
};
