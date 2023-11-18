places = [{"placeName":"Cabrillo ","descrip":"National Monument located in San Diego, CA","lat":32.67225952,"long":-117.2416278},
{"placeName":"Castle Mountains","descrip":"National Monument located in Barstow, CA","lat":35.289076063598884,"long":-115.08285479194394}, 
{"placeName":"César E. Chávez","descrip":"National Monument located in Keene, CA","lat":35.22553094,"long":-118.5595158},
{"placeName":"Channel Islands","descrip":"National Park located in Ventura, CA","lat":33.97608904676543,"long":-120.11582196984959},
{"placeName":"Devils Postpile","descrip":"National Monument located in Mammoth Lakes, CA (closed until June 2024)","lat":37.6153892,"long":-119.0877022},
{"placeName":"Eugene O'Neill","descrip":"National Historic Site located in Danville, CA","lat":37.8260445,"long":-122.0271834},
{"placeName":"Fort Point","descrip":"National Historic Site located in Presidio of San Francisco, CA","lat":37.8106456,"long":-122.4771061},
{"placeName":"Golden Gate","descrip":"National Recreation Area located in San Francisco, CA","lat":37.81995403,"long":-122.478518},
{"placeName":"John Muir","descrip":"National Historic Site located in Martinez, CA","lat":37.99222,"long":-122.1310678},
{"placeName":"Joshua Tree","descrip":"National Park located in Twentynine Palms, CA","lat":33.87604167,"long":-115.9121791},
{"placeName":"Lassen Volcanic","descrip":"National Park located in Mineral, CA","lat":40.50479429,"long":-121.4215459},
{"placeName":"Lava Beds","descrip":"National Monument located in Tulelake, CA","lat":41.766361413259176,"long":-121.51452334895454},
{"placeName":"Manzanar","descrip":"National Historic Site located in Independence, CA","lat":36.72728899,"long":-118.1527304},
{"placeName":"Mojave","descrip":"National Preserve located in Barstow, CA","lat":35.12362081,"long":-115.5204071},
{"placeName":"Muir Woods","descrip":"National Monument located in Mill Valley, CA","lat":37.89711303,"long":-122.5810801},
{"placeName":"Rosie the Riveter WWII Home Front","descrip":"National Historic Park located in Richmond, CA","lat":37.90974244,"long":-122.3572418},
{"placeName":"Pinnacles","descrip":"National Park located in Paicines, CA","lat":36.4939723,"long":-121.1804091},
{"placeName":"San Francisco Maritime","descrip":"National Historical Park located in San Francisco, CA","lat":37.80647938,"long":-122.4239575},
{"placeName":"Point Reyes","descrip":"National Seashore located in Point Reyes, CA","lat":38.05393569,"long":-122.887631},
{"placeName":"Port Chicago Naval Magazine","descrip":"National Memorial located in Concord Naval Weapons Station, CA","lat":38.056648402014254,"long":-122.0274473845419},
{"placeName":"Redwood","descrip":"National and State Parks located in Del Norte & Humboldt counties, CA","lat":41.41149428,"long":-124.0345702},
{"placeName":"Santa Monica Mountains","descrip":"National Recreation Area located in Thousand Oaks, CA","lat":34.09133253,"long":-118.7356061},
{"placeName":"Sequoia & Kings Canyon","descrip":"National Parks located in Southern Sierra Nevada in Tulare and Fresno counties, CA","lat":36.69495563,"long":-118.558285},
{"placeName":"Tule Lake","descrip":"National Monument located in Tulelake, CA","lat":41.88731646,"long":-121.3770449},
{"placeName":"Whiskeytown","descrip":"National Recreation Area located in Whiskeytown, CA","lat":40.6106256,"long":-122.5280637},
{"placeName":"Yosemite","descrip":"National Park located in Sierra Nevada, CA","lat":37.86306742,"long":-119.5339438},
{"placeName":"Alacatraz Island","descrip":"Part of the Golden Gate National Recreation Area located in San Francisco, CA","lat":37.82674517,"long":-122.4231444},
{"placeName":"Presidio of San Francisco","descrip":"Historic Airfield and Army Post located in San Francisco, CA","lat":37.79678198176111,"long":-122.46694027235226}] 

for ( let i = 0; i < places.length; i++ ) {
    L.marker( [places[i].lat, places[i].long ] ) .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
    .addTo( mapTwo );
}