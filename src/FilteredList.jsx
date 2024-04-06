import React, {Component}from 'react'; import List 
from'./List';
import { DropdownButton } from 'react-bootstrap';

class FilteredList extends Component {

    constructor(props) {

        super(props);
            //The state is just a list of key/value pair like a hashmap
            this.state = {
                search:""
            };
        }
            onSearch =(event)=>{
        this.setState({search: event.target.value.trim().toLowerCase()});
        }
        filterItem = (item) => {
            return item.name.toLowerCase().search(this.state.search) !== -1;
        }
        /* Add an event handling  method for when an item in dropdrown is selected
        Per the DropdownButton documentation, this function should take in a eventKey and event
        */
       handleClick = (eventKey, event)=> {
            if (eventKey === 'fruits')
            
        }
       }
   
        render(){
            return(
                <div className="filter-list">
                    <h1>Produce Search</h1>
                    {/*Add more menu items with onSelect handlers*/}
                    <DropdownButton id="typeDropdown" title={"Type"} onSelect={handleItem}>
                        <MenuItem eventKey ="all" onSelect ={"this.handleCLick"}>All</MenuItem>
                        <MenuItem eventKey="fruits" onSelect ={"this.handleClick"}>Fruits</MenuItem>
                        <MenuItem eventKey="vegetables" onSelect ={"this.handleClick"}>Vegetabless</MenuItem>
                    </DropdownButton>
                    <input type="text" placeholder="Search" onChange={this.onSearch}/>
                    <List items={this.props.items.filter(this.filterItem)} />
                </div>
            );
        }
    }
    export default FilteredList;