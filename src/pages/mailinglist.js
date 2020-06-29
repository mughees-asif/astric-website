import React from 'react'
import Layout from '../components/layout'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

export default function MailingList() {

  const [value, setValue] = React.useState('Yes');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const background = {
    backgroundColor: '#ba68c8',
  }
  const innerBackground = {
    marginLeft: '5rem',
    marginRight: '5rem'
  }
  const text = {
    color: 'black',
  }
  const buttonsStyle = {
    margin: '0.5rem',
    textAlign: 'center'
  }


  return (
    <div style={background}>
      <Layout>
        <div style={innerBackground}>
          <h1 className='major' style={text}>astric* | Mailing List</h1>
          <h2 style={text}>For all your local needs</h2>
          <h3 style={text}>Please fill in the following form to register your interest.</h3>

          <form name="mailinglist" method="POST" data-netlify="true">

            <input type="hidden" name="mailinglist" value="mailinglist" />
            <div className="field half first" style={{ textAlign: 'center' }}>
              <label>Full name</label>
              <input type="text" name="name" />
            </div>

            <div className="field half" style={{ textAlign: 'center' }}>
              <label>Email</label>
              <input type="text" name="email" />
            </div>

            <div className="field" style={{ textAlign: 'center' }}>
              <label>Customer or Business</label>
              <FormControl component="fieldset">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="customer or business"
                >
                  <MenuItem value={"customer"}>Customer</MenuItem>
                  <MenuItem value={"business"}>Business</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="field" style={{ textAlign: 'center' }}>
              <label>If selected business, please indicate type of business</label>
              <input type="text" name="type of business" />
            </div>

            <div style={{ textAlign: 'center' }}>
              <FormControl component="fieldset" name="Join mailing list" >
                <label>Join mailing list</label>
                <RadioGroup aria-label="newsletter" name="newsletter" value={value} onChange={handleChange}>
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
              <ul className="actions" style={buttonsStyle}>
                <li>
                  <input style={{ border: '1px solid black', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}} type="submit" value="Submit" />
                </li>
              </ul>
          </form>

          <div style={{ textAlign: 'center' }}>
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
          </div>
        </div>
      </Layout>
    </div>
  );
}