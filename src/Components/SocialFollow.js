import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{ faFacebook, faTwitter, faInstagram, faEmail} from '@fortawesome/free-brands-svg-icons'


export default function SocialFollow(){
    return(
        <div className='social-follow'>
              <a
  href="https://www.facebook.com/MelindaPikePhotography/"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a>
<a href="https://www.twitter.com/xxgoldie_bushxx/" 
className="twitter social">

  <FontAwesomeIcon icon={faTwitter} size="1x" />
</a>
<a
  href="https://www.instagram.com/mellahawaii/?hl=en"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="1x" />
</a>

{/* <a
  href="https://www.gmail.com"
  className="email social"
>
  <FontAwesomeIcon icon={faEmail} size="2x" />
</a> */}
        </div>
    )
}