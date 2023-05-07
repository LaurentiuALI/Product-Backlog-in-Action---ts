import stateAchieved from "../icons/stateAchieved.svg";
import stateUnachieved from "../icons/stateUnachieved.svg";
import {
  type IComponentState,
  useComponentStore,
} from "../../../stores/ComponentStore";

interface IStateProps {
  id: string;
  name: string;
  style?: React.CSSProperties;
  card: IComponentState;
  index: number;
}

const State: React.FC<IStateProps> = (props) => {
  const setComponentState = useComponentStore(
    (state) => state.setComponentState
  );
  const setComponent = useComponentStore((state) => state.setComponent);

  return (
    <div
      className="flex flex-col items-center h-fit w-fit 2k:mr-12"
      onClick={() => {
        setComponentState(props.card);
        setComponent(null);
      }}
    >
      <img
        id={props.id}
        src={
          props.index == 0 || props.card.status == props.card.checklist.length
            ? stateAchieved
            : stateUnachieved
        }
        alt="activity"
        className="w-max h-auto object-cover 2k:w-40 4k:w-60"
      />
      <h1
        className={`text-lg text-${
          props.index == 0 || props.card.status == props.card.checklist.length
            ? "orange-500"
            : "black"
        } font-semibold font-inter text-center ml-2 4k:text-3xl 4k:ml-4 max-w-[13rem]`}
      >
        {props.name}
      </h1>
    </div>
  );
};

export default State;
