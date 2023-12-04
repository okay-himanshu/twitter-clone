function UserImg({ img }) {
  return (
    <div className="flex justify-center xl:justify-start">
      <img src={img} alt="" className=" rounded-full h-8 w-8" />
    </div>
  );
}

export default UserImg;
