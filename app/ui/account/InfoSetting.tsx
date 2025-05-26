"use client";

import React from "react";
import InfoSettingForms from "./InfoSettingForms";

interface InfoSettingProps {
  title: string;
  descriptions: string[];
};

function InfoSetting({ title, descriptions } : InfoSettingProps) {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <>
      {showForm && (
        <div className="bg-gray-800/50 fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
          <div className="p-10 z-50 flex items-center justify-center bg-white flex flex-col rounded-4xl">
            <InfoSettingForms type={title.toLowerCase().replace(" ", "")} />
            <button type="button" onClick={() => setShowForm(false)} className="ml-2 text-gray-600 cursor-pointer">Cancel</button>
          </div>
        </div>
      )}
      <div className="w-1/3">
        <div className="font-semibold">{title}</div>
        <div >
          {descriptions.map((desc, index) => 
          <div key={index}>
            {desc}
          </div>)}
        </div>
        <button onClick={() => setShowForm(true)} className="text-blue-600 text-sm cursor-pointer hover:underline">Edit</button>
      </div>
    </>
  );
}

export default InfoSetting;