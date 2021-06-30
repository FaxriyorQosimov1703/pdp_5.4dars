import React, { Component } from 'react';
import Users from './Components/Users'

export default class App extends Component {

    state = {
        user: {
            fistname: 'faxriyor',
            lastname: 'qosimov',
            balance: 1000
        }
    }

    Addcount=()=> {
        let current = this.state.user;
        current.balance+=1000
        this.setState({
            user: current 
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="row bg-dark text-white p-4">
                    <div className="col-12 bg-info">
                         <Users user={this.state.user}/>
                    </div>
                </div>
               <button className="btn btn-danger" onClick={this.Addcount}>salomalekum</button>
            </div>
        )
    }
}
