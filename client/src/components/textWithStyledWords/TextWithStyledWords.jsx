import React from 'react'

export const TextWithStyledWords = ({ paragraph, wordsToStyleOne, wordsToStyleTwo}) => {
    // const words = paragraph.split(/(\s+|[,.\s]+)/).filter(palabra => palabra.trim() !== '');
    //const words = paragraph.split(/([,.]+)/).flatMap(word => word.trim().split(/\s+/)).filter(palabra => palabra.trim() !== '');
    const words = paragraph.replace(/([.,])/g, ' $1 ').split(/\s+/)
    const palabras = paragraph.replace(/([.,])/g, ' $1 ').split(/\s+/) // Dividir el texto por espacios en blanco

    console.log(palabras);

    const ApplyStyle = (word,wordsToStyle) => {
      return wordsToStyle.includes(word.toLowerCase());
    };
  
    // Aplicar estilos a las palabras específicas
    
    const styledParagraph = (
      <p>
        {words.map((word, index) => {
          if (ApplyStyle(word,wordsToStyleOne)) {
            return (
              <span key={index} style={{ fontWeight: 'bold', color: 'black' }}>
                {word}
              </span>
            );
          }
          else if (ApplyStyle(word,wordsToStyleTwo)){
            return (
              <span key={index} style={{ fontWeight: 'bold', color: '#FF8300' }}>
                {word}
              </span>
            );
          }
            return <span key={index}>{word} </span>  
        })}
      </p>
    );
  
    return styledParagraph;
};
