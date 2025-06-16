import Button from "../../Shared/Button";

const FoodCard = ({ items }) => {
  const { name, image, recipe, price } = items;
  return (
    <div className="card bg-base-100 shadow-sm bg-slate-800">
      <div>
        <img
          src={image}
          alt="food"
          className="w-full h-[210px] bg-center bg-cover rounded-t-md"
        />
      </div>
      <p className="absolute right-0 bg-slate-800 mt-2 mr-2 px-2 rounded-sm font-semibold">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-[20px]">{name}</h2>
        <p className="font-normal text-[16px] text-gray-300">{recipe}</p>
        <Button title={"add to cart"}></Button>
      </div>
    </div>
  );
};

export default FoodCard;
