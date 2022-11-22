import {
  SkeletonCard,
  WrapperImage,
  WrapperParagraph,
  SkeletonParagraph,
  Image,
} from "./styled-components/CardNoCommentStyled";

const NoComment = ({borderColor}) => {
  return (
    <SkeletonCard>
      <WrapperImage>
        <Image borderColor={borderColor} />
      </WrapperImage>
      <WrapperParagraph>
        <SkeletonParagraph />
        <SkeletonParagraph />
      </WrapperParagraph>
    </SkeletonCard>
  );
};

export default NoComment;
