import React, { useState } from "react";
import {
  ContainerTags,
  TagItem,
  TagText,
  ButtonDelete,
  TagInput,
} from "./styled-components/styles";

const InputTag = ({ width, placeholder, id, name, value, setValue, setTypeSkills, onChange }) => {
  const [tags, setTags] = useState([]);
  // const [text, setText] = useState("")

  const handleKeyDow = (e) => {
    if (e.key !== "Enter") return;

    const { value } = e.target;

    if (!value.trim()) return;

    setTags([...tags, value]);
    setTypeSkills([...tags, value])

    setValue("");
  };

  const removeTag = (index) => {
    setTags(tags.filter((_,i) => i !== index))
  }

  return (
    <ContainerTags>
      {tags?.map((tag, index) => (
        <TagItem key={`tag-id-${index}`}>
          <TagText>{tag}</TagText>
          <ButtonDelete onClick={() => removeTag(index)}>x</ButtonDelete>
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
        width={width}
      />
    </ContainerTags>
  );
};

export default InputTag;
