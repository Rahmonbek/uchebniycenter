import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Form ,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import styles from '../css/login.module.css'

function Login() {
    let history=useHistory()
   function saveData(){
        
        var username = document.getElementById('formUsername').value
        var password= document.getElementById('formPassword').value
        if(username==='admin' && password==='admin'){
            history.push('/cabinet')
        }else{
            alert("Username yoki parol noto'g'ri!!!")
        }

    }
    return (
        <div className={styles.bd}>
             <div className={styles.bgLogin}>
             
                     <div className={styles.formLogin}>
                     <div className={styles.Logo}></div>
                         <h1>Admin</h1>
                     <div style={{textAlign:'left'}}>
                     <Form>
<Form.Group className="mb-3" controlId="formUsername">
<Form.Label className={styles.labelForm}>Username</Form.Label>
<Form.Control type="text" placeholder="Enter username" className={styles.inputForm} />
</Form.Group>

<Form.Group className="mb-3" controlId="formPassword">
<Form.Label className={styles.labelForm}>Parol</Form.Label>
<Form.Control type="password" placeholder="Password" className={styles.inputForm}/>
</Form.Group>
<Button  variant="primary" type="submit" onClick={saveData} style={{backgroundColor:'#1A86D0'}} className={styles.btnInput} >
Kirish
</Button>

<Link to="/lcenter"><p style={{textAlign:'center', marginTop:'30px', fontSize:'18px', fontWeight:'500'}}>Ro'yxatdan o'tish</p></Link>
</Form>
                     </div>
                     </div>
             </div>
        </div>
    );
}


export default Login;
