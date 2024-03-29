import pbIcon from "../icons/pbIcon.svg";
import pattern from "../icons/pattern.svg";
import { useComponentStore } from "../../../stores/ComponentStore";
import { useItemData } from "../../../hooks/useItemData";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../molecules/Card";

const InnerSidebar: React.FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();
  const { alphaItem, invest } = useItemData(id);
  const setComponent = useComponentStore((state) => state.setComponent);
  return (
    <div className="flex flex-col items-center min-w-[25rem] h-[calc(100vh-1rem)] 4k:min-w-[49rem] bg-gradient-to-b from-primary-100 to-primary-200 rounded-3xl m-6 relative">
      <img
        src={pbIcon}
        className="p-4 mb-4 w-max h-auto object-cover 2k:mb-12 4k:w-60 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-col items-center 2k:mb-12 4k:mt-6">
        <img
          src={pattern}
          className="p-4 w-max h-auto object-cover 2k:w-40 4k:w-60"
          onClick={() => setComponent(invest)}
        />

        <p
          className="text-white font-semibold text-2xl 4k:text-4xl"
          onClick={() => {
            setComponent(invest);
          }}
        >
          {invest !== null && invest.title}
        </p>
      </div>
      <div className="flex flex-col items-center max-w-[60rem] overflow-x-auto 4k:max-w-[90rem]">
        <p className="text-white font-semibold text-l text-center mt-10 4k:text-4xl pl-6 pr-6 2k:text-2xl 4k:mt-24">
          {alphaItem != null && alphaItem.description}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-0">
          <Card />
        </div>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div> Invalid ID </div>;
  return <InnerSidebar id={id} />;
};

export default Sidebar;
