'use client'
import { Form , Button } from 'react-bootstrap'
import { FormEvent } from 'react'
import { useState } from 'react'
import { UnsplashImage } from '@/models/unsplash'

export default function Seach(){

    const [searchResults, setSearchResults] = useState< UnsplashImage[] | null>(null);
    const [searchResultsLoading , setSearchResultsLoading] = useState(false);
    const [searchResultsLoadingIsError , setSearchResultsLoadingIsError] = useState(false);
    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("query")?.toString().trim();

        if(query){
            
        }
    }
    return (
        <>
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className ='mb-3' controlId='search-input'>
                    <Form.Label>Search query</Form.Label>
                    <Form.Control
                        name='query'
                        placeholder='eg: cats, hotdogs,....'
                    />
                </Form.Group>
                <Button type="submit" className='mb-3'>search</Button>
            </Form>
        </div>
        </>
    )
}
