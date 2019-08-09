import Layout from '../components/AppLayout.js';  
import ImageComponent from '../components/Media/ImageComponent' 
import VideoComponent from '../components/Media/VideoComponent'
import CounterComponent from '../components/Date/Counter';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const checkMediaType = (props) => props.apod.media_type === 'image';   

const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) => 
  conditionalRenderingFn(props)
    ? <EitherComponent { ...props } />
    : <Component { ...props } />;


const withEitherMediaType = withEither(checkMediaType, ImageComponent);
const MediaComponentWithEitherType = withEitherMediaType(VideoComponent);


const Index = props => (
  <Layout>
    <h1>{props.apod.title}</h1>
    <CounterComponent />
    <MediaComponentWithEitherType {...props} />
    <p>{props.apod.explanation.replace(/<[/]?p>/g, '')}</p>
  </Layout>  
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=C7ePSBrRxQZ9K6usnq5HbgDd0sIi1zO6z5hjU3YU')
  const apod = await res.json()

  console.log(`apod data fetched. title: ${apod.title}`)

  return { apod }
} 



export default Index
