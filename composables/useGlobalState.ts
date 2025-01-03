import {createGlobalState} from "@vueuse/core"
export const useGlobalState = createGlobalState(()=> {
    const colorPreference = toRef('system')
    const projects = toRef([
        {
            name : 'CoinScouter',
            link: 'https://coinscouter.com/',
            about:'Web3 | Multi Vendor NFT Marketplace | E-Commerce | Trading Platform',
            image:'/img/coinscouter.webp'
        },
        {
            name : 'Meshmorph',
            link: 'https://meshmorph.com/',
            about:'3D | Multi Vendor 3D assets Marketplace | E-Commerce',
            image:'/img/meshmorph.webp'
        },
        {
            name : 'My Benefits Work',
            link: 'https://mybenefitswork.com/',
            about:'Insurance | Web App | E-Commerce',
            image:'/img/mybeniftworks.webp'
        },
        {
            name : 'Mockcertified',
            link: 'https://www.mockcertified.com/',
            about:'Alexa | Web App | Ed-Tech | PWA',
            image:'/img/mockcertified.webp'
        },
        {
            name : 'Noraina Cloud',
            link: 'https://www.noraina.cloud/',
            about:' Cloud Provider | SAAS | Web App ',
            image:'/img/noraina.webp'
        },
        {
            name : 'Dr Vimal Eye Hospital',
            link: 'https://www.drvimalseye.hospital/',
            about:' JAM Stack | Website ',
            image:'/img/vimal.webp',
           
        },
        {
            name : 'Chronim Logistics',
            link: 'https://chronimdeliveryandlogistics.com/',
            about:' JAM Stack | Web App | Logistics Provier ',
            image:'/img/chronim.webp',
           
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