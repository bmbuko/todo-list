import Global from '../Global/Global'
import Link from './Link'

const config ={
  title:'components/Link'  
}
export  default config
const Default =()=><Global><Link url='/test'> CLICK ME!</Link></Global>

const Full =()=><Global><Link url='/test' fullWidth ={true}> CLICK ME!</Link> </Global>

const Disabled =()=><Global><Link disabled url='/test'> CLICK ME!</Link></Global>
export{
    Default,
    Full,
    Disabled
    
};