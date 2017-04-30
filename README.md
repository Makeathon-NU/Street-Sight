# Street-Sight

Designed to assist people with visual impairment identify distant street signs or objects. Made originally for TOM Makeathon at Northwestern University by Daniel Bednarczyk, Darcy Green (Need Knower), Joe Cummings, Julie Davies, Megan Reid, Wong Song Wei.

This GoPro Hero 5 Session set-up utilizes cameras for input, zooming into images and outputs them on the user’s mobile phone screen. It is developed for people with visual-impairment, making it easier for them to identify street signs, license plates and addresses which are far away. The GoPro Hero 5 Session takes pictures at pre-determined intervals (by user). Pictures taken can be zoomed in on the user’s mobile phone screen, so objects in these pictures appear larger and it is easier for users to identify what they are. 

The software is capable of interfacing with future GoPro cameras (which hopefully comes with even sharper images).

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
