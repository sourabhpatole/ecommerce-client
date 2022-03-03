import "./watch.scss";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/watch?v=9ix7TUGVYIo"
      />
    </div>
  );
}
