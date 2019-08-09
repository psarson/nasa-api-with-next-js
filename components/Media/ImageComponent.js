// components/ImageComponent.js 

const ImageComponent = (props) => {
  return ( 
    <div>
      <img src={props.apod.url} />
    </div>
  )
}  

export default ImageComponent; 

