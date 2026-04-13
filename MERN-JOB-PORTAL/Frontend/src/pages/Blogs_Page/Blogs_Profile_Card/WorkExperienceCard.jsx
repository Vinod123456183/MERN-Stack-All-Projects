import React from "react";
import SmallTechComponent from "../TechComponents/SmallTechComponent";
import img from "../../../assets/about.png";

function WorkExperienceCard() {
  return (
    <div className=" border border-gray-300  p-2 min-w-[95%] max-w-[100%]  w-auto min-h-[300px] max-h-[350px] rounded-lg flex flex-col gap-3">
      <p className="p-1 font-semibold">Techonologies</p>

      <SmallTechComponent
        smallTechImg={img}
        smallTechText={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sed, sit at quas totam assumenda ducimus quod est eveniet. Quod repellat dolor vel quia cum delectus eligendi esse veniam laboriosam."
        }
      />
      <SmallTechComponent
        smallTechImg={img}
        smallTechText={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sed, sit at quas totam assumenda ducimus quod est eveniet. Quod repellat dolor vel quia cum delectus eligendi esse veniam laboriosam."
        }
      />
      <SmallTechComponent
        smallTechImg={img}
        smallTechText={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sed, sit at quas totam assumenda ducimus quod est eveniet. Quod repellat dolor vel quia cum delectus eligendi esse veniam laboriosam."
        }
      />
    </div>
  );
}

export default WorkExperienceCard;
