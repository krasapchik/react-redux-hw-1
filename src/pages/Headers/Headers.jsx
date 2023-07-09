
import { HeaderControl } from '../../Components'
import {Outlet} from 'react-router-dom'
const Headers = () => {
  return (
   <>
   
<HeaderControl/>
<Outlet/>
   </>
  )
}

export default Headers