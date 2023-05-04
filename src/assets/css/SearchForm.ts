import styled from "@emotion/styled"



const StylingWrapper=styled.div`
.search {
  margin-top: 1rem;
  padding-bottom: 0;
}

.search-form {
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--maxWidth);
  background: var(--mainWhite);
  padding: 1rem 1.5rem;
  text-transform: capitalize;
  border-radius: var(--mainBorderRadius);
  box-shadow: var(--lightShadow);
}

.form-control{
  display:flex;
}

.form-control label {
  display: block;
  font-size:26px;
  font-weight: bold;
  color: var(--primaryColor);
  min-width:200px;
}
.form-control input {
  width: 100%;
  border: none;
  border-color: transparent;
  background: var(--mainBackground);
  border-radius: var(--mainBorderRadius);
  padding: 0.5rem;
  font-size: 1.2rem;
}
`

export default StylingWrapper
