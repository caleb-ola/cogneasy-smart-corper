import React, { useState, useEffect } from "react";
import XLSX from "xlsx";
import { db } from "../firebase";

const Dashboard = (props) => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchData = () => {
    db.collection("Test")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          allUsers.push(doc.data());
          setAllUsers([...allUsers]);
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const gatherdem = allUsers.map((item, index) => {
    return (
      <table style={{ width: "100%" }}>
        <tr>
          <th>S/N</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>{index + 1}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.email}</td>
        </tr>
        {/* {allUsers && gatherdem} */}
      </table>
    );
  });

  const exportFile = () => {
    let users = [["FirstName", "LastName", "Email"]];
    allUsers.forEach((user) => {
      let userArray = [user.fname, user.lname, user.email];
      users.push(userArray);
      setAllUsers((prev) => {
        return [...prev];
      });
    });
    const wb = XLSX.utils.book_new();
    const wsAll = XLSX.utils.aoa_to_sheet(users);
    XLSX.utils.book_append_sheet(wb, wsAll, "All Users");
    XLSX.writeFile(wb, "export-demo.xlsx");
  };
  return (
    <div>
      <div className="admin-header">
        <h1>WELCOME ADMIN</h1>
      </div>
      <div>
        <button className="btn btn-primary" onClick={gatherdem}>
          SHOW REGISTERED PARTICIPANTS
        </button>
        <button className="btn btn-success" onClick={exportFile}>
          EXPORT TO EXCEL
        </button>
      </div>
      {gatherdem}
    </div>
  );
};

export default Dashboard;
