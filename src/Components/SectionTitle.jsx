const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-2/3 md:w-1/2 lg:w-4/12 mx-auto text-center mb-5 md:mb-10 lg:mb-12 mt-8 md:mt-12 lg:mt-24">
      <p className="text-[16px] lg:text-[20px] text-yellow-500 pb-2 lg:pb-4">
        ---{subHeading}---
      </p>
      <h3 className="text-xl md:text-2xl lg:text-4xl uppercase border-y-2 lg:border-y-4 border-gray-500 py-2 lg:py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
