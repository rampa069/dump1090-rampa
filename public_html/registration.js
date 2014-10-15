
// This is the master lookup
function regLookup(plane) {
	trigger_lookup = false;
	if (plane.country == null)
		trigger_lookup = true;
	if (plane.country_short == null)
		trigger_lookup = true;
	if (plane.country_flag == "NoFlag.bmp")
		trigger_lookup = true;
	if (plane.type == "@@@")
		trigger_lookup = true;
	if (plane.operator == "@@@")
		trigger_lookup = true;
	if (plane.registration == "NO-REG")
		trigger_lookup = true;

	if (trigger_lookup == true) {
		//url_string = "http://testing-1.dump1090-helper.appspot.com/search/icao24/" + plane.icao.toUpperCase() + ".json"
		url_string = "http://adsb.mindlesstux.com/search/icao24/" + plane.icao.toUpperCase() + ".json"
		//url_string = "http://localhost:8080/search/icao24/" + plane.icao.toUpperCase() + ".json"
		$.ajax({
			url: url_string,
			dataType: ajaxDataType,
			success: function(data) {
                plane.lookedup = true;
                plane.country = data.country;
                plane.country_flag = data.country_flag;
                plane.country_short = data.country_short;
                plane.operator = data.operator;
                plane.registration = data.registration;
                if (data.type != "") {
                    plane.type = data.type;
                }
                plane.serialNo = data.serialNo;
                plane.manufacturer = data.manufacturer;
                plane.mantama_id = data.mantama_id;
			},
		});
		plane.lookedup = true;
	}
}

