import astronaut from '../../assets/astronaut.png'
import background from '../../assets/404background.jpg'
import { Logo } from '../Logo/Logo'
import {
    PageNotFoundContainer,
    TopBar,
    Header404,
    Paragraph404,
    AstronautImage,
} from './PageNotFound.styles'

export const PageNotFound = () => {
    return (
        <>
            <PageNotFoundContainer src={background}>
                <TopBar>
                    <Logo />
                </TopBar>
                <Header404>404</Header404>
                <Paragraph404>Strona nie została odnaleziona!</Paragraph404>
                <AstronautImage src={astronaut} />
            </PageNotFoundContainer>
        </>
    )
}
