
export const heroCard = ({title, text}) => {
  return (
    `<div class="hero__card">
      <h2 class="hero-card__title">${title}</h2>
      <p class="hero-card__text">${text}</p>
    </div>`
  )
}
