const color = 'color';

const position = 'position';

const basicInputs = [
  'id',
  'show'
];

const basicInputsWithPosition = [
  'id',
  'show',
  position
];

const billboardLabelCommon = [
  'eyeOffset',
  'heightReference',
  'horizontalOrigin',
  'pixelOffset',
  'pixelOffsetScaleByDistance',
  'scale',
  'translucencyByDistance',
  'verticalOrigin'
];

const outlineInputs = [
  'outlineColor',
  'outlineWidth'
];

export const cesiumPointInputs = [
  ...basicInputsWithPosition,
  ...outlineInputs,
  color,
  'pixelSize',
];

export const cesiumBillboardInputs = [
  ...basicInputsWithPosition,
  ...billboardLabelCommon,
  color,
  'alignedAxis',
  'height',
  'image',
  'rotation',
  'sizeInMeters',
  'width'
];

export const cesiumLabelInputs = [
  ...basicInputsWithPosition,
  ...billboardLabelCommon,
  ...outlineInputs,
  'fillColor',
  'font',
  'style',
  'text'
];

export const cesiumPolylineInputs = [
  ...basicInputs,
  'width',
  'loop',
  'material',
  'positions',
  'distanceDisplayCondition'
];

export const cesiumEntityInputs = [
  ...basicInputsWithPosition,
  'name',
  'availability',
  'description',
  'orientation',
  'viewFrom',
  'parent'
];

export const cesiumWmsImageryProviderInputs = [
  'url',
  'layers',
  'parameters',
  'getFeatureInfoParameters',
  'enablePickFeatures',
  'getFeatureInfoFormats',
  'rectangle',
  'tilingScheme',
  'ellipsoid',
  'tileWidth',
  'tileHeight',
  'minimumLevel',
  'maximumLevel',
  'credit',
  'proxy',
  'subdomains'
];

export const cesiumGoogleEarthImageryProviderInputs = [
  'url',
  'channel',
  'path',
  'maximumLevel',
  'tileDiscardPolicy',
  'ellipsoid',
  'proxy'
];
