import { headerTop } from "./components/header-top.js";
import { headerMiddle } from "./components/header-middle.js";
import { headerBottom } from "./components/header-bottom.js";

export const header = () => {
  return (
    `
      <div class="container">
        ${headerTop()}
        ${headerMiddle()}
        ${headerBottom()}
      </div>
       
    `
  )
}
 