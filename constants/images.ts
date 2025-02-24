import { ImageSourcePropType, Image } from 'react-native';
const unknownArtistImage = require('@/assets/images/unknown_artist.png');
const unknownTrackImage = require('@/assets/images/unknown_track.png');

const unknownTrackImageSource: ImageSourcePropType = unknownTrackImage;
const unknownArtistImageSource: ImageSourcePropType = unknownArtistImage;

export const unknownTrackImageUri = Image.resolveAssetSource(unknownTrackImageSource).uri;
export const unknownArtistImageUri = Image.resolveAssetSource(unknownArtistImageSource).uri;