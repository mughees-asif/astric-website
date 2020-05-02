import PropTypes from 'prop-types'
import React from 'react'
import mainVideo from "../media/intro.mp4"
import downloads from '../media/downloads.png'
import Gallery from 'react-grid-gallery'
import mughees from '../media/website/team/mughees.jpg'
import anthony from '../media/website/team/anthony.jpg'
import hatem from '../media//website/team/hatem.jpg'
import zak from '../media/website/team/zak.jpg'

const images =[
    { source: {hatem}, 
  }, 
    { source: {zak} 
  }, 
    { source: {anthony} 
  }, 
    { source: {mughees} 
  }
];

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        {/* --------- ABOUT --------- */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ABOUT</h2>
          <video height="auto" 
          width="100%" 
          controls autoplay
          preload="auto">
            <source src={mainVideo} type="video/mp4" />
          </video>
          <p>
          astric* was founded during the COVID-19 crisis to provide a platform for local
          businesses to advertise different products. The mobile app. uses location tracking
          to show the most convenient local store in the vicinity with reviews, special offers
          and contact details.
          </p>
          <span className="image main">
            <img src={downloads} alt="" height="300"/>
          </span>
          {close}
        </article>
         
         {/* --------- TEAM --------- */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">TEAM</h2>

          <div class="image row">
            <div class="column">
              <span className="image team"> 
                <img class="image team-members" src={hatem}/>
                
              </span>
              <h1>HATEM</h1><h2>Co-Founder</h2>
              <span className="image team">
                <img class="image team-members" src={zak}/>
                
              </span><h1>ZAK</h1><h2>Co-Founder</h2>
            </div>
            <div class="column">
              <span className="image team">
                <img class="image team-members" src={anthony}/>
                
              </span><h1>ANTHONY</h1><h2>Developer</h2>

              <span className="image team">
                <img class="image team-members" src={mughees}/>
                
              </span><h1>MUGHEES</h1><h2>Developer</h2>
            </div>
          </div>

          {close}
        </article>

        {/* --------- DEMO --------- */}
        <article
          id="demo"
          className={`${this.props.article === 'demo' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', textAlign: 'center' }}
        >
          <h2 className="major">DEMO</h2>
          <img src="https://media.giphy.com/media/mCUYwCRYOQBHiMyPtt/giphy.gif" />
          {close}
        </article>

        {/* --------- CONTACT --------- */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CONTACT US</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/astric"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/astric" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/astricapp" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mughees-asif/astric-website"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
