// // // // // import React, { Component } from 'react';

// // // // // class App extends Component {
// // // // //   constructor(props) {
// // // // //     super(props);
// // // // //     console.log("constructor")
  
// // // // //     this.state = { value:1 ,
// // // // //                  showChild:true }
// // // // //   }
// // // // //   static getDerivedStateFromProps(props,state){
// // // // //     console.log("getDerivedStateFromProps") 
// // // // //     return null
// // // // // }

// // // // //     componentDidMount(){
// // // // //       console.log("componentDidMount")
// // // // //     }


// // // // //     shouldComponentUpdate(nextProps,nextState){
// // // // //       console.log(nextProps,nextState)
// // // // //       if(nextState.value>5){
// // // // //         return false;
// // // // //       }
// // // // //       else{
// // // // //         return true;
// // // // //       }
// // // // //     }
// // // // //     getSnapshotBeforeUpdate(props,state){
// // // // //       console.log(props,state,"getSnapshotBeforeUpdate")
// // // // //     }
// // // // //     componentDidUpdate(prevProps,prevState){
// // // // //       console.log(prevState,prevProps,"componentDidUpdate")
// // // // //     }
// // // // //   render() { 
// // // // //     console.log("im inside render")
// // // // //     return ( <div>
// // // // //       <h1>My name is Vikas</h1>
// // // // //       <button onClick={()=>this.setState({value:this.state.value+1})}>Increment</button>
// // // // //       {this.state.value}
// // // // //       <button onClick={()=>this.setState({showChild:!this.state.showChild})}>Show/Hide</button>
// // // // //       {this.state.showChild?<Child/>:""}    
// // // // //     </div> );
// // // // //   }
// // // // // }
// // // // //  class Child extends Component {
// // // // //    constructor(props) {
// // // // //      super(props);
// // // // //      this.state = {  }
// // // // //    }
// // // // //    componentWillUnmount(){
// // // // //      console.log("componentWillUnmount")
// // // // //    }
// // // // //    render() { 
// // // // //      return ( 
// // // // //        <div>
// // // // //          <h2>Child Component</h2>
// // // // //        </div>
// // // // //       );
// // // // //    }
// // // // //  }
  

// // // // // export default App;

// // import Axios from 'axios';
// // import React from 'react';
// // import { Route,BrowserRouter,Switch,Link } from 'react-router-dom';

// // const App = () => {

// //     const [count,setCount]=React.useState(0)
// //     //React.useEffect(()=>console.log(count))
// //     React.useEffect(()=>[count])
// //     React.useEffect(()=>{return ()=>console.log("clean")},[] )
// //     return (<>
// //        {/* <button onClick={()=>setCount(count+1)}>Increment</button> 
// //        <button onClick={()=>setCount(count-1)}>Decrement</button>
// //        {count}   */}
// //        <BrowserRouter>
    

// //        <Switch>
// //            <Route exact path="/" component={Home}/>
// //            <Route path="/about" component={About}/>
// //            <Route path="/help" component={Help}/>
// //        </Switch>
// //        </BrowserRouter>

// //     </> );
// // }
 
// // export default App ;


// // const About = () => {
// //     return ( 
// //         <h1>About component</h1>
// //      );
// // }
// //   const Home = () => {
// //       React.useEffect(()=>{
// //         fetch('https://jsonplaceholder.typicode.com/todos/1')
// //         .then(response => response.json())
// //         .then(json => console.log(json))
// //         Axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response=>console.log("Axios",response))
// //       },[])
// //       return ( <>
          
// //           <navbar className="nav">
              
// //             <Link to="/">Home</Link>           
// //             <Link to="/about">About</Link>
// //             <Link to="/help">Help</Link>
// //         </navbar>
// //         <h1>Home Component </h1>
// //         </>
// //        );
// //   }
   
// //   const Help = () => {
// //       return ( 
// //           <>
// //           <h1>Help component</h1>
// //           <Home_1 name="Vikas" />
// //           </>
// //         );
// //   }
   
  
// // const Home_1 = (props) => {
// //     return ( 
// //         <Home_2 name={props.name} />
// //      );
// // }
 
// // const Home_2 = (props) => {
// //     return ( 
// //         <Home_3  name={props.name}/>
        
// //      );
// // }
 
// // const Home_3 = (props) => {
// //     return ( 
// //         <h1>{props.name}</h1>
// //      );
// // }
 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IncrementAction, DecrementActionwithDelay } from './actions/action';


export class App extends Component {
    render() {
        return (
            <div>
                    <label>Total Value : {this.props.count} </label>
                    <button onClick={this.props.incrementAction}>Increment</button>
                    <button onClick={this.props.decrementAction}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count : state.CountRe.count
})

const mapDispatchToProps = (dispatch) => ({
    incrementAction : () => dispatch(IncrementAction()),
    decrementAction : () => dispatch(DecrementActionwithDelay())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)





