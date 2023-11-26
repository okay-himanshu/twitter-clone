function TweetButton({ img }) {
  return (
    <button className="bg-[#1d9bf0] p-1  rounded-full">
      <img src={img} alt="" className=" p-3 text-white" />
    </button>
  );
}

export default TweetButton;
