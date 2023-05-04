import styled from "@emotion/styled"

const StylingWrapper=styled.div`
.section {
  padding: 0;
}
.section-title {
  font-size: 2rem;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.books-center {
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;
  /* align-items: start; */
}
@media screen and (max-width: 767px) {
  .books-center {
    grid-template-columns: auto;
  }
}

@media screen and (min-width: 768px) {
  .books-center {
    grid-template-columns: auto auto;
  }
}

@media screen and (min-width: 992px) {
  .books-center {
    grid-template-columns: auto auto auto;
  }
}

@media screen and (min-width: 1200px) {
  .books-center {
    grid-template-columns: auto auto auto auto;
  }
}
`

export default StylingWrapper