import React from 'react'

export default function () {
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
    border: "2px solid red"
  }
  return (
    <footer className='bg-dark text-light py-3' style=
    {footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
