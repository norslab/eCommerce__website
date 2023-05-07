import { data } from "../data/left-bar-data.js";
import {leftBar} from "../components/left-bar/left-bar.js";
import { header } from "../layout/header/header.js";
import { heroCard } from "../components/card/hero-card.js";
import { heroCardData , heroProductCardData } from "../data/home-data.js";
import { productCard } from "../components/card/product-card.js";
import { footerData } from "../data/footer-data.js";
import { footerTop } from "../layout/footer/components/footer-top.js";
import { footer } from "../layout/footer/footer.js";

export const home = () => {
  return (
    `<header>
        ${header()}
    </header>
    <main>
      <section>
         <div style="display:flex" class="container hero-section">
           <div>
            ${data.map((item) => leftBar({title: item.title, links: item.links})).join("")}
           </div>
           <div class="hero__product">
             <div class="hero__inner-product">  
              ${heroCardData.map((item) => heroCard({title: item.title, text: item.text})).join("")}
             </div>
             <div class="hero__main-product">
               ${heroProductCardData.map((item) => productCard({img: item.img, title: item.title, price: item.price })).join("")}
             </div>
             
           </div>
         </div>
      </section>
    </main>
    <footer>
      <div class="container">
         <div class="footer-top__content">
           ${footerData.map((item) => footerTop({title: item.title, links: item.links})).join("")}
         </div>
      </div>
      ${footer()}
    </footer>
    `
  )
}

