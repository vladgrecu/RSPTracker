import React, {Component} from 'react';
import CardList from '../components/Cardlist.js';
import Navbar from '../components/Navbar.js';
import AddRSP from '../components/AddRSP';
import SearchBox from '../components/Searchbox.js';
import Scroll from '../components/Scroll.js';
import {rsp} from '../Rsp';

class App extends Component{
    constructor(){
        super()
        this.state = {
            rsp: rsp,
            searchfield: '',
            addrsp: false,
            details: false
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    addRsp = () =>{
        this.setState({addrsp: !this.state.addRsp})
    }
    render(){
        const filteredRsp = this.state.rsp.filter(item => {
            return (
                item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())||
                item.Retea.toLowerCase().includes(this.state.searchfield.toLowerCase())||
                item.Oras.toLowerCase().includes(this.state.searchfield.toLowerCase())||
                item.Magazin.toLowerCase().includes(this.state.searchfield.toLowerCase())
                )
        })
        return (
        <div className='tc'>
            <Navbar>
                <AddRSP onClick={this.addRsp}/>
                <SearchBox searchChange={this.onSearchChange}/>
            </Navbar>
            <p className='white f5 fw6'>Number of RSPs: {filteredRsp.length}</p>
            <Scroll>
                <CardList rsp={filteredRsp}/>
            </Scroll>
        </div>
        );
    }
}
export default App;