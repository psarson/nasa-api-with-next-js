# Next APOD

Simple Static HTML App built with NextJS, Axios and NASA's Astronomey Picture of the Day.  

To run in your local dev env: 

      npm install
      npm run dev  


## APOD Example Response Object: 

  ###GET 
      https://api.nasa.gov/planetary/apod?api_key=C7ePSBrRxQZ9K6usnq5HbgDd0sIi1zO6z5hjU3YU 

  ### Response:  
      Content Type -> application/json

      {
          "date": "2019-07-17",
          "explanation": "It had never been done before. But with the words \"You're Go for landing\", 50 years ago this Saturday, Apollo 11 astronauts Aldrin and Armstrong were cleared to make the first try. The next few minutes would contain more than a bit of drama, as an unexpected boulder field and an unacceptably sloping crater loomed below.  With fuel dwindling, Armstrong coolly rocketed the lander above the lunar surface as he looked for a clear and flat place to land.  With only seconds of fuel remaining, and with the help of Aldrin and mission control calling out data, Armstrong finally found a safe spot -- and put the Eagle down.  Many people on Earth listening to the live audio felt great relief on hearing \"The Eagle has landed\", and great pride knowing that for the first time ever, human beings were on the Moon. Combined in the featured descent video are two audio feeds, a video feed similar to what the astronauts saw, captions of the dialog, and data including the tilt of the Eagle lander. The video concludes with the panorama of the lunar landscape visible outside the Eagle. A few hours later, hundreds of millions of people across planet Earth, drawn together as a single species, watched fellow humans walk on the Moon.   NASA Remembers: Apollo 50th: Next Giant Le",
          "media_type": "video",
          "service_version": "v1",
          "title": "Apollo 11: Descent to the Moon",
          "url": "https://www.youtube.com/embed/xc1SzgGhMKc?start=850"
      } 

## Some Stuff to think about 

https://instagram-engineering.com/improving-performance-with-background-data-prefetching-b191acb39898