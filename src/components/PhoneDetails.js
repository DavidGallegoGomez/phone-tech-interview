import React from 'react'
import phonesData from '../data/phones.json';

const PhoneDetails = (props) => {
  const { params } = props.match;
  const foundPhone = phonesData.find( phone => phone.id === parseInt(params.phoneId) )
  console.log( foundPhone )

  /*
  {
    "id": 0,
    "name": "iPhone 7",
    "manufacturer": "Apple",
    "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
    "color": "black",
    "price": 769,
    "imageFileName": "IPhone_7.png",
    "screen": "4,7 inch IPS",
    "processor": "A10 Fusion",
    "ram": 2
  }
  */

  return (
      <article className="PhoneDetail">
        <p> { foundPhone.description } </p>
      </article>
    )
}

export default PhoneDetails