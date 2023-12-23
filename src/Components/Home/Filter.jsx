import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import HomeSidebar from "./HomeSidebar";
import {
  FilterIcon,
  MenuDrownDownArrowWhiteIcon,
} from "../../Assets/svg/Icons";

const Filter = () => {
  return (
    <div>
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="border flex items-center gap-2 bg-[#050505] justify-center px-4 sm:px-5 text-white h-11 rounded-[30px] sm:rounded-[50px] hover:bg-[#7064e5] transition-all duration-200 ease-in-out">
                  <span className="flex items-center gap-2">
                    <FilterIcon />
                    <span className="max-sm:hidden">Filter</span>
                  </span>
                  <span
                    className={`${
                      open ? "rotate-180" : "rotate-0"
                    } transition duration-300 ease-in-out`}
                  >
                    <MenuDrownDownArrowWhiteIcon />
                  </span>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 z-50 origin-top-right shadow-xl bg-white border-[2px] rounded-xl">
                  <div>
                    <HomeSidebar />
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Filter;
