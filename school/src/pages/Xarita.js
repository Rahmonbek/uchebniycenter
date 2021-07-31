import React, { Component } from 'react'
import { Tooltip } from 'react-bootstrap'
import {YMaps, Map, Clusterer, Placemark, 
    TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl } from 'react-yandex-maps'
  
export default class Xarita extends Component {
    state={
        points:[
            {
                name: "ZAKO",
                param: [41.354353, 69.223353], 
              },
              {
                name: "IT Tower",
                param: [41.317648, 69.230585], 
              },
              {
                name: "PDP",
                param: [41.295995, 69.175190], 
              },
              {
                name: "ICT academy",
                param: [41.281412, 69.212667], 
              },
              {
                name: "Roboticslab",
                param: [41.235069, 69.247354], 
              },
              {
                name: "Najot ta'lim",
                param: [41.286009, 69.253749], 
              },
             
        ]
    }
    render() {
        return (
            <div>
                   <YMaps >
        <Map
          width='100vw'
          height='100vh'
          defaultState={{
            center: [41.311151, 69.279716],
            zoom: 8
          }}
        >
          <Clusterer options={{  preset: 'islands#invertedVioletClusterIcons',  groupByCoordinates: false, }}  >
            {this.state.points.map((coordinates, index) => (
              
              <Placemark  balloonContent= '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />'
              iconContent= {coordinates.name}   key={index}
               geometry={coordinates.param} 
               options={{preset: "islands#blueStretchyIcon",
               // Отключаем кнопку закрытия балуна.
               balloonCloseButton: false,
                // Балун будем открывать и закрывать кликом по иконке метки.
               hideIconOnBalloonOpen: false,
               openBalloonOnClick:true}}/>
            ))}
          </Clusterer> 
          <GeolocationControl options={{ float: 'left' }} />
          <TypeSelector options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
          <RouteButton options={{ float: 'right' }} />
          <ZoomControl options={{ float: 'left' }} />
  
        </Map>
    </YMaps>
            </div>
        )
    }
}
