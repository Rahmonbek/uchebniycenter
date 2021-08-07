import React, { useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {getTraining,deleteTeacher,createTeacher,editTeacher} from '../host/Config'
import { idT } from '../host/Host';
import {form} from 'antd'
import { BsNewspaper } from 'react-icons/bs';

 export function Editable() {
    const [teachers,setTeachers]=useState([])
    const getTrainingS=()=>{
      getTraining().then(res=>{
        setTeachers(res.data.teachers)
        console.log(teachers)
      }).catch(err=>{console.log(err)})
    }
    useEffect(()=>{
        getTrainingS()
      }, [])
    const [columns, setColumns] = useState([
      { title: 'F.I.O', field: 'full_name' },
      { title: 'Telefon raqam', field: 'phone_number' },
      { title: 'Rasm', field: 'photo'},
      { title: "Ma'lumot", field: 'text',},
    ]);
    // const onFill = (key) => {
    //     setEdit(teachers[key].id)
    //     setTimeout(function(){
    //       form.setFieldsValue({
    //         full_name:teachers[key].full_name,
    //       phone_number:teachers[key].phone_number,
    //       photo:'',
    //       text:teachers[key].text
    //       })
    //     },0);
    //     showModal()
    // };
    // const customRequest = (e) => {
    //     let imageT = e.target.files[0];        
    //     setImage(imageT)      
    //     console.log(imageT)      
    //   };
    const onFinish=(value)=>{         
      console.log(value,value.id) 
      setEdit(value.id) 
      let formData = new FormData();
      
      formData.append(
        "full_name",
         value.full_name ?? ""
      );
      formData.append(
        "phone_number",
      value.phone_number ?? ""
      ); 
      formData.append(
        "photo",
       null
      );        
      formData.append(
        "text",
        value.text ?? "",
      );
      formData.append(
        "training_center",
      idT   
      );  
    //   if (edit === null) {
    //     createTeacher(formData).then(res => { getTrainingS() }).catch(err => { console.log("err") })
    //   }
    //   else {
    //     editTeacher(formData, edit).then(res => { getTrainingS() }).catch(err => { console.log(err); console.log(edit); })
    //   }
      editTeacher(formData, edit).then(res => { getTrainingS() }).catch(err => { console.log(err)})
        // createTeacher(formData).then(res=>
        //   {
        //     var config={
        //       full_name:value.full_name ?? "",
        //       phone_number:value.phone_number ?? "",
        //       photo:image ?? null,
        //       text:value.text ?? "",
        //     }
        //     editTeacher(config, res.data.id).then(res1=>{
        //       console.log(config)
        //       getTrainingS()    
        //       }).catch(err1=>{console.log(err1,config)})
        //   }         
        // ).catch(err=>{console.log(err)})
      }
      const deleteTeachers=(id)=>{

        deleteTeacher(id).then(res=>{getTrainingS()}).catch(err=>{console.log(err)})
      }
      const [edit,setEdit]=useState(null)
    return (
      <MaterialTable
        title="Editable Preview"
        columns={columns}
        data={teachers}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
                let formData = new FormData();
      
                formData.append(
                    "full_name",
                    newData.full_name ?? ""
                );
                formData.append(
                    "phone_number",
                newData.phone_number ?? ""
                ); 
                formData.append(
                    "photo",
                     null
                );        
                formData.append(
                    "text",
                    newData.text ?? "",
                );
                formData.append(
                    "training_center",
                idT   
                );  
                createTeacher(formData).then(res => { getTrainingS() }).catch(err => { console.log(err) })
                resolve()
            }),
          onRowUpdate: (newData)=>{onFinish(newData)},
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...teachers];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setTeachers([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
  