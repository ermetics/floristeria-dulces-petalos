import { defineStore } from 'pinia';
import { useFetchAllData, useFetchDataByID } from '@/composables/fetchData.js';
import { useHandleErrors } from '@/composables/handleErrors.js';

const { captureError } = useHandleErrors();

export const useDataStore = defineStore('data', {
  state: () => ({
    apiError: {
      status: false,
      message: ''
    },
    flowers: [],
    flowerSelected: null,
    searchInput: ''
  }),

  getters: {
    dataLoadHaveError: (state) => state.apiError.status,
    dataLoadIsLoading: (state) => !state.apiError.status && !state.flowers?.length,
    dataLoadIsReady: (state) => !state.apiError.status && state.flowers?.length,

    filteredFlowers: (state) => {
      return state.flowers?.filter((flower) => {
        return (
          flower?.name?.toLowerCase()?.includes(state.searchInput?.toLowerCase()) ||
          flower?.binomialName?.toLowerCase()?.includes(state.searchInput?.toLowerCase())
        );
      });
    }
  },

  actions: {
    async fetchData() {
      const { data, error } = await useFetchAllData();

      if (error) {
        this.apiError.status = true;
        this.apiError.message = error;

        captureError(error);
        this.flowers = [];
        return;
      }

      this.flowers = [...data];
      return;
    },

    async fetchDataByID(id) {
      const { data, error } = await useFetchDataByID({ id });

      if (error) {
        this.apiError.status = true;
        this.apiError.message = error;

        captureError(error);
        this.flowerSelected = null;
        return;
      }

      this.flowerSelected = { ...data };
      return;
    },

    onClearSearchInput() {
      this.searchInput = '';
    },

    onUpdateSearchInput(value) {
      this.searchInput = value;
    },

    resetSelectedFlower() {
      this.flowerSelected = null;
    }
  }
});
