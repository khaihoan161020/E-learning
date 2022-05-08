import { notification } from "antd";
 const notificationComponent = (
  type,
  title,
  content
)=> {
  if (type === "success" || type === "warning" || type === "error") {
    notification[type]({
      message: title,
      description: content,
    });
  }
};

export default notificationComponent
