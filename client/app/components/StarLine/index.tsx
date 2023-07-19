import "./StarLine.css";

function StarLine({
  ratingLevel,
  percent,
}: {
  ratingLevel: number;
  percent: number;
}) {
  return (
    <div className="flex w-full items-center">
      <div className="flex items-center">
        <span className="text-slate-500">{ratingLevel}</span>
        <i className="fa-solid text-sm text-yellow-500 fa-star p-1"></i>
      </div>
      <div className="bg-slate-300 w-full relative rounded-sm h-1.5">
        <div
          style={{
            width: percent + "%",
          }}
          className="bg-yellow-500 absolute top-0 left-0 rounded-sm h-1.5"
        ></div>
      </div>
    </div>
  );
}

export default StarLine;
