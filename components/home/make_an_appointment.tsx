import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import * as React from 'react';


export interface MakeAnAppointmentProps {}
const MakeAnAppointment: React.FC<MakeAnAppointmentProps> = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    cat: "",
    doc: "",
    date: new Date(),
  });

  return (
    <div className="flex flex-col-reverse md:flex-row container mx-auto px-4 lg:px-10 xl:px-20 py-10 md:h-[700px]">
      <div className="flex-1 bg-slate-300 px-4 lg:px-8 xl:px-10  text-center md:text-start">
        <div className="text-tertiary py-2 pt-8">Make an appointment</div>
        <div className=" text-[28px] md:text-[38px] lg:text-[45px] py-2">
          Make an Appointment to Doctor Visit
        </div>
        <div className="flex flex-col gap-4 leading-1">
          <div className="flex flex-col gap-2">
            <div className="rounded-full overflow-hidden ">
              <input
                className="h-16 md:h-20 w-full px-4 md:px-6 lg:px-8 xl:px-10 text-lg md:text-3xl xl:text-5xl"
                placeholder="Your full name "
                onChange={(evt)=>{setUserInfo({...userInfo,name:evt.target.value})}}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-[60px] overflow-hidden ">
              <Select value={userInfo.cat} label="Service category" variant="standard" className="w-full h-16 md:h-20 bg-white text-lg md:text-3xl xl:text-5xl "  disableUnderline={true}  onChange={(evt)=>{setUserInfo({...userInfo,cat:evt.target.value})}}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            
            <div className="rounded-[60px] overflow-hidden ">
              <Select variant="standard" value={userInfo.cat} label="Choose Doctor" className=" w-full h-16 md:h-20 bg-white text-lg md:text-3xl xl:text-5xl " disableUnderline={true} onChange={(evt)=>{setUserInfo({...userInfo,cat:evt.target.value})}}>
                <MenuItem value={10}>Malai</MenuItem>
                <MenuItem value={20}>Vignesh</MenuItem>
                <MenuItem value={30}>Naveen</MenuItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
           
            <div className="rounded-full overflow-hidden ">
                 <div className="rounded-full overflow-hidden ">
                <input type="date"
                className="h-16 md:h-20 w-full px-4 md:px-6 lg:px-8 xl:px-10 text-lg md:text-3xl xl:text-5xl"
                placeholder="Choose date "
                onChange={(evt)=>{setUserInfo({...userInfo,name:evt.target.value})}}
                />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full h-72 md:h-full bg-green-200 ">
        <img src="/assets/images/make_appointment.jpg" alt="" className="h-72 object-top md:object-center md:h-full w-full object-cover" />
      </div>
    </div>
  );
};
export default MakeAnAppointment;
