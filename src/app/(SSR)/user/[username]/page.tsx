import {UnsplashUser} from '@/models/unsplash-user'
import {notFound } from 'next/navigation'
import {Metadata} from 'next'
import {cache} from 'react'
import {Alert} from '@/components/bootstrap'

interface PageProps{
    params:{username:string},

}

async function getUser(username:string):Promise<UnsplashUser>{
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_API_KEY}`)
    if(response.status === 404){ notFound() }
    return await response.json()
}

// const getUserCached  = cache(getUser) use cache if you are not using fecth 

export async function generateMetadata({params:{username}}:PageProps):Promise<Metadata>{
    const user = await getUser(username)
    return{
    title: ([user.first_name,user.last_name].filter(Boolean).join("")||user.username )+' = NextJs images gallery'
    } 
}

export default async function page({params:{username}}:PageProps){
    const user = await getUser(username)
 
    return(
        <>
        <Alert>The profile which we are seeing here <strong>added to the meta data as a title</strong> and it's cached the tittle is a dynamical data from API response</Alert>
        <h1>{user.username}</h1>
        <p>Frist name: {user.first_name}</p>
        <p>Last name: {user.last_name}</p>
        <a href={`https://unsplash.com/users/${username}`}>Unsplash Profile</a>
        </>
    )
}