import React from 'react'

export default class AboutClassBased extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count1 : 1,
            count2 : 2
        };
        console.log(props)
    }

    render() {
        const {name} = this.props;
        const {count1, count2} = this.state;

        return (
            <div >
                <h1>Hello {name}!!!</h1>
                <h1>{count1} </h1> <button onClick={()=>{
                    this.setState({
                        count1 : this.state.count1 + 1
                    })
                }}>INCREMENT</button>
            </div>
        )
    }
    
    
}