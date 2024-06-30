import {UnsplashUser} from '@/models/unsplash-user'
import {notFound } from 'next/navigation'

interface PageProps{
    params:{username:string},

}
export default async function page({params:{username}}:PageProps){
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_API_KEY}`)
    if(response.status === 404){ notFound() }
    const user:UnsplashUser = await response.json()
 
    return(
        <>
        <h1>{user.username}</h1>
        <p>Frist name: {user.first_name}</p>
        <p>Last name: {user.last_name}</p>
        <a href={`https://unsplash.com/users/${username}`}>Unsplash Profile</a>
        </>
    )
}