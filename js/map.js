if( document.getElementsByClassName("map-box")[0] ) {

			var map;

			var marker;
			var image = 'img/contacts_map_marker.png';

			var styles;

			function initMap() {

				var styles =  [
				    {
				        "featureType": "landscape.man_made",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#b92a2a"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape.natural",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#c02b2b"
				            }
				        ]
				    },
				    {
				        "featureType": "landscape.natural.terrain",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#ff0000"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.government",
				        "elementType": "all",
				        "stylers": [
				            {
				                "color": "#c22c2c"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "all",
				        "stylers": [
				            {
				                "color": "#a91616"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.place_of_worship",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#ba4c4c"
				            }
				        ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#d43030"
				            }
				        ]
				    },
				    {
				        "featureType": "water",
				        "elementType": "all",
				        "stylers": [
				            {
				                "color": "#d65b5b"
				            }
				        ]
				    }
				];


				var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map"});

				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: 55.7497282, lng: 37.5346446},
					// 59.9711252,30.2972661
					scrollwheel: false,
					scaleControl: false,
					zoom: 16
				});

				marker = new google.maps.Marker({
					map: map,
					draggable: false,
					animation: google.maps.Animation.DROP,
					position: {lat: 55.7497282, lng: 37.5346446},
					map: map,
					icon: image,
					title: 'Novaton'
				});

				marker.addListener('click', toggleBounce);

				//Associate the styled map with the MapTypeId and set it to display.
				map.mapTypes.set('map_style', styledMap);
				map.setMapTypeId('map_style');


			}

				function toggleBounce() {
				  if (marker.getAnimation() !== null) {
				    marker.setAnimation(null);
				  } else {
				    marker.setAnimation(google.maps.Animation.BOUNCE);
				  }
				}

		}



