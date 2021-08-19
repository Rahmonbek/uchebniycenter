import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styles from "./top.module.css";
import { Menu, Dropdown, Button } from "antd";

import { PieChartOutlined } from "@ant-design/icons";
import { FaBell, FaLanguage, FaUserEdit } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiGroup, BiDollarCircle, BiChevronDown } from "react-icons/bi";
import { BsPersonPlusFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { ImUserPlus } from "react-icons/im";
import { GoSearch } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";
import { FcBusinessman } from "react-icons/fc";
import Davomat from "./pages/Davomat";
import Guruhlar from "./pages/Guruhlar";
import Dashboard from "./pages/Dashboard";
import logo1 from "./img/logo1.png";
import Oquvchiqoshish from "./pages/Oquvchiqoshish";
import Tolov from "./pages/Tolov";
import MalumotOzgartirish from "./pages/MalumotOzgartirish";
import Oquvchi from "./pages/Oquvchi";
import Oqituvchi from "./pages/Oqituvchi";
import { Col, Row } from "react-bootstrap";
import Malumot from "./pages/Malumot";
import LearningCenter from "./pages/LearningCenter";
import OqituvchiTable from "./pages/OqituvchiTable";
export default class Main extends Component {
  state = {
    collapsed: false,
    hover: false,
    open: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  close = () => {
    this.setState({
      open: true,
    });
  };
  open = () => {
    this.setState({
      open: false,
    });
  };
  change1 = () => {
    if (window.innerWidth < 992) {
      this.setState({
        collapsed: true,
      });
    }
  };
  change = () => {
    if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      this.setState({
        collapsed: true,
      });
    } else {
      this.setState({
        collapsed: false,
      });
    }
  };
  componentDidMount = () => {
    window.addEventListener("resize", this.change.bind(this));
    window.addEventListener("resize", this.change1.bind(this));
    this.change();
    this.change1();
  };
  render() {
    const { SubMenu } = Menu;
    return (
      <div>
        <BrowserRouter>
          <div className={styles.top}>
            <h1 className={this.state.collapsed ? styles.header1 : styles.header2}>IT Tower</h1>
            <div onClick={this.toggleCollapsed} className={this.state.collapsed ? styles.btntop1 : styles.btntop}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={this.state.collapsed ? styles.search1 : styles.search}>
              <input className={this.state.open ? styles.inputSearch1 : styles.inputSearch} type="text" placeholder="Qidirish ..." />
              <div className={this.state.open ? styles.iconSearch1 : styles.iconSearch}>
                <GoSearch onClick={this.open} style={{ fontSize: "19px", color: "#3F6AD8" }} />
              </div>
              <div onClick={this.close} className={this.state.open ? styles.closeIcon1 : styles.closeIcon}>
                <VscChromeClose style={{ fontSize: "22px", color: "#8AA4E6" }} />
              </div>
            </div>
            <div className={styles.bell}>
              <FaBell style={{ fontSize: "18px", color: "#D92550" }} />
            </div>
            <div className={styles.language}>
              <FaLanguage style={{ fontSize: "23px", color: "#3F6AD8" }} />
            </div>
            <span className={styles.hr}>|</span>
            <div className={styles.user}>
              <Row>
                <Col className={styles.logo1} lg={3}>
                  {" "}
                  <img src={logo1} style={{ width: "45px", height: "45px" }} alt=""></img>
                </Col>
                <Col className={styles.logo1text} lg={9}>
                  <h6>Ismoilov Rahmon</h6>
                  <p>IT Tower</p>
                </Col>
              </Row>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.8)" }} className={this.state.collapsed ? styles.collapsed1 : styles.collapsed2}>
              <Menu className={styles.menuNav} mode="inline" style={{ boxShadow: "0 0.46875rem 2.1875rem rgb(4 9 20 / 3%), 0 0.9375rem 1.40625rem rgb(4 9 20 / 3%), 0 0.25rem 0.53125rem rgb(4 9 20 / 5%), 0 0.125rem 0.1875rem rgb(4 9 20 / 3%)" }} inlineCollapsed={this.state.collapsed}>
                <h5 className={this.state.collapsed ? styles.headingMenu1 : styles.headingMenu2}>Admin</h5>
                <div className={this.state.collapsed ? styles.hrMenu1 : styles.hrMenu2}></div>
                <Menu.Item key="1" icon={<PieChartOutlined style={{ fontSize: "18px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2}>
                  <Link style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }} to="/cabinet">
                    {" "}
                    Bosh bo'lim
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DiJavascript1 style={{ fontSize: "20px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2}>
                  <Link style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }} to="/cabinet/kurslar">
                    Kurslar
                  </Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<BiGroup style={{ fontSize: "20px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2} title="Guruhlar">
                  <Menu.Item className={this.state.collapsed ? styles.list1 : styles.list2} key="4">
                    Front-end (React)
                  </Menu.Item>
                  <Menu.Item className={this.state.collapsed ? styles.list1 : styles.list2} key="5">
                    Python+Jango
                  </Menu.Item>
                  <Menu.Item className={this.state.collapsed ? styles.list1 : styles.list2} key="6">
                    Unit
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="8" icon={<TiTickOutline style={{ fontSize: "20px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2}>
                  <Link style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }} to="/cabinet/davomat">
                    Davomat
                  </Link>
                </Menu.Item>
                <Menu.Item key="9" icon={<BiDollarCircle style={{ fontSize: "20px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2}>
                  <Link style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }} to="/cabinet/tolov">
                    To'lov
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<FaUserEdit style={{ fontSize: "20px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2}>
                  <Link style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }} to="/cabinet/malumotOzgartirish">
                    Ma'lumotlarni o'zgartirish
                  </Link>
                </Menu.Item>
                <h5 className={this.state.collapsed ? styles.headingMenu1 : styles.headingMenu2}>Registratsiya</h5>
                <div className={this.state.collapsed ? styles.hrMenu1 : styles.hrMenu2}></div>
                <Menu.Item key="10" icon={<BsPersonPlusFill style={{ fontSize: "20px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2}>
                  <Link style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }} to="/cabinet/oquvchi">
                    O'quvchi qo'shish
                  </Link>
                </Menu.Item>
                <Menu.Item key="11" icon={<AiOutlineGooglePlus style={{ fontSize: "20px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2}>
                  <Link style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }} to="/cabinet/guruhlar">
                    Guruh qo'shish
                  </Link>
                </Menu.Item>

                <Menu.Item key="12" icon={<ImUserPlus style={{ fontSize: "20px", color: "rgba(0,0,0,0.3)" }} />} className={this.state.collapsed ? styles.list1 : styles.list2}>
                  <Link style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }} to="/cabinet/oqituvchi">
                    O'qituvchi qo'shish
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
            <div className={this.state.collapsed ? styles.forget1 : styles.forget}>
              <Switch>
                <Route exact path="/cabinet/davomat">
                  <Davomat />
                </Route>
                <Route exact path="/cabinet">
                  <Dashboard />
                </Route>
                <Route exact path="/cabinet/guruhlar">
                  <Guruhlar />
                </Route>
                <Route exact path="/cabinet/malumotOzgartirish">
                  <MalumotOzgartirish />
                </Route>

                <Route exact path="/cabinet/oquvchi">
                  <Oquvchi />
                </Route>
                <Route exact path="/cabinet/tolov">
                  <Tolov />
                </Route>
                <Route exact path="/cabinet/oqituvchi">
                  <Oqituvchi />
                </Route>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
