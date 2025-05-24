import { getDefaultName } from "@/utils/utils";
import React from "react";
type Props = {
   width: number;
   height: number;
   fontSize: number;
   name: string;
};

const DefaultAvatar = ({ width, height, fontSize, name }: Props) => {
   return (
      <div
         className="flex items-center justify-center font-bold rounded-full uppercase overflow-hidden select-none text-white bg-black"
         style={{
            width: width,
            height: height,
            fontSize: fontSize,
         }}
      >
         {getDefaultName(name)}
      </div>
   );
};

export default DefaultAvatar;
