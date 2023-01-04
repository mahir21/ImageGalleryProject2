import React from 'react'

const ImageCard = ( {image} ) => {

  //Split Takes An Array And Split It By Comma
  const tags = image.tags.split(',');

    return (

        <div className = "max-w-sm rounded overflow-hidden shawdow-lg">

         
       

       
      

          
          
          
        

    <div className = "px-6 py-4">
            <div className = "font-bold text-purple-500 text-xl-mb-2">
            <img src = {image.webformatURL} alt = "#" className='w-full'/> 
           
               Photo By Mahir
            </div>
          <ul>
            <li>
              <strong> Views </strong>
                4000
              <strong> Likes </strong>
                4
              <strong> Downloads </strong>
                1000
            </li>

            
          </ul>


     </div>

    <div className = "px-6 py-4">
          
          {tags.map(tag => <span key ={image.id}className = "inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{tag}

          </span>)}
         
          <span className = "inline-block  bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2">
             #tag-2
          </span>

    </div>


    <div className = "px-6 py-4">
        

    </div>

  </div>

 )

}
export default ImageCard;