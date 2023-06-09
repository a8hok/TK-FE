interface QuestionData {
  questionProp: string;
}
function SurveyRadioBar(props: QuestionData) {
  console.log(props);
  return (
    <div className="w-[40vw]  bg-white my-[26px] justify-between rounded-xl">
      <div className="flex items-center w-[40vw] h-[60px] bg-white my-[26px] justify-between ">
        <p className="text-[16px] font-[400] ml-[10px]">{props.questionProp}</p>

        <div className="grid w-[15rem]  grid-cols-5 rounded-xl">
          {[1, 2, 3, 4, 5].map(choice => (
            <div className=" relative top-[-1.1em]" key={choice}>
              <input
                id="country-option-4"
                type="radio"
                name="countries"
                value={choice}
                className="w-10 h-[40px] absolute z-1 text-green-600 bg-gray-100 border-gray-300 focus:ring-[#2DAF52] dark:focus:ring-[#2DAF52] dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="absolute top-[5px] z-1 left-4 text-[14px] text-[#34465D] "
                style={{ fontWeight: 700 }}
              >
                {choice}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SurveyRadioBar;
