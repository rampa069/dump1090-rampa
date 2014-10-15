// --------------------------------------------------------
//
// This file is to configure the configurable settings.
// Load this file before script.js file at gmap.html.
//
// --------------------------------------------------------

// -- JSON-feed -------------------------------------------
CONST_JSON = [
//    ['rampa', 'http://adsb.fincajalisco.com:2095/data.json'],
      ['rampa2', 'http://radar.fincajalisco.com:8080/dump1090/data.json'],
];


// -- Output Settings -------------------------------------
// Show metric values
Metric = true; // true or false

// -- Map settings ----------------------------------------
// The Latitude and Longitude in decimal format
CONST_CENTERLAT = 38.43;
CONST_CENTERLON = -0.84;
// The google maps zoom level, 0 - 16, lower is further out
CONST_ZOOMLVL   = 7;

// -- Marker settings -------------------------------------
// The default marker color
MarkerColor	  = "rgb(127, 127, 127)";
SelectedColor = "rgb(225, 225, 225)";

// -- Site Settings ---------------------------------------
SiteShow    = true; // true or false
// The Latitude and Longitude in decimal format
SiteLat     = 38.43585631;
SiteLon     = -0.84032632;

SiteCircles = true; // true or false (Only shown if SiteShow is true)
// In nautical miles or km (depending settings value 'Metric')
SiteCirclesDistances = new Array(50,100,150,200);


// -- METAR data ------------------------------------------
// ICAO codes separated with comma
MetarIcaoCode = "LEAL";

// -- Antenna Data Collection -----------------------------
AntennaDataCollect  = true;
AntennaDataShow     = true;
AntennaDataOpacity  = 0.3;

// -- Label Showing ---------------------------------------
LabelShow   = true;


// -- Lookup registration/country/type/owner---------------
BOOL_LOOKUP = true;

// -- Extended Data Info ----------------------------------
// These only apply if you are using the remote
// registration.js script
remote_imgdir = 'http://adsb.mindlesstux.com/static/';

// -- Put debuging lines into console ---------------------
BOOL_DEBUG = true;