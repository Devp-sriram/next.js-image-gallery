import {UnsplashImage} from '@/models/unsplash';
import Image from 'next/image'
import styles from'./topic.module.css'
import {Alert} from '@/components/bootstrap'
import {Metadata} from 'next'
import { title } from 'process';

export const revalidate = 0;

interface PageProps{
    params:{ topic : string},
}

export function generateMetadata({params:{ topic }}:PageProps) : Metadata{
    return{
        title: topic + "- next image gallery"
    }
}
export function generateStaticParams(){
    return ['tech','codding','ai'].map(topic=>({topic}))
}
export default async function Page({params:{topic}}:PageProps){
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_API_KEY}`) 
    const images:UnsplashImage[] = await response.json()
    return (
        <div>
            <Alert>
                This page use <strong>generateStaticParams</strong> to render Pages that are not included in genrateStatic params will be fecthed &renderd on first access and then <strong>cached for subsequent requests</strong>(this can be disbles).
            </Alert>
            <h1>{topic}</h1>
            {
                images.map(image=>{
                    return(
                    <Image
                        src={image.urls.raw}
                        alt={image.description}
                        width={250}
                        height={250}
                        key={image.urls.raw}
                        className={styles.image}
                    />
                    )
                })
            }
        </div>
    );
}