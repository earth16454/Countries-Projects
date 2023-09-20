export interface Countries {
  name: Name;
  cca2: string;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  currencies: { code: string; name: string; symbol: string }[];
  languages: any;
  flags: Flags;
  maps: { googleMaps: string; openStreetMaps: string };
  latlng: number[];
  timezones: string[];
  coatOfArms: CoatOfArms;
}

export interface Name {
  common: string;
  official: string;
  // nativeName: { code: string; official: string; common: string };
  // nativeName: NativeName;
  nativeName: Object;
}

// export interface NativeName {
//   official: string;
//   common: string;
// }

export interface NativeName {
  "": { official: string; common: string };
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}
