# Exercises

## 1- Create a TextBody component and passing a prop

- Create a `BodyText` component that is used by `<App/>`
- The `<App/>` is passing a `text` prop that gets rendered as paragraph

> Hint

```javascript
<p>lorem ipsum ipsu</p>
```

## 2- Create a Image component

- Create a `Image` component that is used by `<App/>`
- The `<App/>` is passing four props for `src`, `alt`, `width` and `height`
- The `width` and `height` should be `150px`

## 3- Create an UnorderedList component

- Create a `UnorderedList` component that is used by `<App/>`
- The `<App/>` is passing four props for the list items that will be rendered as `<li></li>` elements

> Hint

```javascript
return(
 {
  items.map(item=>(
   <li>item</li>
  ))
 }
)
```

## 4- Create an Table component

- Create a `Table` component that is used in `<App/>`
- The `<App/>` should pass array of objects of users, each user has name, email, and telephone number
- The `<Table/>` component should render this information in a table format
- Hint: make use of `Bootstrap`

## 5- Use React state to update the Table

- Use the react state management hook `useState` to add more users to the table

## 6- Todo App

- Create a todo app similar to what we built with vanilla js
