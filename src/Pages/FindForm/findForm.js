import React, { Component } from 'react';
import './findForm.css';
import formularz from '../../img/LastForm/2.png';
import zguba from '../../img/FindForm/4.PNG';
import {storage, db } from '../../firebase';

const red = {
  color: 'red',
}
const form= {
  margin: '0 auto'
}
const secondFormLine ={
  display:'block',
  margin: 'auto',
  padding:'5rem',
}
const label = {
padding:'1rem',
fontFamily: 'monospace',
verticalAlign: 'middle'
}
const descriptionInput ={
  height:'10rem',
  padding:'2rem',
  background:'transparent',
  margin: '.5rem auto',
  verticalAlign: 'middle'

}
const lostStyle = {
  margin: '0 auto'
}
const formStyle = {
  margin: '40px auto',
  width: '20%',
}
const inputStyle = {
  borderRadius: '1px',
  height: '40px',
  margin: '0 auto',
  width:'200px',
  boxShadow: '0 0 0 1px #000',
  border: '5px solid transparent'
}
const uploader = {
  webkitAppearance: 'none',
  apperance: 'none',
  width: '30%',
  marginBottom: '10px',
  color: 'white'
}
const formWrapper = {
  margin: '0 auto',
  background: '#F9F9F9'
}
const pictureWrapper = {
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',

}
const previewStyle = {
  maxHeight: "400px",
  maxWidth: "300px"
}
const imgStyle = {
  maxHeight: "400px",
  maxWidth: "400px"
}


class findForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[],
      progress: 0,
      image: null,
      url: '',
      itemName: '',
      email: '',
      phoneNumber: '',
      location: '',
      category: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);

  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleFileInputChange  = (e)=> {
    if(e.target.files[0]) {
      const image = e.target.files[0] ;
      this.setState(() => ({image}));

      e.preventDefault();

  const uploadTask = storage.ref(`findImages/${image.name}`).put(image);
  uploadTask.on('state_changed', (snapshot)=>{
     //progress
     const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
     this.setState({progress});
  }, (error) =>{
    //error
    console.log(error)
  },
   (complete) => {
     //complete
     storage.ref('findImages').child(image.name).getDownloadURL().then(url => {
      console.log(url);
      this.setState({url});
     })
   });



  }
}
  handleSubmit(event) {
    alert('Ogłoszenie zostało dodane!');
    event.preventDefault();
    console.log(this.state)
    const findItemDetails = {
      itemName : this.state.itemName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      location: this.state.location,
      category: this.state.category,
      description: this.state.description,
      url: this.state.url
    }
    db.ref('/foundItem').push(findItemDetails, function(error){
      console.log(error)
      console.log('new item added');
  });
  }
  render() {
 
    return (

      <div className="form" style={form}>
        <img className="zguba" src={zguba} style={lostStyle} />
        <img className="formularz" src={formularz} style={formStyle} />
        <form onSubmit={this.handleSubmit} style={formWrapper}>
          <label style={label}>
          Co znalazłeś?
          </label>
                  <input required type="text" name="itemName" value={this.state.itemName} onChange={this.handleChange} className="name" style={inputStyle} />
         
          <label style={label}>
            Twój email:  
            </label>
        <input required type="email" name="email" value={this.state.email} onChange={this.handleChange} style={inputStyle} />
      
          <label style={label}>
            Numer kontaktowy:
            </label>
            <input required type="tel" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" value={this.state.phoneNumber} onChange={this.handleChange} style={inputStyle} /><br />
        
          <div style={secondFormLine}>
          <label style={label}>
            Gdzie znalazłeś:</label>
            <select required name="location" value={this.state.location} onChange={this.handleChange} style={inputStyle}>
              <option value="">Dzielnica</option>
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
         
          <label style={label}>
            Rodzaj przedmiotu:</label>
            <select required name="category" value={this.state.category} onChange={this.handleChange} style={inputStyle}>
              <option value="">Kategoria</option>
              <option>Telefon</option>
              <option>Bizuteria</option>
              <option>Portfel</option>
              <option>Dokumenty</option>
              <option>Klucze</option>
              <option>Zwierze</option>
              <option>Inne</option>
            </select>
            <br /> <br />
          <label style={label}>
            Krótki opis znalezionej zguby:
            </label>
            <textarea required type="text" name="description" value={this.state.description} onChange={this.handleChange} rows="5" cols="50" style={descriptionInput} />
            </div>  
          <div style={pictureWrapper}>
          <img src={this.state.url || 'https://via.placeholder.com/400x300'} alt="Uploaded images" style={previewStyle}/><br />
          <input required type="file" onChange={this.handleFileInputChange}/><br /><br />

          <progress value={this.state.progress} max="100" style={uploader}></progress><br />
          {(this.state.progress < 100)&&(this.state.progress  >0)&&<p style={red}>{`Proszę czekać... ${this.state.progress}%`}</p>}
          <input type="submit" value="Dodaj zgłoszenie" style={label} />
        </div>
          
        </form>
      </div>

    );

  }

}

export default findForm;