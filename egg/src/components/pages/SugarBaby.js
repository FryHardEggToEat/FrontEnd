import React, {Component} from 'react'

import BabyCard from './sugarbaby/Babycard'

class SugarBaby extends Component {
    render() {
        return (
            <div class="ui  container">
                <div class="ui four stackable cards">
                    <BabyCard
                        name="呂英弘"
                        description="潮到出水"
                        img="./images/louis.jpg"
                        fans="886"
                        since="2014"
                    />
                    <BabyCard
                        name="林耘熠"
                        description="電子琴大師"
                        img="./images/ian.jpg"
                        fans="3333"
                        since="2010"
                    />
                    <BabyCard
                        name="陳秉珏"
                        description="洞簫客"
                        img="./images/jade.jpg"
                        fans="2"
                        since="1997"
                    />
                    <BabyCard
                        name="沈昶劭"
                        description="公館彭于晏"
                        img="./images/shao.jpg"
                        fans="842"
                        since="2015"
                    />
                    <BabyCard
                        name="Molly"
                        description="長髮秘書柔軟show"
                        img="./images/molly.png"
                        fans="939"
                        since="2017"
                    />
                    <BabyCard
                        name="Kristy"
                        description="害羞妹子吹笛子"
                        img="./images/kristy.png"
                        fans="32"
                        since="2019"
                    />
                    <BabyCard
                        name="馬修"
                        description="超能力魔術師"
                        img="./images/matthew.png"
                        fans="456"
                        since="2014"
                    />
                    <BabyCard
                        name="Elyse"
                        description="黃金雕像"
                        img="./images/elyse.png"
                        fans="25"
                        since="1990"
                    />
                    
                </div>
            </div>
        )
    }
}

export default SugarBaby
