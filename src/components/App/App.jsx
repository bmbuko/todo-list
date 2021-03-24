import React, { useState ,useEffect} from "react";
import { v4 as createId } from "uuid";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

import Home from "../../views/Home/Home";
import Add from "../../views/Add/Add";
import Edit from "../../views/Edit/Edit";

const EditWrapper = (props) => {
  const { list, ...remainingProps } = props;
  const { taskId } = useParams();
  const { name } = list.find((item) => item.id === taskId);
  return <Edit {...remainingProps} taskId={taskId} initialName={name} />
};


const App = () => {
  const [list, setList] = useState([]);
  const [loaded,setLoaded]=useState(false)

  useEffect(
    ()=>{
      const listAsString= window.localStorage.getItem('list')

        if(listAsString){
          setList(JSON.parse(listAsString))
        }
      setLoaded(true);
    },
    []
  )

  useEffect(
  ()=>{
  if(loaded){
  window.localStorage.setItem('list',
  JSON.stringify(list),
  )
  }
},
  [list,loaded],
    )
  const handleAddItem = (name) => {
    setList([
        { id: createId(), name, checked: false }, 
        ...list,
    ])
    window.location.replace('/')
  }

  const handleCheckToggle = (taskId) => {
    const newList = list.map((item) => {
      if (item.id !== taskId) return item;
      return {
        ...item,
        checked:!item.checked,
      };
    });
    setList(newList);
  };
  
  const handleDeleteItem = (taskId)=>{
    const newList = list.filter((item) => item.id !== taskId);
    setList(newList)
    window.location.replace('/')
  }

  const handleEditItem = (taskId, name) => {
    const newList = list.map((item) => {
      if (item.id !== taskId) return item;
      return {
        ...item,
        name,
      };
    });
    setList(newList);
  };

  return (
    <BrowserRouter>
      <Switch>
      <Route 
      path="/edit/:taskId">

        <EditWrapper list={list}  onSave={handleEditItem}/></Route>

        <Route path="/add/" ><Add onSave={handleAddItem} /></Route>

        <Route path="/" ><Home list={list} onCheckToggle={handleCheckToggle} onDeleteItem={handleDeleteItem}/></Route>
        
      </Switch>
    </BrowserRouter>
  );
};
export default App;
