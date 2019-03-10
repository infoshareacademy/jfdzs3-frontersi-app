import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBarBox">
      
      <nav className="searchBar navbar navbar-light mx-auto">
      <form className="form-inline">
      <div>
        <input className="searchBarInput form-control" type="search" placeholder="Szukaj zguby" aria-label="Search"/>
        <button className="searchBtn btn btn-outline-success" type="submit"> <i class="fas fa-search" aria-hidden="true"></i></button>
        <p className="SearchBarFilterText">Filtruj wyszukanie: </p>
        </div>
        <div className="selectWrapper">
        <select className="form-control">
        <option selected>Kategoria</option>
        <option>Telefon</option>
        <option>Bizuteria</option>
        <option>Portfel</option>
        <option>Dokumenty</option>
        <option>Klucze</option>
        <option>Zwierzę</option>
      </select>
      <select className="form-control">
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
        <option> Żelechowa</option>

      </select>
      </div>
      </form>
    </nav>
        
      </div>
    );
  }
}

export default SearchBar;
