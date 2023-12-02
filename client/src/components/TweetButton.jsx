function TweetButton({ img, title, className }) {
  return (
    <button className="bg-[#1d9bf0]  rounded-full xl:w-full text-center">
      <img src={img} alt="" className={`${className} xl:hidden text-white`} />

      <p className="hidden xl:flex p-3 flex justify-center ">{title}</p>
    </button>
  );
}

export default TweetButton;
