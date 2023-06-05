function BinaryRadioBar() {
  return (
    <div className="flex items-center w-[40vw] h-[60px] bg-white my-[26px] justify-between p-[20px] rounded-md">
      <div>Would you recommend the organization as a good place to work?</div>
      <div className="flex flex-wrap w-[253px] justify-evenly">
        <div className="flex items-center mr-4">
          <input
            id="yes"
            type="radio"
            value=""
            name="colored-radio"
            className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            className="ml-2 text-[14px] font-[700px] medium text-gray-900 dark:text-gray-300"
            htmlFor="yes"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="no"
            type="radio"
            value=""
            name="colored-radio"
            className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            className="ml-2 text-[14px] font-[700px] text-gray-900 dark:text-gray-300"
            htmlFor="no"
          >
            No
          </label>
        </div>
      </div>
    </div>
  );
}

export default BinaryRadioBar;
