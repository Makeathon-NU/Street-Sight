# Street-Sight

Allows users with a visual impairment to discreetly zoom in and identify distant street signs or objects. 

Made originally for TOM Makeathon at Northwestern University by Daniel Bednarczyk, Darcy Green (Need Knower), Joe Cummings, Julie Davies, Megan Reid, Wong Song Wei.

<img src="https://github.com/Makeathon-NU/Street-Sight/blob/master/WearingGoPro.jpg" height=400></img>
<img src="https://github.com/Makeathon-NU/Street-Sight/blob/master/ViewingGoPro.jpg" height=400></img>

This GoPro Hero 5 Session set-up discreetly takes a new photo every two seconds and then streams it to the user's phone. This allows the user to zoom in on images using their phone in order to identify distant street signs, license plates, and addresses. 

Because the GoPro camera takes 4K resolution photos - the zooming ability is fantastic. The photos are also automatically deleted in order to save space on the camera's SD card.

This software is capable of interfacing with future GoPro cameras, which will hopefully come with even sharper images.

NOTE: This setup uses a GoPro Hero 5 Session with a 10 Megapixel camera, you can also use the GoPro Hero 5 which has a 12 Megapixel camera. The only tradeoffs are that the Hero 5 is slightly larger making it less discreet, and the cost is $100 more. The picture quality and zooming ability of the Hero 5 should be even better than the Hero 5 Session.

Files:
* Gopro.js
  * stopVideo() function prevents the default video mode from initializing on bootup
  * onLoad allows user to set interval at which pictures are taken
  * Allows users to configure settings 
  * System takes, stores and deletes photos in a loop

* Index.html
  * Sets up the browser in which image is displayed at a pre-set frequency

Instructions:
* Put files Gopro.js and Index.html into the GoPro directory videos/DCIM/
* Connect to GoPro’s wifi on user’s mobile device
* Go to browser address 10.5.5.9:8080/videos/DCIM to load the photo stream from GoPro
  * GoPro static address is 10.5.5.9:8080
  * You could add page as bookmark for easy access

Hope it helps! :)
