import React from 'react';
import './Rew.css';
import Home1 from '../home/home2';


function Review() {
  return (
    <div>
        <Home1/>
          <div className="review" id="Review">
        <h1>Customer's<span>review</span></h1>
        
        <div className="review_box">
            <div className="review_card">
                <div className="card_top">
                    <div className="profile">

                        <div className="profile_image">
                            <img src="https://media.gettyimages.com/id/1729735343/photo/delhi-india-rohit-sharma-of-india-celebrates-their-century-during-the-icc-mens-cricket-world.jpg?s=612x612&w=0&k=20&c=N09VgeDe6Xjf0xmj3wkckpAyQ_SAu074yUNywEK2_SE=" alt='none'/>
                        </div>

                        <div className="name">
                            <strong>Rohit Sharma</strong>

                            <div className="like">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="comment">
                    <p>
                    I highly recommend these shoes to anyone who plays cricket, 
                    whether you’re a pro or just starting out. Comfort, durability, 
                    and performance—these shoes have it all. I’m definitely going to keep 
                    wearing them in my matches
                    </p>
                </div>
            </div>   

            <div className="review_card">
                <div className="card_top">
                    <div className="profile">

                        <div className="profile_image">
                            <img src="https://media.gettyimages.com/id/1796422349/photo/mumbai-india-virat-kohli-of-india-celebrates-after-scoring-a-century-overtaking-sachin.jpg?s=612x612&w=0&k=20&c=3ZpuDKXRl2hKDfzkIByW8c46OD5g8Umn76t3pZ9QWVU=" alt='none'/>
                        </div>

                        <div className="name">
                            <strong>Virat Kholi</strong>

                            <div className="like">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="comment">
                    <p>
                    I love wearing shoes that look as good as they perform, and these ones 
                    hit the mark. Sleek, modern, and stylish—these shoes complement my cricket
                     kit and are a great match for my personal style, on and off the field
                    </p>
                </div>
            </div>   

            <div className="review_card">
                <div className="card_top">
                    <div className="profile">

                        <div className="profile_image">
                            <img src="https://media.gettyimages.com/id/465737938/photo/hamilton-new-zealand-shikhar-dhawan-of-india-celebrates-after-scoring-a-century-during-the.jpg?s=612x612&w=0&k=20&c=Lz7T6PIDca1NCi2Xu18RiSHJ1UtMiV-JOsazgmiMigo="  alt='none' />
                        </div>

                        <div className="name">
                            <strong>Shikhar Dhawan</strong>

                            <div className="like">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="comment">
                    <p>
                    if you're looking for shoes that offer great performance, comfort, and style, 
                    I highly recommend these. Whether you're a professional cricketer or just someone 
                    who enjoys  these shoes will definitely help you perform at your best.
                    </p>
                </div>
            </div>   

        </div>
    </div>
    </div>
  )
}

export default Review
