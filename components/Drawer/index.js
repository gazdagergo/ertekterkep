import styled from "styled-components"

const Wrap = styled.div`
  transition: 0.3s;
  width: 30%;
  max-width: 400px;
  position: fixed;
  right: 0;
  height: 100vh;
  top:0;
  background: white;
  box-shadow: -5px 0 4px #55555555;
  ${({ $isVisible }) => $isVisible ? `
    max-width: 400px;
  ` : `
    max-width: 0;
  `}
`

const Drawer = ({ isVisible, children }) => {
  return (
    <Wrap $isVisible={isVisible}>
      {children}
    </Wrap>
  )
}

export default Drawer
