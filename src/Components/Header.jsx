import target from "../assets/Images/target.svg";
import search from "../assets/Images/search.svg";
import notification from '../assets/Images/notification.svg'
import character from '../assets/Images/profilecharacter.svg'
export const Header = () => {
  return (
    <div className="text-[#555455] flex items-center  justify-between p-3 border">
      <div className="flex  gap-3 w-[41%] ">
        <img src={target} />
        <div> OKR Management</div>
      </div>
      <div className=" w-[41%] flex gap-4  ">
        <input
          type="text"
          placeholder="Search or type anything here"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button className="">
          <img src={search} className="w-7" />
        </button>
        <img src={notification} alt="" />
        <img src={character} alt="" />
      
      </div>
    </div>
  );
};
