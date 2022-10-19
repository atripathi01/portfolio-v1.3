import { HdrOffSelectRounded } from "@mui/icons-material";
import { styled } from "@stitches/react";

export const Color=styled('span',{
    background: "rgb(252,179,44) linear-gradient(90deg, rgba(252,179,44,1) 0%, rgba(252,200,44,1) 100%)",
   " -webkit-background-clip": "text",
    "-webkit-text-fill-color":" transparent",
    length: 0,
    // color:'#7510f7',
})

export const Bold=styled('span',{
    fontWeight: 'bold',
    length: 0
})
export const LinkTag=({hrefLink,title})=>{
  return <a href={hrefLink}><Color>{title}</Color></a>
}

export const Input=({})=>{

}