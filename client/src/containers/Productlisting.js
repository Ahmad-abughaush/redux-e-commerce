import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  Productcomponent from"./Productcomponent"
import axios from "axios";
import { setProducts } from '../redux/actions/Productactions';
const Productlisting = () => {

const products = useSelector((state) => state.allProducts.products);
const dispatch=useDispatch()

const fetchproducts=async()=>{

  const response=await axios.get("https://fakestoreapi.com/products")

  .catch((err)=>{
    console.log("error in fetching data",err)
  })

  console.log(response.data)
  dispatch(setProducts(response.data))
};

useEffect(()=>{
fetchproducts()
},[])


return (
    <div className='ui grid container' style={{marginTop:"50px"}}>
    <Productcomponent/>
    </div>
  )
}
export default Productlisting
