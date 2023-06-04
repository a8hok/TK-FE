function ProgressBar() {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-[#2DAF52] h-2.5 rounded-full"
          style={{ width: '45%' }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
