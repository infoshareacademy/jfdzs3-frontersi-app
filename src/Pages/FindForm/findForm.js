import React, { Component } from 'react';
import './findForm.css';
import formularz from '../../img/FindForm/2.png';
import zguba from '../../img/FindForm/4.PNG';
import { db } from '../../firebase';

const nameStyle = {
  marginRight: '20px',
  marginLeft: '200px',
}
const emailStyle = {
  marginRight: '20px',
  marginLeft: '100px'
}
const locationStyle = {
  marginLeft: '350px',
  marginTop: '50px'
}
const categoryStyle = {
  marginLeft: '350px'
}
const descriptionStyle = {
  marginLeft: '30%',
  marginTop: '50px'
}
const lostStyle = {
  width: '1200px',
  marginLeft: '200px'
}
const formStyle = {
  width: '1200px',
  marginLeft: '200px',
  marginBottom: '100px'
}
const inputStyle = {
  borderRadius: '10px',
  boxShadow: '0 0 0 3px #000',
  border: '5px solid transparent'
}



class FindForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: {},
      id: `${Date.now()}`,
      yourName: '',
      email: '',
      phoneNumber: '',
      location: '',
      category: '',
      description: ''
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    alert('Ogłoszenie zostało dodane!');
    event.preventDefault();
    console.log(this.state)

    const foundItemDetails = {
      id: this.state.id,
      yourName: this.state.yourName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      location: this.state.location,
      category: this.state.category,
      description: this.state.description
    }

    db.ref('/foundItem').push(foundItemDetails, function (error) {
      console.log(error)
      console.log('new item added');
    });
  }

  render() {
    return (

      <div className="form">
        <img className="zguba" src={zguba} style={lostStyle} />
        <img className="formularz" src={formularz} style={formStyle} />
        <form onSubmit={this.handleSubmit}>
          <label style={nameStyle}>
            Imie i nazwisko:
        <input type="text" name="yourName" value={this.state.yourName} onChange={this.handleChange} className="name" style={inputStyle} />
          </label>
          <label style={emailStyle}>
            email:
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} style={inputStyle} />
          </label>
          <label style={emailStyle}>
            Numer kontaktowy:<br />
            <input type="tel" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" value={this.state.phoneNumber} onChange={this.handleChange} style={inputStyle} />
          </label><br />
          <label style={locationStyle}>
            Miejsce znalezienia przedmiotu:<br />
            <select name="location" value={this.state.location} onChange={this.handleChange} style={inputStyle}>
              <option selected>Dzielnica</option>
              <option>Arkońskie-Niemierzyn</option>
              <option>Głębokie-Pilchowo</option>
              <option>Gumieńce</option>
              <option>Krzekowo-Bezrzecze</option>
              <option>Osów</option>
              <option>Pogodno</option>
              <option>Pomorzany</option>
              <option>Świerczewo</option>
              <option>Zawadzkiego-Klonowica</option>
              <option>Centrum</option>
              <option>Drzetowo-Grabowo</option>
              <option>Łękno</option>
              <option>Międzyodrze-Wyspa Pucka</option>
              <option>Niebuszewo-Bolinko</option>
              <option>Nowe Miasto</option>
              <option>Stare Miasto</option>
              <option>Śródmieście-Północ</option>
              <option>Śródmieście-Zachód</option>
              <option>Turzyn</option>
              <option>Bukowe-Klęskowo</option>
              <option>Dąbie</option>
              <option>Kijewo</option>
              <option>Majowe</option>
              <option>Płonia-Śmierdnica-Jezierzyce</option>
              <option>Podjuchy</option>
              <option>Słoneczne</option>
              <option>Wielgowo-Sławociesze-Zdunowo</option>
              <option>Załom-Kasztanowe</option>
              <option>Zdroje</option>
              <option>Żydowce-Klucz</option>
              <option>Bukowo</option>
              <option>Golęcino-Gocław</option>
              <option>Niebuszewo</option>
              <option>Skolwin</option>
              <option>Stołczyn</option>
              <option>Warszewo</option>
              <option>Żelechowa</option>
            </select>
          </label>
          <label style={categoryStyle}>
            Rodzaj przedmiotu:<br />
            <select name="category" value={this.state.category} onChange={this.handleChange} style={inputStyle}>
              <option selected>Kategoria</option>
              <option>Telefon</option>
              <option>Bizuteria</option>
              <option>Portfel</option>
              <option>Dokumenty</option>
              <option>Klucze</option>
              <option>Zwierzę</option>
              <option>Inne</option>
            </select>
          </label><br />
          <label style={descriptionStyle}>
            Krótki opis przedmiotu:<br />
            <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} rows="10" cols="60" style={inputStyle} />
          </label>
          <input type="submit" value="Dodaj zgłoszenie" style={nameStyle} />
        </form>
      </div>

    );

  }

}

export default FindForm;