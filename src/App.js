import './App.css'

import BodyText from './components/BodyText'
import Counter from './components/Counter'
import Image from './components/Image'
import React from 'react'
import Table from './components/Table'
import Title from './components/Title'
import UnorderedList from './components/UnorderedList'

const items = ['Item a', 'Item b', 'Item c']
const users = [
  {
    id: '8910c92d6ec1a1aa64f74e241099634a',
    SerName: 'Joe',
    EmailAddress: 'joe@EmailAddress.com',
    CellPhone: '7801234955'
  },
  {
    id: '16d7d988391e7842fa0d13c7cbff0125',
    SerName: 'Jahn',
    EmailAddress: 'jahn@EmailAddress.com',
    CellPhone: '7801834569'
  },
  {
    id: '9af3c3d02f3603f6a4003969dcc13464',
    SerName: 'Willi',
    EmailAddress: 'willi@EmailAddress.com',
    CellPhone: '7801234512'
  },
  {
    id: '2a31242ea5eae847973d9ced896157e3',
    SerName: 'Ali',
    EmailAddress: 'ali@EmailAddress.com',
    CellPhone: '78012332112'
  }
]
function App() {
  return (
    <div className="a-container">
      <Title text={'My second App'} />
      <BodyText text={'lorem ipsum ispu'} />
      <Counter />
      <Image
        src={'logo512.png'}
        alt={'react logo'}
        width={'150px'}
        height={'150px'}
      />
      <UnorderedList items={items} />
      <Table data={users} />
    </div>
  )
}

// let's tightly couple the component to the data
export default App
