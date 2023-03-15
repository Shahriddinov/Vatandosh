import "./Registration.scss";
import { LoginIn } from './component/LoginIn/LoginIn'
import { LoginUp } from './component/LoginUp/LoginUp'

export const Registration = () => {
    return (
        <div className='registration'>
            <LoginIn />
            {/* <LoginUp /> */}
        </div>
    )
}