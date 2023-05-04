import styled from "@emotion/styled"

const StylingWrapper=styled.div`
.book {
  background: var(--mainWhite);
  margin-bottom: 2rem;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--mainBorderRadius);
}
.book:hover {
  box-shadow: var(--darkShadow);
}
.book img {
  height: 20rem;
  object-fit:cover;
  border-top-left-radius: var(--mainBorderRadius);
  border-top-right-radius: var(--mainBorderRadius);
}
.book-footer {
  padding: 1.5rem;
}
.book-footer h3,
.book-footer h4,
.book-footer p {
  margin-bottom: 0.3rem;
}
.book-footer h3 {
  font-size: 2rem;
}
.book-footer p {
  color: var(--darkGrey);
  margin-bottom: 0.5rem;
}


.book-section {
  text-align: center;
}
`

export default StylingWrapper

 
