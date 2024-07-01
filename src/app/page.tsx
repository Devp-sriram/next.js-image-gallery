import {Alert} from '@/components/bootstrap'

export default function Home() {
  return (
    <>
    <Alert>
      <p>
        This is a sample project to showcase and learn the new <strong>Next.js</strong>
      </p>
      <ul>
        <li>static and dynamic server-side rendering</li>
        <li>incremental static regenrator</li>
        <li>client -side rendering</li>
        <li>route handlers(API endpoints)</li>
        <li>meta-data API</li>
        <li>and more</li>
      </ul>
      <p className='mb-0'>
        Every page uses a different approuch to <strong>fecthinh and caching</strong>
      </p>
    </Alert>
    <Alert variant='secondary'>
      <p>Note: In order to load the data on this site you need to get a API key from unsplash</p>
      <p className='mb-0'>Unsplash has a free quote of 50 request per hour free tier </p>
    </Alert>
    </>
  )
}
