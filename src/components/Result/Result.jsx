import { object, string } from "prop-types";

const Result = ({ data, amount }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-y-1">
      <p className="text-[16px] font-semibold text-[#5c667b]">
        {amount?.toLocaleString("en-US")} {data?.base_code} =
      </p>
      <h1 className="text-[32px] font-bold text-[#2e3c57]">
        {data?.conversion_result.toLocaleString("en-US")} {data?.target_code}
      </h1>
      <p className="text-[16px] font-semibold text-gray-800">
        Rates : 1 {data?.base_code} :{" "}
        {data?.conversion_rate.toLocaleString("en-US")} {data?.target_code}
      </p>
      <p className="text-[16px] font-semibold text-gray-800">
        Latest updated on : {data?.time_last_update_utc.substring(0, 17)}
      </p>
    </div>
  );
};
Result.propTypes = {
  data: object,
  amount: string,
};
export default Result;
