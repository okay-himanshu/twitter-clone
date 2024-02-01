function UserImg({ img, handleClick }) {
  return (
    <div
      className="flex justify-center xl:justify-start cursor-pointer"
      onClick={handleClick}
    >
      <img src={img} alt="" className=" rounded-full h-8 w-8" />
    </div>
  );
}

export default UserImg;
