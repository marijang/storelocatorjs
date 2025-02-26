/**
 * storelocatorjs default options
 * @module storelocatorjs/defaultOptions
 */
export default {
	apiKey: '',
	webServiceUrl: '',
	cluster: {
		options: {
			averageCenter: true,
			gridSize: 50,
			imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
			maxZoom: 13,
			minimumClusterSize: 2,
			styles: [],
			zoomOnClick: true
		},
		status: false
	},
	messages:{
		resultsText: 'results sorted by distance correspond to your research!!',
		noResultsText: 'No results for your request.<br />Please try a new search with differents choices.'
	},
	debug: false,
	geolocation: {
		startOnLoad: false,
		status: true
	},
	map: {
		markers: {
			width: 60,
			height: 60,
			labelX: 'auto',
			labelY: 'auto',
			styles: [{
				category: 'userPosition',
				colorBackground: '#4285f4',
				colorText: '#fff'
			}]
		},
		options: {
			center: [46.227638, 2.213749],
			disableDefaultUI: false,
			fullscreenControl: true,
			mapTypeControl: false,
			mapTypeId: 'roadmap',
			scaleControl: false,
			scrollwheel: true,
			streetViewControl: false,
			styles: [],
			zoom: 6
		}
	},
	requests: {
		searchRadius: 50,
		storesLimit: 20
	},
	selectors: {
		container: '.storelocator',
		formSearch: '.storelocator-formSearch',
		geolocButton: '.storelocator-geolocButton',
		inputSearch: '.storelocator-inputSearch',
		loader: '.storelocator-loader',
		nav: '.storelocator-nav',
		searchFilters: '[data-filter]',
		sidebar: '.storelocator-sidebar',
		sidebarResults: '.storelocator-sidebarResults'
	},
	markersUpdate: {
		limitInViewport: 30,
		maxRadius: 150,
		status: true,
		stepRadius: 50
	}
}
