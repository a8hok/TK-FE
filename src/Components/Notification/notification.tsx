import close from '../../assets/close.svg';
function Notification() {
  return (
    <div className="flex bg-TK-text justify-between py-[1%] w-full">
      <div className="text-white font-[300] text-[1.3em] flex justify-center w-3/4 mx-[5%]">
        This banner can be used for any announcement purpose from the company
        side max of 256 characters
      </div>
      <img src={close} alt="" className="mx-[2%]" />
    </div>
  );
}

export default Notification;
