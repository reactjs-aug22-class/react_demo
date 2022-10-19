import React, { useRef, useState } from 'react'

import BSTable from 'react-bootstrap/Table'

function Table(props) {
  const { data } = props
  const tableHeadings = Object.keys(data[0])
  const [tableDt, setTableDt] = useState(data)
  const id = useRef()
  const name = useRef()
  const email = useRef()
  const telephone = useRef()

  const onSubmitHandler = e => {
    e.preventDefault()
    const newRow = {
      id: id.current.value,
      SerName: name.current.value,
      EmailAddress: email.current.value,
      CellPhone: telephone.current.value
    }
    setTableDt(prevState => [...prevState, newRow])
  }

  return (
    <>
      <form className="mb-4" onSubmit={onSubmitHandler}>
        <label htmlFor="user-id">id</label>
        <input id="user-id" className="mb-3" ref={id} />
        <br />
        <label htmlFor="user-name">Name</label>
        <input id="user-name" className="mb-3" ref={name} />
        <br />
        <label htmlFor="user-email">Email</label>
        <input type="email" id="user-email" className="mb-3" ref={email} />
        <br />
        <label htmlFor="user-tel">Telephone</label>
        <input
          type="telephone"
          id="user-tel"
          className="mb-3"
          ref={telephone}
        />
        <br />
        <button className="btn btn-primary">Add</button>
      </form>
      <BSTable striped bordered hover className="w-75">
        <tbody>
          <tr>
            {tableHeadings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
          {tableDt.map((row, index) => (
            <tr key={row.id}>
              <td>{row[tableHeadings[0]]}</td>
              <td>{row[tableHeadings[1]]}</td>
              <td>{row[tableHeadings[2]]}</td>
              <td>{row[tableHeadings[3]]}</td>
            </tr>
          ))}
        </tbody>
      </BSTable>
    </>
  )
}

export default Table
