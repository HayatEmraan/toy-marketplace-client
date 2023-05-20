import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/all")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);
  console.log(tableData);
  return (
    <div className="container mx-auto mb-8">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Seller</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.map((tdata, index) => {
                return (
                  <React.Fragment key={tdata._id}>
                    <tr>
                      <th>{index + 1}</th>
                      <td>{tdata.name}</td>
                      <td>{tdata.seller ? tdata.seller : "Team Toy Group"}</td>
                      <td>
                        {tdata.category} / {tdata.sub_category}
                      </td>
                      <td>{tdata.quantity ? tdata.quantity : "Unknown"}</td>
                      <td>${tdata.price}</td>
                      <td>
                        <button className="btn btn-ghost btn-xs">
                          view details
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
