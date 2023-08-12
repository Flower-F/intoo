import { css } from "../styled-system/css";

export const App = () => {
  return (
    <div
      className={css({
        fontSize: 24,
        fontWeight: "bold",
      })}
    >
      hello world
    </div>
  );
};
