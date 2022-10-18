import React from 'react';
import Banner from './Banner';
import Brand from './Brand';
import Serveces from './service';
import First from './First';
const Index = ({doc}) => {
  console.log('hgsdbdjsb')
  console.log(doc)
    return (
     <div>
      <First />
      <Serveces   doc={doc.number_component} />
      <Banner     doc={doc.Doctors.doctor}/>
      <Brand       brand={doc.Brand}  />
    </div>
  );
};


export default Index

