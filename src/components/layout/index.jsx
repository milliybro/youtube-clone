import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../sidebar/SideBar";
import Header from "./Header"

const Layout = () => {
  const [show, setShow] = useState(false);


  const sidebarClose = () => setShow(false);
  const sidebarOpen = () => setShow(true);
  return (
    <Fragment>
      <Header sidebarOpen={sidebarOpen} />
      <SideBar show={show} setShow={setShow} sidebarClose={sidebarClose} sidebarOpen={sidebarOpen} />
      <Outlet />
    </Fragment>
  )
}

export default Layout