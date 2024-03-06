import * as React from "react";

const ImageComponent = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const ServiceCard = ({ imageSrc, title, alt }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow mt-6 text-base font-extrabold tracking-tight text-center text-black whitespace-nowrap max-md:mt-10">
      <ImageComponent
        src={imageSrc}
        alt={alt}
        className="w-full aspect-[0.79]"
      />
      <div className="justify-center items-center px-16 py-4 mt-4 bg-green-400 rounded-lg max-md:px-5">
        {title}
      </div>
    </div>
  </div>
);

const UserDashboard = () => {
  const services = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7cf9c8fe510454eafb1aa9f8d7d86a27fe611b8202406a57e93af6b85e07cdf6?apiKey=c564a9e9399f4aec9f9b0e5761417db3&",
      title: "ESG",
      alt: "Environmental Social Governance",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9875d572f5b67b273ed85d09baa86b2fdfa193e34c50d8f0e6e346f5777c52b0?apiKey=c564a9e9399f4aec9f9b0e5761417db3&",
      title: "Wealth Management",
      alt: "Graph indication wealth management",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c0112ecfa6681e92e661f60b2a196a458b12f486e2bb33d6a4e2085080397d31?apiKey=c564a9e9399f4aec9f9b0e5761417db3&",
      title: "Investment Management",
      alt: "Charts indicating investment management",
    },
  ];

  return (
    <main className="flex gap-5 justify-between pr-7 bg-[linear-gradient(246deg,#000_-3.94%,#0E2204_163.81%)] max-md:flex-wrap max-md:pr-5">
      <aside className="hidden max-md:flex flex-col items-center px-3.5 py-9 text-sm font-extrabold tracking-tight leading-5 text-center text-white whitespace-nowrap bg-white basis-0">
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/216ba6acc2f37087b5ab63dc3b8003f46dd64b66b2d40284d91a52509b31d4ab?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
          alt="Logo 1"
          className="w-12 aspect-[1.45]"
        />
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b34bc2d0-c2ce-4857-a2d4-613eabc28761?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
          alt="Logo 2"
          className="mt-10 w-12 aspect-[1.2]"
        />
        <div className="self-stretch mt-4">
          Add <br /> Activity
        </div>
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b719f0c147cf0148e7fcfc5992e8c88ef2d2a78b384fb25e9b5a1efe410c964?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
          alt="Timer icon"
          className="aspect-[0.96] mt-[719px] w-[23px] max-md:mt-10"
        />
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec7706f6d4678a510987d32aff131f257a8f8823e881a0ef6a30fb96436f0673?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
          alt="Settings icon"
          className="mt-4 w-7 aspect-square"
        />
      </aside>
      <section className="flex flex-col flex-1 self-start mt-6 max-md:max-w-full">
        <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3.5 my-auto text-2xl tracking-tight whitespace-nowrap text-white text-opacity-90">
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f01838b57e8501c3e23844f4e8a9857ef86ef2cc28890c434f7be423bc548188?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
              alt="Company logo"
              className="aspect-[1.08] w-[46px]"
            />
            <div className="grow my-auto">Investment . AI</div>
          </div>
          <div className="flex gap-5 justify-between text-xl font-medium tracking-wide leading-5 text-green-400">
            <div className="flex gap-4 px-5 py-2 my-auto bg-green-900 rounded-lg">
              <ImageComponent
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/016382bef996fd0beff136884e8ff42240f091e86b23d0b2ae960dfce96757c5?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
                alt="Clock icon"
                className="aspect-[0.81] w-[26px]"
              />
              <div className="my-auto">00:05:10 </div>
            </div>
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d022ea0d1d182f312a0bc1035a6d25077625e2b849e853a2b3b410efd87ad2f6?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
              alt="User profile"
              className="rounded-full aspect-square w-[60px]"
            />
          </div>
        </header>
        <div className="flex flex-col self-center mt-24 max-w-full w-[792px] max-md:mt-10">
          <h1 className="self-start ml-7 text-4xl font-bold text-green-400 whitespace-nowrap max-md:ml-2.5">
            <span className="font-medium">Hello </span>
            <span className="font-medium text-green-400">Vipul,</span>
          </h1>
          <p className="self-start mt-4 ml-7 text-4xl text-white text-opacity-60 max-md:max-w-full">
            How can I help you today?
          </p>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {services.map(({ imageSrc, title, alt }, index) => (
              <ServiceCard
                key={index}
                imageSrc={imageSrc}
                title={title}
                alt={alt}
              />
            ))}
          </div>
          <div className="flex gap-5 justify-between items-start mt-12 text-base font-medium tracking-tight text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex-auto mt-3.5 text-center">
              Generate AI Software
            </div>
            <div className="flex-auto self-stretch">Generate AI Image</div>
            <div className="flex-auto mt-3.5 text-center">
              Generate Investment Stats
            </div>
          </div>
        </div>
        <footer className="flex gap-5 justify-between py-6 pr-20 pl-10 mt-24 w-full border border-white border-solid backdrop-blur-[2px] bg-white bg-opacity-30 rounded-[64px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto self-start mt-3.5 text-base font-medium text-white leading-[92.96px]">
            Enter a prompt here...
          </div>
          <div className="flex gap-5 justify-between">
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce87210954a7b58c498e3e68ee7985bfc58a17b3496653946281ea235de1cbd?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
              alt="Search icon"
              className="w-9 aspect-square"
            />
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0647be5864c6978ce37730d4816b43dd12d91b48dcf0f3543ee89d66afb6ba8?apiKey=c564a9e9399f4aec9f9b0e5761417db3&"
              alt="Settings"
              className="w-9 aspect-square"
            />
          </div>
        </footer>
      </section>
    </main>
  );
};

export default UserDashboard;
