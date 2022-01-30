import styled from 'styled-components';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import "bootstrap/dist/css/bootstrap.css";

export const Image = styled.img`
width: 100%;
height: auto;
`

export const Main = styled.div`
border: 1px solid #000;
width: 100%;
height: auto;
position: fixed
Align-Items: center;
Justify-Content: centre;
Display: flex
`

export const VoteButton = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
background-color: #555456;
color: white;
font-size: 36px;
padding: 20px 36px;
border: none;
cursor: pointer;
border-radius: 5px;
z-index: 10;
`

export const BlackModal = styled(Modal)`
color: white;
`

export const BlackGroupButton = styled(ToggleButton)`
  margin: auto;
  min-width: 200px;
  max-width: 500px;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-width: 2px;
  border-color: #108C92;
  color: #FFFFFF;
  text-align: center;
    &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  }
`

export const pdfObj = styled.object`
position: absolute;
top: 80%;
left: 46.5%;
z-index: 10;
margin: 0 auto;
`

export const JoinButton = styled(Button)`
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 1.3rem 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}





position: absolute;
top: 80%;
left: 46.5%;
z-index: 10;
margin: 0 auto;
`

export const BlackButton = styled(Button)`
  &.active {
  background: rgb(2,0,36);
  background: linear-gradient(13deg, rgba(2,0,36,1) 0%, rgba(123,94,184,1) 37%, rgba(0,212,255,1) 100%);
  }
  outline-color: coral !important
  margin: 0 auto;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-width: 0px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}
`

export const BlackModalBody = styled(BlackModal.Body)`
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export const BlackButtonGroup = styled(ToggleButtonGroup)``