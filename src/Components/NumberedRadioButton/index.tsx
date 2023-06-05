function SurveyRadioBar() {
  return (
    <div className="flex items-center w-[40vw] h-[60px] bg-white my-[26px] justify-between p-[20px] rounded-md">
      <div className="flex items-center w-[40vw] h-[60px] bg-white my-[26px] justify-between">
        <p className="text-[16px] font-[400]">
          The {"organization's"} vision/mission/goals inspire me and help me be
          more productive.
        </p>
        <form>
          <div className="grid w-[15rem] grid-cols-5 rounded-xl p-2">
            {[1, 2, 3, 4, 5].map(choice => (
              <div className="m-1" key={choice}>
                <input
                  type="radio"
                  name="option"
                  id={String(choice)}
                  className="peer hidden"
                />
                <label className="blockpointer cursor- select-none rounded-full p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white border-black border-2">
                  {choice}
                </label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SurveyRadioBar;
