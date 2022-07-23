import styled from "styled-components";

export const Container = styled.div`
    height: 75vh;
    display: flex;
    justify-content: center;
`
export const Wraper = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LandContainer = styled.div`
    display: flex;
    
`
export const IconContainer = styled.div`
    color: #44454e;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
    background-color: ${props => props.type};
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 500px){
        margin: 8px;
        width: 150px;
        height: 150px;
    }
`
export const Icon = styled.div`
    background-color: #eeeeee;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px){
        width: 130px;
        height: 130px;
    }
`


export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TextStatus = styled.h1`
    color: white;
    font-size: 50px;
    margin: 30px 0;
`
export const ButtonAgain = styled.button`
    padding: 10px 70px;
    cursor: pointer;
`