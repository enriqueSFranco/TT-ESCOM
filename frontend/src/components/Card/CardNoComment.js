import {
  SkeletonCard,
  WrapperImage,
  WrapperParagraph,
  SkeletonParagraph,
  Image,
} from "./styled-components/CardNoCommentStyled";

// const styles = {
//   wrapperCard2: {
//     position: "relative",
//     bottom: "1.5rem",
//     left: "3rem",
//   },
// };

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
