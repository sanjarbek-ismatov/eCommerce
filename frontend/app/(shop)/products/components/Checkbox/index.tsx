import "./Checkbox.css";
function Checkbox({ checked }: { checked: boolean }) {
  return (
    <>
      <label className="inline-flex items-center">
        <input type="checkbox" className="h-0 w-0 " />
        <span
          className={`${
            checked ? "bg-green-500" : "bg-white border"
          } w-5 h-5 flex justify-center items-center rounded-sm`}
        >
          {checked && (
            <i className="fa-solid fa-check text-white text-sm m-[1px]"></i>
          )}
        </span>
        <span className="ml-2 select-none text-gray-700">Checkbox Label</span>
      </label>
    </>
  );
}
export default Checkbox;
