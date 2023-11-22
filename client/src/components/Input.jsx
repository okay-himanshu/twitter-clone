function Input({ type, placeholder, title, handleChange }) {
  return (
    <label className="mt-4 mb-4 relative block overflow-hidden rounded-md border-[0.5px] border-gray-600 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
      <input
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className="peer h-12 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
      />

      <span className="absolute start-3 top-3 -translate-y-1/2  text-gray-400 transition-all peer-placeholder-shown:top-1/2  peer-focus:top-3 ">
        {title}
      </span>
    </label>
  );
}

export default Input;
