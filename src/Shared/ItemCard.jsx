import Button from "./Button";

const ItemCard = ({ item }) => {
  const { name, image, gradients } = item;
  return (
    <div className="card bg-base-100 shadow-sm bg-slate-800">
      <div>
        <img
          src={image}
          alt="food"
          className="w-full h-[270px] bg-center bg-cover rounded-t-md"
        />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="font-semibold text-[24px]">{name}</h2>
        <p className="font-normal text-[16px]">{gradients}</p>
        <Button title={"add to cart"}></Button>
      </div>
    </div>
  );
};

export default ItemCard;
