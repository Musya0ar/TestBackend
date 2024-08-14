import Thumbnail from '../assets/bg/hero.png'
import '../style/landingPage.css'

const Cards = () => {
    return (
        <div className="containers">
           <div className="cardContainers">
            <article className="cardArticles">
                <img className="cardImg" src={Thumbnail} alt="cardImg"></img>
                <div className="cardData">
                    <span className="cardDesc">This is description</span>
                    <h2 className="cardTitle">Name</h2>
                    <a href="#" className="cardLink">Link</a>
                </div>
                </article>
            </div> 
        </div>

    )
}

export default Cards