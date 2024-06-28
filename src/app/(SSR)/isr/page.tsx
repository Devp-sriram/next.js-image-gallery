import { UnsplashImage } from "@/models/unsplash"
import {Alert} from '@/components/bootstrap'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: "incremental static regenration fetching Next.js 13 image gallery",
  };


//   export const revalidate = 0;

  export default async function page(){
    const response = await fetch('https://api.unsplash.com/photos/random?client_id='+ process.env.UNSPLASH_API_KEY,
    {
        // cache:"no-cache"
        next:{revalidate:15 }
    })
    const image :UnsplashImage = await response.json()

    const width = Math.min(500,image.width)
    const height = (width/image.width)*image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This Page <strong>fetches data dynamically</strong> every 15 sec you refresh the page ,you get a new image from this page
            </Alert>

            <Image
            src={image.urls.raw}
            alt = {image.description}
            width= {width}
            height = {height}
            className= 'rounded shadow mw-100 h-100'
            />
            by <Link href={"/users/"+image.user.username}>{image.user.username}</Link>
        </div>
    )
  }