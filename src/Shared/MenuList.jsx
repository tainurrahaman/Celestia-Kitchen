const MenuList = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex gap-2 mt-7 md:mt-10">
      <img
        src={image}
        alt="Food Image"
        className="w-[80px] h-[80px] md:h-auto lg:w-[120px] rounded-b-full rounded-tr-full "
      />
      <div className="pl-2 lg:pl-5 space-y-1 lg:space-y-2">
        <h3 className="text-[17px] font-semibold md:font-normal md:text-[20px]">
          {name}
        </h3>
        <p className="text-[14px] md:text-[16px]">{recipe}</p>
      </div>
      <p className="font-semibold text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuList;
