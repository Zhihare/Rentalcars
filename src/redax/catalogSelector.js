export const catalogSelector = state => state.catalog.cars;
export const selectIsLoading = state => state.catalog.isLoading;
export const selectFilter = state => state.catalog.filter;

export const modalSelector = state => state.catalog.modal;
export const modalDataSelector = state => state.catalog.modalData;