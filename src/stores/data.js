import { defineStore } from 'pinia'
import { useFetchAllData, useFetchDataByID } from '@/composables/fetchData.js'

export const useDataStore = defineStore('data', {
  state: () => ({
    flowers: null,
    flowerSelected: null
  }),

  getters: {
    dataFiltered: ({ search }) => this.flowers?.filter((item) => item.name.includes(search))
  },

  actions: {
    fetchData() {
      const { data, error } = useFetchAllData()

      if (error) {
        // Handle error here...
      }

      this.flowers = data
    },

    fetchDataByID(id) {
      const { data, error } = useFetchDataByID({ id })

      if (error) {
        // Handle error here...
      }

      this.flowerSelected = data
    }
  }
})
