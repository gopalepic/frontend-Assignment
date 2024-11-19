import Logo from "../assets/Images/Logo.svg";
import vein from "../assets/Images/vein.png";
import dropdown from "../assets/Images/dropdown.svg";
const SelectOrganization = ["Peak Align FY 24-25"];
import closingBar from "../assets/Images/closingMenu.svg";
import Menu from "../Components/Menu";

// Selection of the organizations
export const mappedOrganizations = SelectOrganization.map((organization) => {
  return <option key={organization}>{organization}</option>;
});

export const SideBar = () => {
  return (
    <div className=" bg-[#f9f8f8] p-5 h-screen border">
      {/*       Top left Side Bar Header */}
      <div className="flex items-center justify-between w-60 ">
        <div>
          <img src={Logo} className="" />
        </div>
        <div className="">
          <img className="  h-7  " src={closingBar} />
        </div>
      </div>

      {/* Selection of Organization */}

      <div className="gap-12 flex  w-full items-center border rounded-md p-2 my-5">
        <div className="flex items-center ">
          <img src={vein} className="h-5 mr-2" alt="vein" />
          <span className=" font-semibold text-[#084545]">
            {mappedOrganizations}
          </span>
        </div>

        <img src={dropdown} className="w-5" alt="dropdown" />
      </div>

      <div>
        <Menu />
      </div>
    </div>
  );
};
