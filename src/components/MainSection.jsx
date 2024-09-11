import MainSpeaker from "./MainSpeaker";
import MainEarphones from "./MainEarphones";
import Audio from "./Audio";

const MainSection = () => {
  return (
    <div className=" mx-6 ">
      <MainSpeaker />
      <MainEarphones />
      <Audio />
    </div>
  );
};

export default MainSection;
