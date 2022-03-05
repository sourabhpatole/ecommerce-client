import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    const getNewuser = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjFjOWRjYmEwZTA5ZDNhYmFhNDFkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjM4MTU4NywiZXhwIjoxNjQ2ODEzNTg3fQ.wKj_6XXUT6pT3P4uCXbnt1uhe4ECkhKNk-Wh6UfMZBo",
          },
        });
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewuser();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
