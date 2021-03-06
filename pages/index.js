import Head from 'next/head'

import { loadStripe } from '@stripe/stripe-js';

import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import {pane} from "./../styles/home.module.scss"

export default function Home(props) {

    const products = props.products.slice(0,3);
    

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
   
     return(
          <>
          <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="storefront online movie store"/>
          <meta name="keywords" content="Movies, Flims, Shows, Video, New Movies"/>
           <title>Storefront</title>
          </Head>
           <PageTitle tagline="Movies Specials" title="StoreFront-MovieZilla"/>
           <main className={pane}>
               {  products.map(product=> <ProductCard  key={product.uid} product={product}/>)}
           </main>
          </>
     )
}


export async function getStaticProps(){
  
    const res = await fetch('https://storefront-933b9-default-rtdb.firebaseio.com/products.json')
    const productData = await res.json();
    const products = Object.values(productData)
 return {
      props:{
           products
      },
      revalidate: 60,
 }
}