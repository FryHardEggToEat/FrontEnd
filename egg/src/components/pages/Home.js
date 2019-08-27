import React from 'react'
import { Component } from 'react'

import Divider from './Divider'

class Home extends Component {
    render() {
        return (
            <div>
                <div class="ui container">
                    <div class="ui header">
                        <h1>專案介紹</h1>
                    </div>
                    <Divider icon="tags icon" description="解決問題" />
                    <ul class="ui list">
                        <li>讓街頭藝人有更穩定的收入</li>
                        <li>任何人只要開心欣賞表演，不用擔心沒有帶零錢</li>
                        <li>贊助者能和街頭藝人產生連結</li>
                    </ul>
                    <Divider icon="thumbs up outline icon" description="贊助人的使用指南" />
                    <ul class="ui list">
                        <li>點入贊助者頁面</li>
                        <li>儲入你想要贊助Street Art的金額</li>
                        <li>街頭藝人會依當週個別人氣發給獎金</li>
                    </ul>
                    <Divider icon="gift icon" description="街頭藝人的使用指南" />
                    <ul class="ui list">
                        <li>點入街頭藝人頁面</li>
                        <li>輸入表演資訊</li>
                        <li>在申請的時間地點表演、系統會自動計算表演人氣</li>
                        <li>獎金會依表演熱度/總表演熱度發給到你的戶頭</li>
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default Home