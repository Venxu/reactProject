import React, { Component, Fragment } from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inpValue: '',
            list: []
        }
    }
    handleInp(e) {
        this.setState({
            inpValue: e.target.value
        })
    }
    handleBtn() {
        this.setState({
            list: [...this.state.list, this.state.inpValue],
            inpValue: ''
        })
    }
    hanldeBtnDelete(index){
        // 关于为什么不使用this.state.list.splice(index,1)直接使用？因为这样会直接修改state里面的值。imuttable 影响性能
        // 如果遇到要操作state的值通常将state里面拷贝一个副本
       
        const list=[...this.state.list]
        list.splice(index,1)
        this.setState({
            list:list
        })

    }
    render() {
        return (
            <Fragment>
                {/* 这是注释 */
                // 单行注释
                }
                <div>
                    <input type="text" name="" id="" value={this.state.inpValue} onChange={this.handleInp.bind(this)} />
                    <button onClick={this.handleBtn.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index} onClick={this.hanldeBtnDelete.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
                    })}

                </ul>
            </Fragment>

        )
    }
}
export default TodoList