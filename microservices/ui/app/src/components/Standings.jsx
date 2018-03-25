import React from 'react';

class Standings extends React.Component { 
    constructor(props){ 
        super(props); 
        this.players =  [ 
            { id: 1, 
                user_name: "joeyD",
                display_name: "joey"
            }, 
            { id: 2, 
                user_name: "christineS",
                display_name: "christine"
            }, 
            { id: 3, 
                user_name: "annaO",
                display_name: "anna"
            }, 
            { id: 4, 
                user_name: "edanL",
                display_name: "edan"
            }, 
            { id: 5, 
                user_name: "truongN",
                display_name: "truong"
            }
        ];
}


    render() { 
        return( 
            <div>
                {this.players.map((el) => <li key={el}>{el.display_name}</li>)}
            </div>
        );
    }
}

export default Standings; 