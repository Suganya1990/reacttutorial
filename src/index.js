import React from 'react'
import ReactDom from 'react-dom'

//css needs to have css extension
import './index.css'

import { books } from './books'
import SpecificBook from './Book'

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
