import React, {Component} from 'react';
import TitleComponent from './components/TitleComponent';
import FormComponent from './components/FormComponent';
import WeatherComponent from './components/WeatherComponent';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            city: 'MELBOURNE',
            temp: '32'
        }
    }  

    //APIKEY = '6bd4a1714da3101b1a521996c30e6cae';

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.city);        
    }
    
    render(){
        return(
        <div>
            <TitleComponent></TitleComponent>
            <FormComponent handleSubmit={this.handleSubmit}></FormComponent>
            <WeatherComponent city={this.state.city} temp={this.state.temp}></WeatherComponent>
        </div>
        );
    }

}

export default App;