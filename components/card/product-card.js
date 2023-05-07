
export const productCard = ({title, img, price}) => {
  return (
    `<div class="hero-main__content">
       <img width="269" height="220" src="${img}" alt="img" />
       <h2>${title}</h2>
       <p>${price}</p>
    </div>
    `
  )
}



