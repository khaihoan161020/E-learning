import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Popover} from "antd";
import authAction from "../../appRedux/Auth/actions";
const UserProfile = () => {
  const userProfile = useSelector((state) => state.auth.userProfile)
  const dispatch = useDispatch();
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => dispatch(authAction.logoutUser() )}>Logout
      </li>
    </ul>
  );

  return (

    <div className="gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row">
      <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
        <Avatar src={"https://via.placeholder.com/150"}
                className="gx-size-40 gx-pointer gx-mr-3" alt=""/>
        <span className="gx-avatar-name">{ userProfile && userProfile?.user.username}<i
          className="icon icon-chevron-down gx-fs-xxs gx-ml-2"/></span>
      </Popover>
    </div>

  )
};

export default UserProfile;
