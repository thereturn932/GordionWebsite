import { useWeb3React } from "@web3-react/core"
import { injected } from "./injection"
import styled from 'styled-components';

export const ConnectButton = ()=> {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
  
    async function connect() {
      try {
        await activate(injected)
      } catch (ex) {
        console.log(ex)
      }
    }
  
    async function disconnect() {
      try {
        deactivate()
      } catch (ex) {
        console.log(ex)
      }
    }
  
    return (
      <div>
        {!active ? <StConnect onClick={connect}>Connect</StConnect> : <StConnect onClick={disconnect}>Disconnect</StConnect>}
      </div>
    )
  }

export const StConnect = styled.button`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

margin-left: 24px;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`
