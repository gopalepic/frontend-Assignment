import React from "react";
import two from "../assets/Images/two.svg";
import filter from "../assets/Images/filter.svg";
import searchIcons from "../assets/Images/SearchIcon.svg";
import { TextField } from "@radix-ui/themes";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
export const Objectives = () => {
  return (
    <Tabs defaultValue="main" className="text-[#0a0b0b] ">
      <TabsList color="blue" >
        <TabsTrigger
          value="main"
          className="text-[#084545] font-medium rounded-md px-4 py-2"
        >
          OKR
        </TabsTrigger>
        <TabsTrigger
          value="alignment"
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-md px-4 py-2"
        >
          Alignment Visualization
        </TabsTrigger>
        <TabsTrigger
          value="stats"
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-md px-4 py-2"
        >
          Statistic
        </TabsTrigger>
        <TabsTrigger
          value="feedback"
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-md px-4 py-2"
        >
          Feedback and Comment
        </TabsTrigger>
      </TabsList>
      <TabsContent value="main" className="flex justify-between items-center">
        <div className="flex items-center  gap-2 p-3 ">
          <img src={two} className="w-6 rounded-full " />
          <div className="text-xl">
            Objectives result for:{" "}
            <span className="text-[#949494] text-base font-semibold">
              "My individual OKR in 17/10/2024"
            </span>
          </div>
        </div>
        <div className=" flex  gap-4 pr-[1.5vw]">
          <div  className=" rounded-2xl " >
            <TextField.Root   placeholder="Search here ">
              <TextField.Slot>
                <img src={searchIcons} className="p-2 rounded-3xl  "/>
              </TextField.Slot>
            </TextField.Root>
          </div>
          <div className="flex border rounded-xl p-2">
            <img src={filter} />
            Filter
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};
