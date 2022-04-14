/*eslint-disable*/

import React from "react";
import "./Main.scss";

function Main() {
    return (
        <body>
    <nav>
        <div className="iconLeft">
            <img className="icon_insta" src="/img/insta.png"/> 
            <span className="logo_insta">Instagram</span>
        </div>
       
        <div className="iconCenter">
            <input type="text" class="searchBar" placeholder="검색"/>
            <img className="icon_magnify" src="/img/magnify.png"/>
        </div>

       
        <div className="iconRight">
            <img className="icon_explore" src="/img/explore.png"/>
            <img className="icon_heart" src="/img/heart.png"/>
            <img className="icon_profile" src="/img/profile.png"/>
        </div>
    </nav>

    <main>
        <div className="feeds">
            <article>
                <div className="art_head">
                    <div className="head_left">
                        <img className="ny_photo" src="/img/ny_photo.jpg"/>
                        <span className="id_head">nyny </span>
                    </div>
                    <img className="icon_dot" src="/img/dot.png"/>

                </div>
                <div className="art_main">
                    <img className="dog_photo" src="/img/dog_photo.jpg"/>
                </div>
                <div className="art_foot">
                    <div className="art_footIcon">
                        <div className="foot_left">
                            <img src="/img/heartW.png"/>
                            <img src="/img/chat.png"/>
                            <img src="/img/upload.png"/>
                        </div>
                        <img className="icon_save" src="img/saveW.png"/>
                    </div>
                    <div className="art_footCount">
                        <img className="pudog_photo" src="img/pudog.jpg"/>
                        <span className="id_count">wangaeng</span>님 외&nbsp;<span class="num_count">30명</span>이 좋아합니다
                    </div>
                    <div className="art_footChat">
                        <div className="foot_chat">
                            <div className="con_chat">                          
                                <span className="id_chat">daengdaeng2</span>
                                <span className="com_chat">누가 제 사진을 찍어놨죠 댕댕사찰 아닌가요</span>
                            </div>
  
                            <img className="heart_chat" src="img/heartW.png"/>
                        </div>
                        <div className="foot_chat">
                            <div className="con_chat">                            
                                <span className="id_chat">seongown</span>
                                <span className="com_chat">왕바우~~🐶</span>   
                            </div>
                            <img className="heart_chat" src="img/heartW.png"/>
                        </div>

                        <ul className="ulCom"></ul>

                        <div className="foot_time">
                            <span>42</span>분 전
                        </div>
                    </div>
                    <div className="art_footWrite">
                        <input className="foot_write" type="text" placeholder=" 댓글 달기..."/>
                        <button className="foot_butt">게시</button>
                    </div>
    
                </div>


            </article>
        </div>

        <div className="main-right">

            <div className="rightHead">
                <img className="profilePhoto" src="/img/arrDog.jpg"/>
                <div className="profileMain">
                    <span className="profileId">w-concept </span>
                    <span className="profileDetail">WeCode | 위코드</span>
                </div>
                
            </div>

            <article>
                <div className="rightStory">
                    <div className="storyHead">
                        <span>스토리</span>
                        <button>모두 보기</button>
                    </div>

                    <div className="storyList">
                        <div className="storyMain">
                            <img className="otherPhoto" src="/img/arrDog.jpg"/>

                            <div className="otherPerson">
                            <span className="otherId">baemin_official</span>
                            <span className="otherTime">1시간 전</span>
                            </div>

                        </div>

                        <div className="storyMain">
                            <img className="otherPhoto" src="/img/arrDog.jpg"/>

                            <div className="otherPerson">
                            <span className="otherId">baemin_official</span>
                            <span className="otherTime">1시간 전</span>
                            </div>

                        </div>

                        <div className="storyMain">
                            <img className="otherPhoto" src="/img/arrDog.jpg"/>

                            <div className="otherPerson">
                            <span className="otherId">baemin_official</span>
                            <span className="otherTime">1시간 전</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="rigthRecom"></div>
            </article>
            <footer></footer>
        </div>
    </main>

  

</body>

    )
}

export default Main;