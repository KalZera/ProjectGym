import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style= {
    marginTop:10,
};

const Body = () => (
  <div>
    <RaisedButton label="Teste full larg" fullWidth={true} style={style}/>
  </div>
);

export default Body;
