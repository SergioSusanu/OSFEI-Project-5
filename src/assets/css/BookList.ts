import styled from "@emotion/styled"

const StylingWrapper=styled.div`
.section {
  padding: 0;
}
.section-title {
  font-size: 2rem;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.books-center {
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
`

export default StylingWrapper