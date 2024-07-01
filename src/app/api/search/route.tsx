import {NextResponse} from 'next/server'
import { UnsplashSearchResponce } from '@/models/unsplash'
export async function GET(request:Request){
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query');

    if(!query){
        
        return NextResponse.json({error:'no query provided'},{ status:400 });

    }

    const response  =await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.UNSPLASH_API_KEY}`)
    const {results}:UnsplashSearchResponce = await response.json();

    return NextResponse.json(results)
}

