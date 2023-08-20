//import React, { useState, useEffect } from 'react';
//import { Image } from 'react-bootstrap';
//
//function ClusterImageDisplay({ imageData }) {
//  const [imageUrl, setImageUrl] = useState(null);
//
//  useEffect(() => {
//    if (imageData) {
//      fetch(`/api/get-image/${imageData}/`)
//        .then(response => response.json())
//        .then(data => {
//          setImageUrl(data.image_url);
//        })
//        .catch(error => {
//          console.error('Error fetching image:', error);
//        });
//    }
//  }, [imageData]);
//
//  return (
//    <div className="mt-3">
//      <p>Selected Image:</p>
//      {imageUrl && (
//        <Image
//          src={imageUrl}
//          alt="Selected Cluster Image"
//          fluid
//          className="custom-image-class"
//        />
//      )}
//    </div>
//  );
//}
//
//export default ClusterImageDisplay;
