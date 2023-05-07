

export const footerTop = ({title, links}) => {
  return (
    `<div>
      <h2 class="footerTop__title">${title}</h2>
      <ul>
        ${links.map((item) => (
          `
           <li class="footerTop__item">
             <a href="#">${item}</a>
           </li>
          `
        )).join("")}
      </ul>
    </div>`
  )
}
