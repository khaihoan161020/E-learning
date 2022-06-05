import React from "react";
import {useSelector} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../constants/ThemeSetting";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HorizontalNav = () => {
  const navStyle = useSelector(({settings}) => settings.navStyle);
  const pathname = useSelector(({common}) => common.pathname);

  const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal">
      <SubMenu popupClassName={getNavStyleSubMenuClass(navStyle)} key="main" title={<IntlMessages id="sidebar.main"/>}>
        <SubMenu popupClassName="gx-menu-horizontal" key="dashboard" title={
          <span>
            <i className="icon icon-dasbhoard"/>
            <IntlMessages id="sidebar.dashboard"/>
          </span>
        }>
          <Menu.Item key="main/dashboard/crypto">
            <Link to="/main/dashboard/crypto">
              <i className="icon icon-crypto"/>
              <IntlMessages id="sidebar.dashboard.crypto"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="main/dashboard/crm">
            <Link to="/main/dashboard/crm">
              <i className="icon icon-crm"/>
              <IntlMessages id="sidebar.dashboard.crm"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="main/dashboard/listing">
            <Link to="/main/dashboard/listing">
              <i className="icon icon-listing-dbrd"/>
              <IntlMessages id="sidebar.dashboard.listing"/>
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="main/widgets">
          <Link to="/main/widgets"><i className="icon icon-widgets"/>
            <IntlMessages id="sidebar.widgets"/></Link>
        </Menu.Item>

        <Menu.Item key="main/metrics">
          <Link to="/main/metrics"><i className="icon icon-apps"/>
            <IntlMessages id="sidebar.metrics"/></Link>
        </Menu.Item>

        <Menu.Item key="main/algolia">
          <Link to="/main/algolia"><i className="icon icon-shopping-cart "/>
            <IntlMessages id="sidebar.algolia"/></Link>
        </Menu.Item>

      </SubMenu>

      {/* <SubMenu  key="in-built-apps"
               title={<IntlMessages id="sidebar.inBuiltApp"/>}> */}
        
       <li className="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal">
         <div className="ant-menu-submenu-title">
           <span className="ant-menu-title-content">
            <Link style={{color: '#fff'}} to="/app/reading">
              <IntlMessages
              id="sidebar.reading"/></Link>
           </span>
         </div>
      
       </li>
       <li className="ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal">
         <div className="ant-menu-submenu-title">
           <span className="ant-menu-title-content">
            <Link style={{color: '#fff'}} to="/app/listening">
              <IntlMessages
              id="sidebar.listening"/></Link>
           </span>
         </div>
      
       </li> 
        {/* <Menu.Item key="in-built-apps/todo">
          <Link to="/in-built-apps/todo"><i
            className="icon icon-check-square-o"/><IntlMessages
            id="sidebar.todoApp"/></Link>
        </Menu.Item>

        <Menu.Item key="in-built-apps/contacts">
          <Link to="/in-built-apps/contacts"><i className="icon icon-contacts"/><IntlMessages
            id="sidebar.contactsApp"/></Link>
        </Menu.Item>

        <Menu.Item key="in-built-apps/chat">
          <Link to="/in-built-apps/chat"><i
            className="icon icon-chat-bubble -flex-column-reverse"/><IntlMessages
            id="sidebar.chatApp"/></Link>
        </Menu.Item>

        <Menu.Item key="social-apps/profile">
          <Link to="/social-apps/profile">
            <i className="icon icon-profile2"/>
            <IntlMessages id="sidebar.extensions.profile"/>
          </Link>
        </Menu.Item>

        <Menu.Item key="social-apps/wall">
          <Link to="/social-apps/wall">
            <i className="icon icon-avatar -flex-column-reverse"/>
            <IntlMessages id="sidebar.wall"/>
          </Link>
        </Menu.Item>

        <Menu.Item key="in-built-apps/notes">
          <Link to="/in-built-apps/notes">
            <i className="icon icon-copy"/>
            <IntlMessages id="sidebar.notes"/>
          </Link>
        </Menu.Item>

        <Menu.Item key="in-built-apps/firebase-crud">
          <Link to="/in-built-apps/firebase-crud">
            <i className="icon icon-icon"/>
            <IntlMessages id="sidebar.crud"/>
          </Link>
        </Menu.Item> */}

      {/* </SubMenu> */}

 

    </Menu>

  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;

