import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/OneContext";
import useTitle from "../../libs/Hook/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const [tableData, setTableData] = useState(null);
  const [actions, setActions] = useState(null);
  const [actionsData, setActionsData] = useState("");
  const { user } = useContext(authContext);

  useEffect(() => {
    fetch(
      `http://localhost:3000/api/query${
        !actionsData
          ? `?email=${user?.email}`
          : actionsData == "ascending"
          ? `/sortings/ascending?email=${user?.email}`
          : `/sortings/descending?email=${user?.email}`
      }`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, [actions, actionsData]);

  const handleDelete = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/query/${e}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Deleted!",
              text: "Your File has Deleted",
              showConfirmButton: false,
              timer: 1500,
            });
            setActions(data);
          });
      }
    });
  };
  return (
    <div>
      <div className="container mx-auto mb-8">
        <div className="flex justify-between">
          <div className="flex gap-4 w-1/2 mb-3">
            <input
              type="text"
              placeholder="Search Here..."
              className="input input-bordered input-md w-full"
            />
            <button className="btn">Search</button>
          </div>
          <div className="space-x-4">
            <button
              onClick={() => setActionsData("ascending")}
              className="btn btn-active btn-secondary"
            >
              Ascending{" "}
            </button>
            <button
              onClick={() => setActionsData("descending")}
              className="btn btn-active btn-primary"
            >
              Descending{" "}
            </button>
          </div>
        </div>
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
                        <td>
                          {tdata.seller ? tdata.seller : "Team Toy Group"}
                        </td>
                        <td>
                          {tdata.category} / {tdata.sub_category}
                        </td>
                        <td>{tdata.quantity ? tdata.quantity : "Unknown"}</td>
                        <td>${tdata.price}</td>
                        <td>
                          <Link
                            to={`/edit/${tdata._id}`}
                            className="btn btn-ghost btn-xs"
                          >
                            edit
                          </Link>
                          <button
                            onClick={() => handleDelete(tdata._id)}
                            className="btn btn-ghost btn-xs"
                          >
                            Delete
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
    </div>
  );
};

export default MyToys;
