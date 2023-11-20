import React from 'react'

export const TextWithStyledWords = ({ paragraph, wordsToStyleOne, wordsToStyleTwo}) => {
    const words = paragraph.replace(/([.,])/g, ' $1 ').split(/\s+/)
    const palabras = paragraph.replace(/([.,])/g, ' $1 ').split(/\s+/)

    console.log(palabras);

    const SearchApplyStyle = (word,wordsToStyle) => {
      return wordsToStyle.includes(word.toLowerCase());
    };
    const ApplyStyle = (word,index,style={}) =>{
      return (
        <span key={index} style={style}>
          {(words[index+1] === ",") || (words[index+1] === ".")?`${word}`:`${word} `}
        </span>
      )
    }

    const styledParagraph = (
      <p>
        {words.map((word, index) => {
          if (SearchApplyStyle(word,wordsToStyleOne)) {
            const style = { fontWeight: 'bold', color: 'black' }
            return ApplyStyle(word, index, style)
          }
          else if (SearchApplyStyle(word,wordsToStyleTwo)){
            const style = { fontWeight: 'bold', color: '#FF8300' }
            return ApplyStyle(word, index, style)
          }
          else{
            return ApplyStyle(word, index)
          }
        })}
      </p>
    );
  
    return styledParagraph;
};
