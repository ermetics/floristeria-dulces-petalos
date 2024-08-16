import { defineStore } from 'pinia'
import { useFetchAllData, useFetchDataByID } from '@/composables/fetchData.js'
import { useHandleErrors } from '@/composables/handleErrors.js'

const { captureError } = useHandleErrors()

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
        captureError(error)
      }

      this.flowers = data
    },

    fetchDataByID(id) {
      const { data, error } = useFetchDataByID({ id })

      if (error) {
        captureError(error)
      }

      this.flowerSelected = data
    }
  }
})
