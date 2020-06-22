import React from "react";
import fourmain from "../assets/fourmain.png";
const FourIntroducing = () => {
  return (
    <div className="mt-16 welcomebg w-full relative ">
      <div className=" flex flex-col items-start p-10 w-7/12">
        <div className="text-xl text-white font-bold leading-none">
          Introducing MagDoc
        </div>
        <div className="text-xs leading-tight  text-white py-2">
          MagDoc is an Inbuilt Document Reader in MagTapp which can read PDF,
          PPTX, Word & Excel files. JustTap on words in MagDoc to find its
          Visual Meaning. User's can even Listen & Translate Documents
        </div>
        <div className="flex mt-5 ">
          <div className="mx-2">
            <div className="rounded-full bg-white h-5 w-5 text-sm text-blue-600 text-center">
              1
            </div>
          </div>

          <div className="">
            <div className="text-white text-sm leading-none font-bold">
              Edit Document
            </div>

            <p className="text-xs leading-tight  text-white py-2">
              Edit document, Add text, Highlight text, Outline text, Sign
              Documents and save it as a new document
            </p>
          </div>
        </div>
        <div className="flex mt-5 ">
          <div className="mx-2">
            <div className="rounded-full bg-white h-5 w-5 text-sm text-blue-600 text-center">
              2
            </div>
          </div>

          <div className="">
            <div className="text-white text-sm leading-none font-bold">
              MagTap Mode
            </div>
            <p className="text-xs leading-tight  text-white py-2">
              Magtapp Mode On (On Icon) Long Press For Visual Meanings Magtapp
              Mode Off (Off Icon) Select Content To Translate, Listen & Copy.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 absolute fourillustration mr-5 w-48  sm:block">
        <img src={fourmain} />
      </div>
    </div>
  );
};

export default FourIntroducing;
