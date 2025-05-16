export type Coordinates = {
    latitude?: string;
    longitude?: string;
};
export type SelectOption = {
    value: string;
    title: string;
};
export type TypeaheadOption = {
    label: string;
    id: string;
};
export type LocationSearchResponse = {
    coords?: Coordinates;
    id: string;
    title?: string;
};
export type SearchTermChangeResponse = {
    searchTerm: string;
};
export type LocationSearchParams = {
    id: string;
    label: string;
    defaultId: string;
    defaultText?: string;
    sx: any;
    countryCodeLimit: string;
    allowCurrentLocation: boolean;
    handleLocationSelect: (params: LocationSearchResponse) => void;
    handleSearchTermChange?: (params: SearchTermChangeResponse) => void;
    handleEnterClick?: () => void;
};
export type ApiFindAddressResponseProps = {
    latitude: string;
    longitude: string;
    title: string;
};
export type ApiSuggestResponseProps = {
    magicKey?: string;
    text?: string;
};
