import styled from "styled-components";

export const Container = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wraper = styled.div`
    border: 2px solid gray;
    width: 800px;
    height: 15vh;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TextContainer = styled.div`
    color: white;

`
export const TextHead = styled.h2`
    @media (max-width: 500px){
        font-size: 20px;
    }
`
export const ScoreContainer = styled.div`
    background-color: #fff;
    color: black;
    padding: 10px 40px;
    border-radius: 10px;

    @media (max-width: 500px){
        padding: 5px 10px;
    }
`
export const ScoreP = styled.p`
    text-align: center;
`
export const ScoreH = styled.h1`
    text-align: center;
`