function RadioBar() {
  return (
    <div>
      <div className="flex items-center pl-4 border border-gray-200   w-[40vw] bg-white my-[25px] h-[60px] rounded-md">
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <polygon className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I am leaving the organization.
        </polygon>
      </div>
    </div>
  );
}

export default RadioBar;
