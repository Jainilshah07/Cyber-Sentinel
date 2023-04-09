import React from "react";

const Table2 = (props) => {
  const { name, phone, image, about, last_seen } = props.data;
  return (
    <div>
      <div className="table2">
        <table className="table-auto mx-auto font-bold border-spacing-x-1 border-separate my-2 ">
          <thead>
            <tr>
              <th className=" border border-slate-600 mx-2 md:px-8">Image</th>
              <th className=" border border-slate-600 mx-2 md:px-8">Name</th>
              <th className=" border border-slate-600 mx-2 md:px-8">Phone</th>
              <th className=" border border-slate-600 mx-2 md:px-8">About</th>
              <th className=" border border-slate-600 mx-2 md:px-8">
                Last Seen
              </th>
            </tr>
          </thead>

          <tr className="my-2">
            <td className="border border-slate-600 mx-2 md:px-8"><img className="h-16 w-16" src={image} alt="profile" /></td>
            <td className="border border-slate-600 mx-2 md:px-8">{name}</td>
            <td className="border border-slate-600 mx-2 md:px-8">{phone}</td>
            <td className="border border-slate-600 mx-2 md:px-8">{about}</td>
            <td className="border border-slate-600 mx-2 md:px-8">{last_seen}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table2;
