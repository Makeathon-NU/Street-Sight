# Street-Sight

Allows people with a visual impairment to discreetly zoom in and identify distant street signs or objects. 

Made originally for TOM Makeathon at Northwestern University by Daniel Bednarczyk, Darcy Green (Need Knower), Joe Cummings, Julie Davies, Megan Reid, Wong Song Wei.

<img src="https://github.com/lilmegan32/Street-Sight/blob/master/WearingGoPro.jpg" height=400></img>
<img src="https://github.com/lilmegan32/Street-Sight/blob/master/ViewingGoPro.jpg" height=400></img>

This GoPro Hero 5 Session set-up discreetly takes a new photo every two seconds and then streams it to the user's phone. This allows the user to zoom in on images using their phone in order to identify street signs, license plates, and addresses which are far away. Because the GoPro camera is capabable of taking 4K resolution photos the zooming ability is fantastic. The photos are also automatically deleted from the camera so that the user does not need to worry about their camera's SD card getting full.

The software is capable of interfacing with future GoPro cameras, which will hopefully come with even sharper images.

Files:
* Gopro.js
  * stopVideo() function prevents the default video mode from initializing on bootup
  * onLoad allows user to set interval at which pictures are taken
  * Allows users to configure settings 
  * System takes, stores and deletes photos in a loop

* Index.html
  * Sets up the browser in which image is displayed at a pre-set frequency

Instructions:
* Put files Gopro.js, Index.html and 100GOPRO folder into the GoPro directory videos/DCIM/
* Connect to GoPro’s wifi on user’s mobile device
* Go to browser address 10.5.5.9:8080/videos/DCIM to load the photo stream from GoPro
  * GoPro static address is 10.5.5.9:8080
  * You could add page as bookmark for easy access

Hope it helps! :)
