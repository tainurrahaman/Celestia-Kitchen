import { Parallax } from "react-parallax";

const MenuCategoryCover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div className="hero h-[500px]">
          {/* <div className="hero-overlay"></div> */}
          <div className="hero-content text-neutral-content text-center">
            <div className=" bg-black bg-opacity-50 px-48 py-16 rounded-sm">
              <h1 className="mb-5 text-5xl font-semibold uppercase">{title}</h1>
              <p className="mb-5 text-lg font-semibold">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuCategoryCover;
