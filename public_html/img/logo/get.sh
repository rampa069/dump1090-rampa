#!/bin/bash

wget "http://planefinder.net/flightstat/v1/getLogoRedirect.php?airlineCode=$1&requestThumb=0&isSSL=0"
mv  "getLogoRedirect.php?airlineCode=$1&requestThumb=0&isSSL=0" $1.png
#convert $1.png $1.gif
#rm $1.png
