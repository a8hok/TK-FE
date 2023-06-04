import close from '../../Components/Assets/close.svg';
function Notification() {
  return (
    <div className="flex bg-TK-text justify-around py-[1%] w-full">
      <div className="text-white font-[300] text-[1.3em] mx-[10%]">
        This banner can be used for any announcement purpose from the company
        side max of 256 characters
      </div>
      <img src={close} alt="" />
    </div>
  );
}

export default Notification;