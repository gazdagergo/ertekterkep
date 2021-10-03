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
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: -5px 0 4px #55555555;
  ${({ $isVisible }) => $isVisible ? `
    max-width: 400px;
  ` : `
    max-width: 0;
  `}
`

const DrawerHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background: white;
`

const Close = styled.div`
  &:before {
    content: '✕';
    font-size: 18px;
    color: #444;
    cursor: pointer;
    padding: 6px;
  }
`

const DrawerBody = styled.div`
  padding: 20px 10px;
`

const Drawer = ({ isVisible, children, onClose }) => {
  return (
    <Wrap $isVisible={isVisible}>
      <DrawerHeader>
        <Close onClick={onClose} />
      </DrawerHeader>
      <DrawerBody>
        {children}
      </DrawerBody>
    </Wrap>
  )
}

export default Drawer
