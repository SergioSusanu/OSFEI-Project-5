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
  margin: 0 auto;
  max-width: var(--fullWidth);
  display: flex;
  row-gap: 1rem;
  column-gap: 1rem;
  flex-wrap: wrap;
  justify-content:center;
}

.books-center > * {
    max-width:300px;
}

`

export default StylingWrapper