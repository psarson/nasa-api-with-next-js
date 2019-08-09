// components/VideoComponent.js

const VideoComponent = (props) => {
  return ( 
    <div>
      <iframe src={props.apod.url} />
    </div>
  )
}  

export default VideoComponent; 

