import New from "./New";
import Featured from "./Featured";

function Card(props) {
  return (
    <div className="bg-white px-5 md:px-10 py-4 md:py-8 flex h-fit flex justify-start md:justify-between shadow-lg shadow-[#5ba4a4]-100 rounded-md items-center border-l-4 border-[#5ba4a4] gap-6 flex-col md:flex-row">
      <div className="flex flex-col w-full md:flex-row items-start md:items-center gap-4">
        <img src={props.logo} className="md:pr-6 h-20" />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-3">
            <div className="text-[#5ba4a4]">
              <p>{props.company}</p>
            </div>
            <div>
              {props.new == true ? <New /> : null}
              {props.featured == true ? <Featured /> : null}
            </div>
          </div>
          <div className="font-bold text-lg">
            <p>{props.position}</p>
          </div>
          <div className="text-[#7C8F8F]">
            <p>
              {props.postedAt} • {props.contract} • {props.location}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap h-max items-center w-full justify-start gap-2 md:justify-end">
        <div className="bg-[#effafa] text-[#5ba4a4] rounded-md px-2 py-1">
          {props.role}
        </div>
        <div className="bg-[#effafa] text-[#5ba4a4] rounded-md px-2 py-1">
          {props.level}
        </div>
        <div>
          {props.languages.map((item, index) => {
            return (
              <div
                className="bg-[#effafa] text-[#5ba4a4] rounded-md px-2 py-1"
                key={index}
              >
                {item}
              </div>
            );
          })}
          {props.tools.map((item, index) => {
            return (
              <div
                className="bg-[#effafa] text-[#5ba4a4] rounded-md px-2 py-1"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
