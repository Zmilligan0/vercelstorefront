import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";

import {loadStripe} from "@stripe/stripe-js"
 
export default function Home(props) {
  const products = props.products
           
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  return (
     <>
     <PageTitle title="StoreFront" tagline="featured products"/> 
     <main>
        { products.map(product => <ProductCard key={product.uid} product={product} />)}
     </main>
     
     </>
     )
}
 


export async function getStaticProps(){
  
  const res = await fetch('https://zachstorefront-default-rtdb.firebaseio.com/products.json')
  const productData = await res.json();
  const products = Object.values(productData)
   
  return {
      props:{
        products,
        fallback:false
      }
  }
}