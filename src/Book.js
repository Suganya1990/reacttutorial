import React from 'react'

export const Book = ({ img, title, author }) => {
  //attribute, eventHandler

  //onClick
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Heyy')
  }

  //onMouseOver

  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='Book Cover' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  )
}

export default Book