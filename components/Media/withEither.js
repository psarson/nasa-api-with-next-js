/* 
    HOC wrapper for APOD Media Components.  

    Use Case: NASA's APOD API will return a url that points either an image or a video. 

          e.g. 

            "media_type": "image", 

            - or -  

            "media_type": "video",

    Arguments:  

     conditionalRenderingFn: a function that returns a boolean value. 

     MediaComponent: A stateless component that supports either videos or images.

     Component: A stateless component that supports either videos or images.
     
  
    DOES NOT check if url is valid. 
*/ 


// const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) => {
//   conditionalRenderingFn(props)
//     ? <EitherComponent { ...props } />
//     : <Component { ...props } />;
// }

// export default withEither;