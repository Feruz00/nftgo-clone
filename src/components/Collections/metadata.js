import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import homeless from '../../asserts/meta/homeless.jpg'
import lunians from '../../asserts/meta/lunians.png'
import marvallous from '../../asserts/meta/marvallous.png'
import zzoopers from '../../asserts/meta/zzoopers.jpg'


const data=[
    {
        name:'MetaOasis DAO - Zzoopers', 
        icons: [
            {name: 'Website', icon: LanguageIcon}, 
            {name:'Twitter', icon: TwitterIcon},
            {name: 'Github', icon: GitHubIcon},
            {name: 'View All', icon: ArticleIcon}
        ],
        image: zzoopers,
        total: '5,555',
        price: '0.15 ETH',
        time: 60 * 60 * 1+ 39
    },

    {
        name:'Homeless Friends', 
        icons: [
            {name: 'Website', icon: LanguageIcon}, 
            {name:'Twitter', icon: TwitterIcon},
            {name: 'Github', icon: GitHubIcon},
            {name: 'View All', icon: ArticleIcon}
        ],
        image: homeless,
        total: '9,999',
        price: '0.15 ETH',
        time: 60 * 60 * 3 + 34
    },

    {
        name:'Lunians', 
        icons: [
            {name: 'Website', icon: LanguageIcon}, 
            {name:'Twitter', icon: TwitterIcon},
            {name: 'View All', icon: ArticleIcon}
        ],
        image: lunians,
        total: '909',
        price: '0.03 ETH',
        time: 60 * 60 * 6 + 43
    },

    {
        name:'marvallous', 
        icons: [
            {name: 'Website', icon: LanguageIcon}, 
            {name:'Twitter', icon: TwitterIcon},
            {name: 'Github', icon: GitHubIcon},
            {name: 'View All', icon: ArticleIcon}
        ],
        image: marvallous,
        total: '2,222',
        price: '0.06 ETH',
        time: 60 * 60 * 6 + 51
    }
]

export {data}