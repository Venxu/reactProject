

const  defaultState={
    inputValue:'',
   list:[]
}

export default (state=defaultState,action)=>{
    console.log(action)
    if(action.type==='change_input'){
        // 深拷贝;JSON.parse(JSON.stringify())
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.inputValue
        return newState

    }
    // 追加list
    if(action.type==='change_add_item'){
        const newState=JSON.parse(JSON.stringify(state))
       console.log(action)
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
       
    }

    if(action.type==='delete_item'){
        const newState=JSON.parse(JSON.stringify(state))
       console.log(action)
       const index=action.index
       newState.list.splice(index,1)
        return newState
    }
   
    return state
    
}