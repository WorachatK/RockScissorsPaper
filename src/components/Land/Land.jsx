import React, { useEffect, useState } from 'react'
import { Container,Wraper,LandContainer,IconContainer,Icon,StatusContainer,TextStatus,ButtonAgain } from './LandElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand,faHandRock,faHandScissors } from '@fortawesome/free-solid-svg-icons'



const Land = ({setYourScore,yourscore,botscore,setBotScore}) => {

    const [fight,setFight] = useState(true)
    const [item,setItem] = useState({name:null})
    const [enemy,setEnemy] = useState({name:"scissors",color:"#b43147" , icon:<FontAwesomeIcon icon={faHandScissors} className="fa-5x fa-rotate-90"/>})
    const [enemyItem,setEnemyItem] = useState({name:null})
    const [status,setStatus] = useState(null)

    const rock = {name:"rock",color:"#a2b40a" , icon:<FontAwesomeIcon icon={faHandRock} className="fa-5x"/>}
    const paper = {name:"paper",color:"#374dc1" , icon:<FontAwesomeIcon icon={faHand} className="fa-5x"/>}
    const scissors = {name:"scissors",color:"#b43147" , icon:<FontAwesomeIcon icon={faHandScissors} className="fa-5x fa-rotate-90"/>}

    const stateFight=(types)=>{
        setFight(false)
        if (types === "rock"){
            setItem(rock)
        }else if(types === "paper"){
            setItem(paper)
        }else if(types === "scissors"){
            setItem(scissors)
        }
        randomEnemy()
    }
    const reset =()=>{
        setFight(true)
        setStatus(null)
        setEnemyItem({name:null})
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const randomEnemy = async event => { 
        for (let random = 0;random<=3 ;random++){
            if (random === 1){
                setEnemy(rock)
            }else if(random === 2){
                setEnemy(paper)
            }else if(random === 3){
                setEnemy(scissors)
                await delay(150)
                const ranEnemy = Math.floor(Math.random() * 3)+1;
                if (ranEnemy === 1){
                    setEnemyItem(rock)
                    setEnemy(rock)
                }else if(ranEnemy === 2){
                    setEnemyItem(paper)
                    setEnemy(paper)
                }else if(ranEnemy === 3){
                    setEnemyItem(scissors)
                    setEnemy(scissors)
                }
            }
            await delay(150)
        }
    };

    
    useEffect(()=>{
        const statusWin = <StatusContainer><TextStatus>YOU WIN</TextStatus><ButtonAgain onClick={reset}>PLAY AGIAN</ButtonAgain></StatusContainer>
        const statusLost = <StatusContainer><TextStatus>YOU LOST</TextStatus><ButtonAgain onClick={reset}>PLAY AGIAN</ButtonAgain></StatusContainer>
        const statusDraw = <StatusContainer><TextStatus>DRAW</TextStatus><ButtonAgain onClick={reset}>PLAY AGIAN</ButtonAgain></StatusContainer>
        if(item.name === "rock"){
            if(enemyItem.name ==="rock"){
                setStatus(statusDraw)
                setEnemyItem({name:null})
            }
            else if(enemyItem.name ==="paper"){
                setStatus(statusLost)
                setEnemyItem({name:null})
                setBotScore(botscore+1)
                
            }
            else if(enemyItem.name ==="scissors"){
                setStatus(statusWin)
                setEnemyItem({name:null})
                setYourScore(yourscore+1)
            }
        }else if(item.name === "paper"){
            if(enemyItem.name ==="paper"){
                setStatus(statusDraw)
                setEnemyItem({name:null})
            }
            else if(enemyItem.name ==="scissors"){
                setStatus(statusLost)
                setEnemyItem({name:null})
                setBotScore(botscore+1)
            }
            else if(enemyItem.name ==="rock"){
                setStatus(statusWin)
                setEnemyItem({name:null})
                setYourScore(yourscore+1)
            }
        }else if(item.name === "scissors"){
            if(enemyItem.name ==="scissors"){
                setStatus(statusDraw)
                setEnemyItem({name:null})
            }
            else if(enemyItem.name ==="rock"){
                setStatus(statusLost)
                setEnemyItem({name:null})
                setBotScore(botscore+1)
            }
            else if(enemyItem.name ==="paper"){
                setStatus(statusWin)
                setEnemyItem({name:null})
                setYourScore(yourscore+1)
            }
            
        }
    },[item,enemyItem,botscore,setBotScore,yourscore,setYourScore])
    

  return (
    <Container>
        {fight ? (
            <Wraper>

                <LandContainer>
                    <IconContainer type={paper.color} onClick={()=>stateFight("paper")}>
                        <Icon>
                            <FontAwesomeIcon icon={faHand} className="fa-5x"/>
                        </Icon>
                    </IconContainer>
                    <IconContainer type={scissors.color} onClick={()=>stateFight("scissors")}>
                        <Icon>
                            <FontAwesomeIcon icon={faHandScissors} className="fa-5x fa-rotate-90"/>
                        </Icon>
                    </IconContainer>
                </LandContainer>

                <IconContainer type={rock.color} onClick={()=>stateFight("rock")}>
                    <Icon>
                        <FontAwesomeIcon icon={faHandRock} className="fa-5x"/>
                    </Icon>
                </IconContainer>

            </Wraper>
        ):(
            <Wraper>
                <LandContainer>
                    <IconContainer type={item.color} onClick={reset}>
                        <Icon>
                            {item.icon}
                        </Icon>
                    </IconContainer>
                    <IconContainer type={enemy.color}>
                        <Icon>
                            {enemy.icon}
                        </Icon>
                    </IconContainer>
                </LandContainer>
                {status}
            </Wraper>
        )}
    </Container>
  )
}

export default Land