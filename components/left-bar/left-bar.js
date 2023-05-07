

export const leftBar = ({title,links}) => {
  return (
    `<div class="hero__left-bar">
      <h2 class="hero-left-bar__title">${title}</h2>
      <ul class="hero-left-bar__list">
         ${links.map((item) => (`<li class="hero-left-bar__item">
           <a href="#">${item}</a>
         </li>`)).join("")}
      </ul>
      <button class="hero-left-bar__btn">More categories</button>
    </div>`
  )
}


