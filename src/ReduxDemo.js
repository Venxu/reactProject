import React from 'react'
import store from './store'
import connect from 'react-redux'
 class ReduxDemo extends React.Component{
    //  constructor(props){
    //      super(props)
    //    this.state=store.getState()

    //  }
     render(){
         return(
             <div>
                 <div>
                 <input value={this.state.inputValue}></input>
                 <button>提交</button>
                 </div>
               
                 <ul>
                     <li>xuwen</li>
                 </ul>
             </div>
         )
     }
 }

  export default ReduxDemo
// connect链接store和组件

// 链接方式
// export default connect(null,null)(ReduxDemo)