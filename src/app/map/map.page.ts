import { Component, OnInit } from '@angular/core';
import  * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
 map: L.Map
  constructor() { }

 ngOnInit() {
    this.map = L.map(`map`, {
      center: [41.100,21.145275],
      zoom: 7,
      rederer: L.canvas()
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.map);

setTimeout(() => {
  this.map.invalidateSize();
}, 0);
    
     var  OSM_URL  =  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';  
      var  OSM_ATTRIB  =  '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';  
      var  osmLayer  =  L.tileLayer(OSM_URL,  {attribution:  OSM_ATTRIB});  
  
      var  WAQI_URL    =  "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";  
      var  WAQI_ATTR  =  'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
      var  waqiLayer  =  L.tileLayer(WAQI_URL,  {attribution:  WAQI_ATTR});  
      this.map.addLayer(osmLayer).addLayer(waqiLayer);  

  }
  
  
}

