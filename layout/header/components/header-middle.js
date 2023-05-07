export const headerMiddle = () => {
  return (
    `<div class="headerMiddle__content">
      <a href="#">
       <img src="./assets/icon/logo.svg" alt="logo"/>
      </a>
      <form class="headerMiddle__form">
         <select class="headerMiddle__select">
           <option value="category">category</option>
           <option value="category">category</option>
           <option value="category">category</option>
         </select>
         <input type="text" class="headerMiddle__input" placeholder="Search Products, categories ..." />
      </form>

      <div>
        <img class="user__logo" src="./assets/icon/user.svg" alt="user-logo"/>
        <img src="./assets/icon/bag.svg" alt="bag-logo"/>
      </div>
    </div>`
  )
}
