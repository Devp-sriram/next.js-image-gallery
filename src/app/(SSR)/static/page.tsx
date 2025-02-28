import { UnsplashImage } from "@/models/unsplash"
import {Alert} from '@/components/bootstrap'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: "Static fetching Next.js 13 image gallery",
  };
  

export default async function page(){
    const response = await fetch('https://api.unsplash.com/photos/random?client_id='+ process.env.UNSPLASH_API_KEY)
    const image :UnsplashImage = await response.json()

    const width = Math.min(500,image.width)
    const height = (width/image.width)*image.height
    return(
        <div className="d-flex flex-column align-items-center">
        <Alert>
            this page,<strong> fecthes and caches data at build time </strong>even though the upsplash API always return a new image , we see the same image after refreshing the page until we compile the project again 
            
        </Alert>
            <Image
            src={image.urls.raw}
            alt = {image.description}
            width= {width}
            height = {height}
            className= 'rounded shadow mw-100 h-100'
            />
            by <Link href={"/user/"+image.user.username}>{image.user.username}</Link>
        </div>
    )
}



