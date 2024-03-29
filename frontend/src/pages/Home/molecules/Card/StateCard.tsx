import { type IComponentState } from "../../../../stores/ComponentStore";
import { CustomSwitch } from "../../atoms/CustomSwitch";

interface IStateCardProps {
  component: IComponentState | null;
  flag: boolean;
  setFlag: (flag: boolean) => void;
}

export const StateCard: React.FC<IStateCardProps> = ({
  component,
  flag,
  setFlag,
}) => {
  return (
    <div className="bg-white flex flex-col h-[23rem] w-[23rem] border rounded-t-3xl 2k:h-[30rem] 4k:h-[40rem]">
      <div className="flex flex-col items-center">
        <h2 className="decoration-2 decoration-primary-100 mb-5 underline font-semibold text-xl mt-5 2k:mt-7 2k:mb-5 4k:mt-14 4k:mb-10">
          {component != null && component.name}
        </h2>
      </div>

      <div className="flex flex-col">
        {component != null &&
          component.checklist.map((item) => {
            return (
              <div
                className="flex mb-8 2k:mb07 2k:mt-2 4k:mb-14 4k:mt-4"
                key={item.name}
              >
                <div className="min-w-[3rem] min-h-[3rem] flex justify-center">
                  <CustomSwitch
                    stateChecklist={item}
                    flag={flag}
                    setFlag={setFlag}
                    componentState={component}
                  />
                </div>
                <div className="font-semibold">{item.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
