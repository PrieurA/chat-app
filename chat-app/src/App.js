import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        contactFirstName="Alexandre"
        contactLastName="x"
        avatar="https://avatars1.githubusercontent.com/u/47487590?s=460&u=6425b74b23778dcf23383383f1b38840de263285&v=4"
      />
      <Contact
        contactFirstName="Benjamin"
        contactLastName="x"
        avatar="https://avatars0.githubusercontent.com/u/4921255?s=460&u=f16e306f9d08b719075f0e33f0693f5982527843&v=4"
        isConnect
      />
      <Contact
        contactFirstName="Noemie"
        contactLastName="x"
        avatar="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-1/p200x200/79404722_10156814782218848_2694815704468684800_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=b3JWstHrqicAX8BiQzI&_nc_ht=scontent-cdt1-1.xx&_nc_tp=6&oh=3be94c067145c4f924ee4f3b8e1aa299&oe=5EF27C6D"
        isConnect
      />
    </div>
  );
}

export default App;
