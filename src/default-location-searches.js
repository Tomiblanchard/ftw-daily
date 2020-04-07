import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-helsinki',
    predictionPlace: {
      address: 'Bangkok, Thailand',
      bounds: new LatLngBounds(new LatLng(14.11963718, 100.8987364), new LatLng(13.35111928, 100.2884214)),
    },
  },
  {
    id: 'default-turku',
    predictionPlace: {
      address: 'Jakarta, Indonesia',
      bounds: new LatLngBounds(new LatLng(-5.9793590000001, 106.991070726542), new LatLng(-6.38152292392835, 106.684113013378)),
    },
  },
  {
    id: 'default-tampere',
    predictionPlace: {
      address: 'Ho Chi Minh City, Vietnam',
      bounds: new LatLngBounds(new LatLng(11.1360659787714, 107.013279296618), new LatLng(10.2714012914168, 106.363667508434)),
    },
  },
  {
    id: 'default-oulu',
    predictionPlace: {
      address: 'Kuala Lumpur, Malaysia',
      bounds: new LatLngBounds(new LatLng(3.231741955905, 101.763122999275), new LatLng(3.02692014706112, 101.621734006356)),
    },
  },
  {
    id: 'default-ruka',
    predictionPlace: {
      address: 'Manila, Philippines',
      bounds: new LatLngBounds(new LatLng(14.6304409884834, 121.037315796445), new LatLng(14.5561023111281, 120.9364722732192)),
    }, 
  },
];
