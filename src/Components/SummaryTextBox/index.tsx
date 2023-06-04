function SummaryTextBox() {
  return (
    <div>
      <p className="block  text-[16px] font-[400] text-gray-900 dark:text-white my-[25px]">
        The main reason I decided to leave was:
      </p>
      <textarea
        id="message"
        className="block p-2.5 w-[40vw] h-[105px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
}

export default SummaryTextBox;
