import { css } from "../styled-system/css";
import { Button } from "./components/ui/Button";
// import { Mail } from "lucide-react";

export const App = () => {
  return (
    <div className={css({ height: "100vh", width: "100vw", backgroundColor: "#111" })}>
      <Button asChild>
        {/* <Mail className={css({ marginRight: 2, height: 4, width: 4 })} /> Login with Email */}
        <a href="/login">Login</a>
      </Button>
    </div>
  );
};
