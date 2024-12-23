import {ref} from "vue";
import {createGlobalState} from "@vueuse/core"


export const useGlobalState = createGlobalState(()=> {
    const colorPreference = toRef('')
    const projects = toRef([
        {
            name : 'CoinScouter',
            link: 'https://coinscouter.com/',
            about:'Web3 | Multi Vendor NFT Marketplace | E-Commerce | Trading Platform',
        },
        {
            name : 'Meshmorph',
            link: 'https://meshmorph.com/',
            about:'3D | Marketplace | E-Commerce',
        },
        {
            name : 'My Benefits Work',
            link: 'https://mybenefitswork.com/',
            about:'Insurance | Web App | E-Commerce',
        },
        {
            name : 'Mockcertified',
            link: 'https://www.mockcertified.com/',
            about:'Alexa | Web App | Ed-Tech | PWA',
        },
        {
            name : 'Noraina Cloud',
            link: 'https://www.noraina.cloud/',
            about:' Cloud Provider | SAAS | Web App ',
        },
        {
            name : 'Dr Vimal Eye Hospital',
            link: 'https://www.drvimalseye.hospital/',
            about:' JAM Stack | Website ',
        },
        {
            name : 'Chronim Delivery and Logistics',
            link: 'https://chronimdeliveryandlogistics.com/',
            about:' JAM Stack | Web App | Logistics Provier ',
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