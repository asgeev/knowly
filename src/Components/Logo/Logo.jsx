import { useNavigate } from 'react-router-dom'
import knowlylogo from '../../assets/icons/knowlylogo.svg'
import { LogoWrapper, LogoImg, LogoTitle, BetaTag } from './Logo.styles'

export const Logo = () => {
    const navigate = useNavigate()
    return (
        <LogoWrapper onClick={() => navigate('/', { replace: true })}>
            <LogoImg src={knowlylogo} />
            <LogoTitle>knowly</LogoTitle>
            {/* <BetaTag>BETA</BetaTag> */}
        </LogoWrapper>
    )
}
