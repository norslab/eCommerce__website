import { footerBottom } from "./components/footer-bottom.js";
import { footerMiddle } from "./components/footer-middle.js";

export const footer = () => {
  return (
    `
      <div class="container">
        
        ${footerMiddle()}
        ${footerBottom()}
      </div>
       
    `
  )
}


