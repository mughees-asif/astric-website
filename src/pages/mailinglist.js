import React from 'react'
import Layout from '../components/layout'


class ContactForm extends React.Component {

  render() {
    const formStyle = {
      textAlign: 'left'
    }
    const background ={
      backgroundColor: '#ba68c8',
      margin: '2.5rem'
    }
    const text = {
      color: 'black'
    }
    const buttonsStyle = {
      margin: '2rem',
      textAlign: 'center',
      textColor: 'white',
      color: 'white'
    }

    return (
      <div style={background}>
      <Layout>
      <h1 className="major" style={text}>astric* | Mailing List</h1>
      <h2 className="" style={text}>For all your local needs</h2>
        <h3  style={text}>Please fill in the following form to register your interest.</h3>
          <form  form name="mailinglist" method="POST" data-netlify="true">
            <div className="field half first">
              <label>Full name</label>
              <input type="text" name="name" />
            </div>
            <div className="field half">
              <label>Email</label>
              <input type="text" name="email" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea name="message" rows="4"></textarea>
            </div>
            <ul className="actions" style={buttonsStyle}>
              <li>
                <input type="submit" value="Send Message" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/astricapp"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/astricapp" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/astricapp" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
      </Layout>
      </div>
    );
  }
}

export default ContactForm