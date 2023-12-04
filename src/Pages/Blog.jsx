import React, { useEffect, useState , state } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'


function Blog() {

  let [arr, setArr] = useState([])
  useEffect(() => {
      axios('https://dummyjson.com/products')
          .then((res) => {
              setArr(res.data.products)
          })
  }, [])
  console.log(arr)

  return (
      <>
         {
          arr.map((p)=>{
              return<>
          <Link to={`/${p.id} `}> <img id='img'src={p.thumbnail} alt="" /> </Link>
              <h1>{p.title}</h1>
              <h2>{p.price}</h2>
              </>
              
          })
         } 
      </>
  )
}
  

export default Blog