import React from 'react'
// import data from "../data/csvjson.json";

const Table = () => {
  return (
    <div>
      <table className="table-auto mx-auto font-bold border-spacing-x-1 border-separate my-2 ">
          <thead>
            <tr>
              <th className=" border border-slate-600 mx-2 md:px-8">Website/App</th>
              <th className=" border border-slate-600 mx-2 md:px-8">Registered or not?</th>
            </tr>
          </thead>
          {/* {myData.map((data, index) => {
              return (
                <>
                  <tr className="my-2">
                    <td className="border border-slate-600 mx-2 md:px-8">{data.Website}</td>
                    <td className="border border-slate-600 mx-2 md:px-8">{data.Registered}</td>
                  </tr>
                </>
              );
          })} */}
        </table>
    </div>
  )
}

export default Table
