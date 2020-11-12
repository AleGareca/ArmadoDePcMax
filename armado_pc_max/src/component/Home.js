import{ Component } from 'react'
import '../assets/css/style.css'

import TopBar from './Home'

import SobreNosotros from './SobreNosotros'
import Viajes from './Viajes'

export default class Home extends Component {

    render() {
        return (
            <div >
                <TopBar/>
          </div>
        )
    }
}
