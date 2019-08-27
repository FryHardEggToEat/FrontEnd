import React, {Component} from 'react'
import Divider from './Divider'
import BabyCard from './sugarbaby/Babycard'

class SugarBaby extends Component {
    url  = 'http://192.168.43.45:5000';
    state = {
        '英弘': { ppl_cnt: 0 , money: 0 },
        'Ian': { ppl_cnt: 20, money: 0 },
        '秉玨': { ppl_cnt: 10, money: 10 },
        '劭爺': { ppl_cnt: 20, money: 20 },
    }
    distributeMoney = () => {
        const path  = this.url + '/distribute_money';
        fetch(path)
        .then(res=>res.json())
        .then(data => { 
            console.log(data);
            this.setState(data);
        });
    }
    updateData = () => {
        const path  = this.url + '/baby/all';
        fetch(path)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState(data);
        })

    }
    componentDidMount() {
        this.updateData();
    }
    render() {
        const babies = [
            { id: '英弘', name: '呂英弘', description: '潮到出水', img: './images/louis.jpg', since: '2014'},
            { id: 'Ian', name: '林耘熠', description: '電子琴大師', img: './images/ian.jpg', since: '2010'},
            { id: '秉玨', name: '陳秉珏', description: '洞簫客', img: './images/jade.jpg', since: '1997'},
            { id: '劭爺', name: '沈昶劭', description: '公館彭于晏', img: './images/shao.jpg', since: '2015'},
        ]
        return (
            <div class="ui  container">
                <div class="ui">
                    <button class="ui button" onClick={this.distributeMoney}>分錢</button>
                </div>
                
                <Divider icon="child icon" description="Street Artists" />
                <div class="ui four stackable cards">
                    {babies.map((item, index) => (
                        <BabyCard
                            key={index}
                            name={item.name}
                            description={item.description}
                            img={item.img}
                            fans={this.state[item.id].ppl_cnt}
                            money={this.state[item.id].money}
                            since={item.since}/>
                    ))}
                    {/* <BabyCard
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
                    /> */}
                    
                </div>
            </div>
        )
    }
}

export default SugarBaby
