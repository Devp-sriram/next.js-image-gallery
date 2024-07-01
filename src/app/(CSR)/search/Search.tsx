'use client'
import { Form , Button , Spinner , Alert} from 'react-bootstrap'
import { FormEvent } from 'react'
import { useState } from 'react'
import { UnsplashImage } from '@/models/unsplash'
import Image from 'next/image'
import styles from './search.module.css'

export default async function Seach(){

    const [searchResults, setSearchResults] = useState< UnsplashImage[] | null>(null);
    const [searchResultsLoading , setSearchResultsLoading] = useState(false);
    const [searchResultsLoadingIsError , setSearchResultsLoadingIsError] = useState(false);
    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("query")?.toString().trim();

        if(query){
            try{
                setSearchResults(null);
                setSearchResultsLoadingIsError(false);
                setSearchResultsLoading(true);
                const response = await fetch('/api/search?query='+ query)
                const images : UnsplashImage[] = await response.json();
                setSearchResults(images);
            }catch(error) {
                console.log(error)
                setSearchResultsLoadingIsError(true)
            }finally{
                setSearchResultsLoading(false)
            }
            }
    }
    return (
        <>
        <Alert>
            this page fetched data <strong>client-side</strong> In Other to not leak API credentials ,
            the request id sent to a Next.js <strong>route handler</strong> that runs on the server,
            this route handler then fetched the data from the Unsplash API and returns it to the client 
        </Alert>
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className ='mb-3' controlId='search-input'>
                    <Form.Label>Search query</Form.Label>
                    <Form.Control
                        name='query'
                        placeholder='eg: cats, hotdogs,....'
                    />
                </Form.Group>
                <Button type="submit" className='mb-3' disabled={searchResultsLoading} >search</Button>
            </Form>
        </div>

        <div className='d-flex flex-column align-items-center'>
            {searchResultsLoading &&<Spinner animation='border'/>}
            {searchResultsLoadingIsError && <p>Something went wrong</p>}
            {searchResults?.length === 0 && <p>Nothing found ,Try a differt query</p>}
        </div>

        {
            searchResults && 
            <>
            {
                searchResults.map((image) => {
                    return (
                        <Image
                        src={image.urls.raw}
                        alt={image.description}
                        width={250}
                        height={250}
                        key ={image.urls.raw}
                        className ={styles.image}

                        />
                    )
                })
            }
            </>
        }
        </>
    )
}
