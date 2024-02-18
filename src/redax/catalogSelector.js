export const catalogSelector = state => state.catalog.cars;
export const allcatalogSelector = state => state.catalog.allcars;
export const selectIsLoading = state => state.catalog.isLoading;
export const selectFilter = state => state.catalog.filter;
export const selectFilterFavorites = state => state.catalog.filterFavorites;
export const selectFavorites = state => state.catalog.favorites;

export const modalSelector = state => state.catalog.modal;
export const modalDataSelector = state => state.catalog.modalData;

export const selectLoadPage = state => state.catalog.loadpage;

