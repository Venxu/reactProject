import React from 'react'
import store from './store'
// 引入对象中某一个
import {connect} from 'react-redux'
 class ReduxDemo extends React.Component{
     constructor(props){
         super(props)
    //    this.state=store.getState()
     

     }
    
     render(){
        //  const {inputValue,handleInputChange}=this.props
         return(
             <div>
                 <div>
                     {/* store的值以及改变store的方法都在props中 */}
                 <input value={this.props.inputValue} onChange={this.props.handleInputChange.bind(this)}></input>
         <button onClick={this.props.handleAddItem.bind(this)}>提交</button>
                 </div>
               
                 <ul>
                     {
                         this.props.list.map((item,index)=>{
                         return <li key={index} onClick={this.props.handleDeleteItem.bind(this,index)}>{item}</li>
                         })
                     }
                 </ul>
             </div>
         )
     }
 }

//   export default ReduxDemo
// connect链接store和组件

// 链接方式将store里的值映射到组件的props
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }

}
// 组件值改变触发store值改变:(要想改变store的值就必须调用store.dispatch)，所以这里将store.dispatch映射到props上
// 用户对ui组件的操作映射到action上

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputChange(e){
            // 通过action行为更新store值
            const action={
                type:'change_input',
                inputValue:e.target.value
            }
            // dispatch把action传给store，store再把action传给reducer
            dispatch(action)
            // console.log(e.target.value)
        },
        handleAddItem(){
            // console.log("ss")
            const action={
                type:'change_add_item'
            }
            dispatch(action)
        },
        handleDeleteItem(index){
           const action={
            type:'delete_item',
            index:index
           }
           dispatch(action)
        }
    }
}
// mapStateToProps：将state映射到ui组件中
// mapDispatchToProps：对ui的操作映射到action上
export default connect(mapStateToProps,mapDispatchToProps)(ReduxDemo)