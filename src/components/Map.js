import keys from "./Keys";

const Map = () => {
    const clickHandler = () => {
        
    }
  return keys.map((data) => {
    <div onClick={clickHandler}>{data.trigger}</div>;
  });
};

export default Map;
