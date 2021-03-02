import App from './App.svelte';
import * as L from 'leaflet';
import '../node_modules/leaflet/leaflet.css';
import 'leaflet-arrowheads';
import 'Emigracions.csv'



const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

var mymap = L.map('mapid').setView([41.382894, 2.177432], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoidmljdG9yZ2Q5NyIsImEiOiJja2tza3g0eWMwcDB3MnZwYzZ3MzkwNjMxIn0.nB6u0xe4iE2CcTLqMolqHA'
}).addTo(mymap);

var marker = L.marker([41.799983, 1.730347]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>This marker represents Catalonia").openPopup();

var marker2 = L.marker([13.838080, 20.039063]).addTo(mymap);

marker2.bindPopup("<b>Hello world!</b><br>This marker represents the whole African continent").openPopup();

var marker3 = L.marker([13.8000382, -88.9140683]).addTo(mymap);

marker3.bindPopup("<b>Hello world!</b><br>This marker represents the whole American continent").openPopup();

var marker4 = L.marker([35.000074, 104.999927]).addTo(mymap);

marker4.bindPopup("<b>Hello world!</b><br>This marker represents the whole Asian and Oceanian continent").openPopup();

var marker5 = L.marker([55.7504461, 37.6174943]).addTo(mymap);

marker5.bindPopup("<b>Hello world!</b><br>This marker represents the countries that are not in the European Union").openPopup();

var marker6 = L.marker([51.0834196, 10.4234469]).addTo(mymap);

marker6.bindPopup("<b>Hello world!</b><br>This marker represents the countries that are in the European Union").openPopup();

/*var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
}; */



function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
	}


var myLines = [{
	"type": "Feature",
	"properties": {
		"popupContent": "995 people emmigrated from Catalunya to Africa",
		"Destination": "Africa"
	},
	"geometry": {    
		"type": "LineString",
    	"coordinates": [[1.730347,41.799983],[20.039063,13.838080]]
	}

}, {
	"type": "Feature",
	"properties": {
		"popupContent": "6.715 people emmigrated from Catalunya to America",
		"Destination": "America"
	},
	"geometry": {  
    	"type": "LineString",
    	"coordinates": [[1.730347,41.799983],  [-88.9140683, 13.8000382]]
	}
}, {
	"type": "Feature",
	"properties": {
		"popupContent": "1.650 people emmigrated from Catalunya to Asia and Oceania",
		"Destination": "Asia"
	},
	"geometry": {  
    	"type": "LineString",
    	"coordinates": [[1.730347,41.799983],  [104.999927, 35.000074]]
	}
}, {
	"type": "Feature",
	"properties": {
		"popupContent": "1.932 emmigrated from Catalunya to  the rest of Europe",
		"Destination": "Europe"
	},
	"geometry": {  
    	"type": "LineString",
    	"coordinates": [[1.730347,41.799983],  [37.6174943, 55.7504461]]
	}
}, {
	"type": "Feature",
	"properties": {
		"popupContent": "10.295 emmigrated from Catalunya to the rest of the European Union",
		"Destination": "EU"
	},
	"geometry": {  
    "type": "LineString",
    "coordinates": [[1.730347,41.799983],  [10.4234469, 51.0834196]]
	}
}, 

];

L.geoJSON(myLines, {
    style: function(feature){
        switch (feature.properties.Destination) {
            case 'Africa': return {weight: (995*10)/85251, color: "#5F04B4"};
            case 'America':   return {weight: (6715*10)/85251, color: "#5F04B4"};
			case 'Asia': return {weight: (1650*10)/85251, color: "#5F04B4"};
			case 'Europe':   return {weight: (1932*10)/85251, color: "#5F04B4"};
			case 'EU':   return {weight: (10295*10)/85251, color: "#5F04B4"};
        }}
	
	, onEachFeature:onEachFeature, arrowheads: {frequency: '50px', size: '12px'} 
}).addTo(mymap);

var myLinesIm = [{
	"type": "Feature",
	"properties": {
		"popupContent": "26.585 people immigrated from Africa to Catalunya",
		"Origin": "Africa"
	},
	"geometry": {    
		"type": "LineString",
    	"coordinates": [[20.039063,13.838080], [4.394531,27.059126], [1.730347,41.799983]]
	}

}, {
	"type": "Feature",
	"properties": {
		"popupContent": "85.251 people immigrated from America to Catalunya",
		"Origin": "America"
	},
	"geometry": {  
    	"type": "LineString",
    	"coordinates": [[-88.9140683, 13.8000382], [-39.726563,40.847060], [1.730347,41.799983]]
	}
}, {
	"type": "Feature",
	"properties": {
		"popupContent": "20.878 people immigrated from Asia and Oceania to Catalunya",
		"Origin": "Asia"
	},
	"geometry": {  
    	"type": "LineString",
    	"coordinates": [[104.999927, 35.000074],[61.523438, 47.517201],[1.730347,41.799983]]
	}
}, {
	"type": "Feature",
	"properties": {
		"popupContent": "9.672 immigrated from the rest of Europe to Catalunya",
		"Origin": "Europe"
	},
	"geometry": {  
    	"type": "LineString",
    	"coordinates": [[37.6174943, 55.7504461],[18.984375,52.268157] , [1.730347,41.799983]]
	}
}, {
	"type": "Feature",
	"properties": {
		"popupContent": "30.002 immigrated from the rest of the European Union to Catalunya",
		"Origin": "EU"
	},
	"geometry": {  
    "type": "LineString",
    "coordinates": [[10.4234469, 51.0834196],[2.570801,46.935261] ,[1.730347,41.799983]]
	}
}, 

];

L.geoJSON(myLinesIm, {
    style: function(feature){
        switch (feature.properties.Origin) {
            case 'Africa': return {weight: (26585*10)/85251, color: "#ff7800", opacity: 0.65};
            case 'America':   return {weight: (85251*10)/85251, color: "#ff7800", opacity: 0.65};
			case 'Asia': return {weight: (20878*10)/85251, color: "#ff7800", opacity: 0.65};
			case 'Europe':   return {weight: (9672*10)/85251, color: "#ff7800", opacity: 0.65};
			case 'EU':   return {weight: (30002*10)/85251, color: "#ff7800", opacity: 0.65};
        }}
	
	, onEachFeature:onEachFeature, arrowheads: {frequency: '50px', size: '12px'} 
}).addTo(mymap);

mymap.on('click', onMapClick);


export default app;