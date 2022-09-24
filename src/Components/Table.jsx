import React from "react";

const Table = () => {
  return (
    <>
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 p-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="pl-4">
                Task
              </th>
              <th scope="col">
                Time
              </th>
              <th scope="col">
                Date
              </th>
              <th scope="col">
                Assigned By
              </th>
              <th scope="col">
                Assigned To
              </th>
              <th scope="col">
                Deadline
              </th>
              <th scope="col">
                Status
              </th>
              <th scope="col">
                Priority
              </th>
              <th scope="col">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-400">
              <th scope="row" className="font-medium text-gray-900 ">BGV of new Canditates </th>
              <td className="py-2">2:00 PM</td>
              <td className="py-2">Fir, 21 May 22</td>
              <td className="py-2">Manahar Patnaik</td>
              <td className="py-2">Arvind Karmarkar</td>
              <td className="py-2">Fri, 21 May 22</td>
              <td className="py-2">✴️</td>
              <td className="py-2">High</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-400">
              <th scope="row" className="font-medium text-gray-900 ">BGV of new Canditates </th>
              <td className="py-2">2:00 PM</td>
              <td className="py-2">Fir, 21 May 22</td>
              <td className="py-2">Manahar Patnaik</td>
              <td className="py-2">Arvind Karmarkar</td>
              <td className="py-2">Fri, 21 May 22</td>
              <td className="py-2">✴️</td>
              <td className="py-2">High</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-400">
              <th scope="row" className="font-medium text-gray-900 ">BGV of new Canditates </th>
              <td className="py-2">2:00 PM</td>
              <td className="py-2">Fir, 21 May 22</td>
              <td className="py-2">Manahar Patnaik</td>
              <td className="py-2">Arvind Karmarkar</td>
              <td className="py-2">Fri, 21 May 22</td>
              <td className="py-2">✴️</td>
              <td className="py-2">High</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-400">
              <th scope="row" className="font-medium text-gray-900 ">BGV of new Canditates </th>
              <td className="py-2">2:00 PM</td>
              <td className="py-2">Fir, 21 May 22</td>
              <td className="py-2">Manahar Patnaik</td>
              <td className="py-2">Arvind Karmarkar</td>
              <td className="py-2">Fri, 21 May 22</td>
              <td className="py-2">✴️</td>
              <td className="py-2">High</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-400">
              <th scope="row" className="font-medium text-gray-900 ">BGV of new Canditates </th>
              <td className="py-2">2:00 PM</td>
              <td className="py-2">Fir, 21 May 22</td>
              <td className="py-2">Manahar Patnaik</td>
              <td className="py-2">Arvind Karmarkar</td>
              <td className="py-2">Fri, 21 May 22</td>
              <td className="py-2">✴️</td>
              <td className="py-2">High</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-400">
              <th scope="row" className="font-medium text-gray-900 ">BGV of new Canditates </th>
              <td className="py-2">2:00 PM</td>
              <td className="py-2">Fir, 21 May 22</td>
              <td className="py-2">Manahar Patnaik</td>
              <td className="py-2">Arvind Karmarkar</td>
              <td className="py-2">Fri, 21 May 22</td>
              <td className="py-2">✴️</td>
              <td className="py-2">High</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
