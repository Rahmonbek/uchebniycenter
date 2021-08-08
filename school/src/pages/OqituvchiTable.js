import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import MaterialTable from 'material-table'
import { idT } from '../host/Host';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {getTraining} from '../host/Config'
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  }


export default function OqituvchiTable() {
    const [edit,setEdit]=useState(null)
    const [visible,setVisible]=useState(false)
    const [teachers,setTeachers]=useState([])
    const [iserror, setIserror] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
    const [image, setImage]=useState('')
    const getTrainingS=()=>{
        getTraining().then(res=>{
          console.log(res.data)
          setTeachers(res.data.teachers)
        }).catch(err=>{console.log(err)})
      }
      useEffect(()=>{
        getTrainingS()
      }, [])
      var columns = [
        {title: "F.I.O", field: "full_name"},
        {title: "Rasm", render: rowData => <img src={rowData.photo} style={{width:'200px'}}/>  },
        {title: "Telefon raqam", field: "phone_number"},
        {title: "Ma'lumot", field: "text"},
        ]
      const handleRowUpdate = (newData, oldData, resolve) => {
        
      }
      const handleRowDelete = (oldData, resolve) => {
        
      }
    return (
        <div  style={{padding:'5%'}}>
            <div class="fresh-table full-color-orange">

  <div class="toolbar">
    <button id="alertBtn" class="btn btn-default">Alert</button>
  </div>

  <table id="fresh-table" class="table">
    <thead>
      <th data-field="id">ID</th>
      <th data-field="name">Name</th>
      <th data-field="salary">Salary</th>
      <th data-field="country">Country</th>
      <th data-field="city">City</th>
      <th data-field="actions" data-formatter="operateFormatter" data-events="operateEvents">Actions</th>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dakota Rice</td>
        <td>$36,738</td>
        <td>Niger</td>
        <td>Oud-Turnhout</td>
        <td></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Minerva Hooper</td>
        <td>$23,789</td>
        <td>Curaçao</td>
        <td>Sinaai-Waas</td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Sage Rodriguez</td>
        <td>$56,142</td>
        <td>Netherlands</td>
        <td>Baileux</td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Philip Chaney</td>
        <td>$38,735</td>
        <td>Korea, South</td>
        <td>Overland Park</td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td>Doris Greene</td>
        <td>$63,542</td>
        <td>Malawi</td>
        <td>Feldkirchen in Kärnten</td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td>Mason Porter</td>
        <td>$78,615</td>
        <td>Chile</td>
        <td>Gloucester</td>
        <td></td>
      </tr>
      <tr>
        <td>7</td>
        <td>Alden Chen</td>
        <td>$63,929</td>
        <td>Finland</td>
        <td>Gary</td>
        <td></td>
      </tr>
      <tr>
        <td>8</td>
        <td>Colton Hodges</td>
        <td>$93,961</td>
        <td>Nicaragua</td>
        <td>Delft</td>
        <td></td>
      </tr>
      <tr>
        <td>9</td>
        <td>Illana Nelson</td>
        <td>$56,142</td>
        <td>Heard Island</td>
        <td>Montone</td>
        <td></td>
      </tr>
      <tr>
        <td>10</td>
        <td>Nicole Lane</td>
        <td>$93,148</td>
        <td>Cayman Islands</td>
        <td>Cottbus</td>
        <td></td>
      </tr>
      <tr>
        <td>11</td>
        <td>Chaim Saunders</td>
        <td>$5,502</td>
        <td>Romania</td>
        <td>New Quay</td>
        <td></td>
      </tr>
      <tr>
        <td>12</td>
        <td>Josiah Simon</td>
        <td>$50,265</td>
        <td>Christmas Island</td>
        <td>Sint-Jans-Molenbeek</td>
        <td></td>
      </tr>
      <tr>
        <td>13</td>
        <td>Ila Poole</td>
        <td>$67,413</td>
        <td>Montenegro</td>
        <td>Pontevedra</td>
        <td></td>
      </tr>
      <tr>
        <td>14</td>
        <td>Shana Mejia</td>
        <td>$58,566</td>
        <td>Afghanistan</td>
        <td>Ballarat</td>
        <td></td>
      </tr>
      <tr>
        <td>15</td>
        <td>Lana Ryan</td>
        <td>$64,151</td>
        <td>Martinique</td>
        <td>Portobuffolè</td>
        <td></td>
      </tr>
      <tr>
        <td>16</td>
        <td>Daquan Bender</td>
        <td>$91,906</td>
        <td>Sao Tome and Principe</td>
        <td>Walhain-Saint-Paul</td>
        <td></td>
      </tr>
      <tr>
        <td>17</td>
        <td>Connor Wagner</td>
        <td>$86,537</td>
        <td>Germany</td>
        <td>Solihull</td>
        <td></td>
      </tr>
      <tr>
        <td>18</td>
        <td>Boris Horton</td>
        <td>$35,094</td>
        <td>Laos</td>
        <td>Saint-Mard</td>
        <td></td>
      </tr>
      <tr>
        <td>19</td>
        <td>Winifred Ryan</td>
        <td>$64,436</td>
        <td>Ireland</td>
        <td>Ronciglione</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    )
}
