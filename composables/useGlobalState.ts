import {ref} from "vue";
import {createGlobalState} from "@vueuse/core"


export const useGlobalState = createGlobalState(()=> {
    const colorPreference = toRef('')
    const projects = toRef([
        {
            name : 'CoinScouter',
            link: 'https://coinscouter.com/',
            about:'Web3 | Multi Vendor NFT Marketplace | E-Commerce | Trading Platform',
            image:'/_nuxt/assets/img/coinscouter.png'
        },
        {
            name : 'Meshmorph',
            link: 'https://meshmorph.com/',
            about:'3D | Marketplace | E-Commerce',
            image:'/_nuxt/assets/img/meshmorph.png'
        },
        {
            name : 'My Benefits Work',
            link: 'https://mybenefitswork.com/',
            about:'Insurance | Web App | E-Commerce',
            image:'/_nuxt/assets/img/mybeniftworks.png'
        },
        {
            name : 'Mockcertified',
            link: 'https://www.mockcertified.com/',
            about:'Alexa | Web App | Ed-Tech | PWA',
            image:'/_nuxt/assets/img/mockcertified.png'
        },
        {
            name : 'Noraina Cloud',
            link: 'https://www.noraina.cloud/',
            about:' Cloud Provider | SAAS | Web App ',
            image:'/_nuxt/assets/img/noraina.png'
        },
        {
            name : 'Dr Vimal Eye Hospital',
            link: 'https://www.drvimalseye.hospital/',
            about:' JAM Stack | Website ',
            image:'/_nuxt/assets/img/vimal.png'
        },
        {
            name : 'Chronim Delivery and Logistics',
            link: 'https://chronimdeliveryandlogistics.com/',
            about:' JAM Stack | Web App | Logistics Provier ',
            image:'/_nuxt/assets/img/chronim.png'
        }
    ])
    function changeColorPreference(color: string) {
        colorPreference.value = color
      }
  
    return {
        colorPreference,
        changeColorPreference,
        projects
    }
})