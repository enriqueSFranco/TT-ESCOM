import React, { useState } from "react";
import {
  ContainerTags,
  TagItem,
  TagText,
  ButtonDelete,
  TagInput,
} from "./styled-components/styles";

const InputTag = ({ placeholder, id, name, value, onChange }) => {
  const [tags, setTags] = useState([]);

  const handleKeyDow = (e) => {
    if (e.key !== "Enter") return;

    const { value } = e.target;

    if (!value.trim()) return;

    setTags([...tags, value]);

    e.target.value = "";
  };

  return (
    <ContainerTags>
      {tags?.map((tag, index) => (
        <TagItem key={`tag-id-${index}`}>
          <TagText>{tag}</TagText>
          <ButtonDelete>x</ButtonDelete>
        </TagItem>
      ))}
      <TagInput
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDow}
        placeholder={placeholder}
      />
    </ContainerTags>
  );
};

export default InputTag;
