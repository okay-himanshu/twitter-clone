function ReminderButton({ title, className = "", handleClick, icon }) {
  return (
    <div>
      <button
        className={`${className}  rounded-full border hover:bg-[#3b3b4238]  p-2.5 xl:p-0 w-full flex justify-center`}
        onClick={handleClick}
      >
        <p className="hidden xl:flex p-3"> {title}</p>{" "}
        <p className="flex xl:hidden p-2">{icon}</p>
      </button>
    </div>
  );
}

export default ReminderButton;
