import React, { useState, useEffect } from "react";
import XLSX from "xlsx";
import { db } from "../firebase";

const Dashboard = (props) => {
  const [allUsers, setAllUsers] = useState([]);

  const fetchData = () => {
    db.collection("Corpers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          allUsers.push(doc.data());
          setAllUsers([...allUsers]);
          console.log(allUsers);
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const gatherdem = allUsers.map((item, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.fname}</td>
        <td>{item.lname}</td>
        <td>{item.email}</td>
        <td>{item.num}</td>
        <td>{item.exp}</td>
      </tr>
    );
  });

  const exportFile = () => {
    let users = [["FirstName", "LastName", "Email", "Number", "Expectation"]];
    allUsers.forEach((user) => {
      let userArray = [user.fname, user.lname, user.email, user.num, user.exp];
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
        <div>
          <button className="btn btn-primary" onClick={gatherdem}>
            SHOW REGISTERED PARTICIPANTS
          </button>
          <button className="btn btn-success" onClick={exportFile}>
            EXPORT TO EXCEL
          </button>
        </div>
      </div>

      <table style={{ width: "100%" }}>
        <tr>
          <th>S/N</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Expectation</th>
        </tr>
        {allUsers && gatherdem}
      </table>
    </div>
  );
};

export default Dashboard;
