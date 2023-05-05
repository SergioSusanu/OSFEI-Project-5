import styled from "@emotion/styled"



const StylingWrapper=styled.div`
main{
    display:flex;
    flex-direction:row;
    gap:50px;
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

div.right{
    display:flex;
    flex-direction:column;
    gap:30px;
}

img{
    max-width:300px;
    margin:0px auto;
}

.book-header{
    display:flex;
    align-items:center;
}

h4{
    max-width:400px;
    margin:0px auto;
}

@media (max-width:768px){
    main {
         flex-direction:column;
    }
}

`

export default StylingWrapper
