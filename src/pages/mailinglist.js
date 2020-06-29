import React from 'react'
import Layout from '../components/layout'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));



export default function MailingList() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Yes');
  function handleClick(event) {
    if (event.target.value === value) {
      setValue("");
    } else {
      setValue(event.target.value);
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const background = {
    backgroundColor: '#ba68c8',
  }
  const innerBackground = {
    marginLeft: '3.5rem',
    marginRight: '3.5rem'
  }
  const text = {
    color: 'black',
  }
  const buttonsStyle = {
    margin: '2rem',
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
              <FormControl component="fieldset" className={classes.formControl} >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="customer or business"
                >
                  <MenuItem value={10}>Customer</MenuItem>
                  <input type="text" name="business or customer" />
                  <MenuItem value={20}>Business</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="field" style={{ textAlign: 'center' }}>
              <label>Type of business</label>
              <input type="text" name="type of business" />
            </div>
            <div className="field" style={{ textAlign: 'center' }}>
              <FormControl component="fieldset" name="mailing list" className={classes.formControl}>
                <label>Join mailing list</label>
                <RadioGroup aria-label="newsletter" name="newsletter" value={value} onChange={handleChange}>
                  <FormControlLabel value="Yes" name="yes" control={<Radio onClick={handleClick} />} label="Yes" />
                  <FormControlLabel value="No" name="no" control={<Radio onClick={handleClick} />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <ul className="actions" style={buttonsStyle}>
                <li>
                  <input type="submit" value="Submit" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </div>
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
