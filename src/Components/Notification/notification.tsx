import { useState } from 'react';
import close from '../../Components/Assets/close.svg';
import { IoIosArrowDown } from 'react-icons/io';
function Notification() {
  const [hideNotification, SethideNotification] = useState(false);
  const translate = () => {
    SethideNotification(!hideNotification);
  };
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex bg-TK-text justify-between py-[1%] w-full duration-500 ${
          hideNotification ? 'h-0 py-0' : ''
        } `}
      >
        <div
          className={`text-white font-[300] text-[1.3em] flex justify-center w-3/4 mx-[5%]`}
        >
          This banner can be used for any announcement purpose from the company
          side max of 256 characters
        </div>
        <img
          onClick={() => translate()}
          role="button"
          src={close}
          alt=""
          className={`mx-[2%] cursor-pointer`}
        />
      </div>
      <div
        onClick={() => translate()}
        role="button"
        className={` bg-TK-text w-fit items-center justify-center rounded-b-md px-8 transition ease-in-out delay-150 ${
          hideNotification ? '' : 'hidden'
        }`}
      >
        <IoIosArrowDown color="white"></IoIosArrowDown>
      </div>
    </div>
  );
}

export default Notification;
