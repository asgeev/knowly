import { TbBuildingCommunity } from 'react-icons/tb'
import {
    UnitNameContainer,
    UnitNameIcon,
    UnitNameTiitle,
    SectionNameTiitle,
} from './UnitName.styles'

export const UnitName = ({ unit, section }) => {
    return (
        <UnitNameContainer>
            <UnitNameIcon>
                <TbBuildingCommunity size={'3rem'} />
            </UnitNameIcon>
            <div>
                {unit && (
                    <UnitNameTiitle>{unit.attributes?.unitName}</UnitNameTiitle>
                )}
                {section && (
                    <SectionNameTiitle>
                        {section.attributes?.sectionName}
                    </SectionNameTiitle>
                )}
            </div>
        </UnitNameContainer>
    )
}
