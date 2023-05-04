import styled from "@emotion/styled"



const StylingWrapper=styled.div`
main{
    display:flex;
    flex-direction:row;
    gap:10px;
    justify-content:center;
    margin:40px;    
}

main > div {
 flex:1;
}

div.left{
    display:flex;
    flex-direction:column;
    gap:30px;
    text-align:center;
}

img{
    max-width:300px;
    margin:0px auto;
}

.book-header{
    display:flex;
    align-items:center;
}

`

export default StylingWrapper
