import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";
 
 
 /* 
         Product Card
         SSG: Static Site Generation  Pages of HTML + CSS ---------------->edge --->really fast load time.
                                      Pages of HTML + CSS ----------------> CDN ----> really fast load time
 */

export default function Home(props) {
   const products = props.products
   
           
 
  return (
     <>
     <PageTitle title="StoreFront" tagline="featured products"/> 
     <main>
        { products.map(product => <ProductCard key={product.uid} product={product} />)}
     </main>
     
     </>
     )
}
 
// Next sees getStaticProps your telling it to build static
// pages from the data...
// getStaticProps is server code....
// application logic inside nextjs framework.
// api routes ....pass data from the client strip make payment.....

export async function getStaticProps(){
  // express and nodejs
  // fetch data from the api. Node.... fetch 
  // Node vs JS   node doesn have any of the web apis....fetch
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