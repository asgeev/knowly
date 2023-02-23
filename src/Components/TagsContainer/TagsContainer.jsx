import { TbTags } from 'react-icons/tb'
import {
    StyledTagsContainer,
    StyledTagButton,
    StyledTagsItemsContainer,
    TagsIcon,
} from './TagsContainer.styles'

export const TagsContainer = ({
    tags = [
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
        // {
        //   attributes: {
        //     tag_name: 'gasgaff',
        //   },
        // },
    ],
}) => {
    return (
        <StyledTagsContainer>
            <TagsIcon>
                <TbTags size={'3rem'} />
            </TagsIcon>
            <StyledTagsItemsContainer>
                {tags.map((tag, index) => {
                    // console.log(tag.attributes.tag_name);
                    return (
                        <StyledTagButton key={index}>
                            #{tag.attributes.slug}
                        </StyledTagButton>
                    )
                })}
            </StyledTagsItemsContainer>
        </StyledTagsContainer>
    )
}
