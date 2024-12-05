import {ref} from "vue";
import {createGlobalState} from "@vueuse/core"

export const useGlobalState = createGlobalState(()=> {
    const colorPreference = toRef('')
    function changeColorPreference(color: string) {
        colorPreference.value = color
      }
  
    return {
        colorPreference,
        changeColorPreference
    }
})