import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const getLocalItems =()=>{

let list = localStorage.getItem('Lists')

if (list) {

return JSON.parse(localStorage.getItem('Lists'))

}
else{

return []

}

}


function TodoApp() {

const [inputData,setInputdata]=useState('')
const [items,setItems]=useState(getLocalItems())

const  AddItems = () =>{

if(!inputData){

alert("Please Add something")

}
else{
setItems([...items, inputData])
setInputdata('');
}
}


const deleteItem = (id) =>{

const updatedItems = items.filter((elem,ind)=>{

return ind != id;

})

setItems(updatedItems)

}

const removeAll = () => {

  setItems([])

}


useEffect (()=>{

localStorage.setItem("Lists",JSON.stringify(items))

},[items])

  return (
    <>
    
<div className="main flex flex-col justify-center items-center">

<h1 className='font-bold text-4xl py-8'>Todo App</h1>

<div className='p-6 '>

<input type="text" className='w-max m-4 p-3 bg-slate-200 rounded-md '
placeholder='Add new task'
value={inputData}
onChange={(e)=> setInputdata(e.target.value)}

/>




<button className='bg-green-500 rounded-md p-3 text-white font-bold hover:bg-green-700' onClick={AddItems}>Add task</button>

</div>


{

items.map((elem,index)=>{

return(


<div className='flex bg-slate-100 m-4 py-3 pl-12 pr-4' key={index}>

<li className='self-center pr-10 mr-6 grow rounded-md font-semibold list-none'>{elem}</li>
<button className='bg-red-500 rounded-md p-2 mx-1 text-white font-bold hover:bg-red-700'
onClick={() => deleteItem(index)}

>

<DeleteIcon />

</button>

<button className='bg-green-500 rounded-md p-2 mx-1 text-white font-bold hover:bg-green-700'>

<EditIcon/>

</button>

</div>
)

})

}
<div className='m-10 p-10'>
<button className='bg-blue-500 rounded-md p-2 mx-1 text-white font-bold hover:bg-blue-700' onClick={removeAll}>Remove All</button>
</div>

</div>

    </>
  )
}

export default TodoApp