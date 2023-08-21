import { useState } from "react";
import Admin from "../components/Admin";
import Sidebar from "../components/Sidebar";
import AdminView from "../components/AdminViewItems";

const AdminPages = () => {
  const [tab, setTab] = useState(1);

  const handleStateFromChild = (data) => {
    setTab(data);
    console.log(data);
  };

  return (
    <div className="flex flex-row">
      <Sidebar onUpdate={handleStateFromChild} />
      {tab === 1 ? <AdminView /> : tab === 2 ? <Admin /> : <></>}
    </div>
  );
};

export default AdminPages;
