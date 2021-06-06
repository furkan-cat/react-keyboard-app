import { key1, key2, key3, key4, key5, key6 } from "./Keys";

const Map = () => {
  return [key1, key2, key3, key4, key5, key6].map((keys, i) => {
    return (
      <section className="d-flex flex-row mt-1" key={i}>
        {keys.map((element, i) => {
          return (
            <div
              className={element.class}
              id={element.keycode}
              key={i}
            >
              {element.title}
            </div>
          );
        })}
      </section>
    );
  });
};

export default Map;
