import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styles from '../css/davomat.module.css'
import { getGroups } from '../host/Config';
import { getTraining } from '../host/Config';
import BootstrapTable from 'react-bootstrap-table-next';
import { Card, Button,Fab ,IconButton,Divider} from 'ui-neumorphism'
export default function Davomat() {
    const [groups,setGroups]=useState([])
    const getGroupS=()=>{
        getGroups().then(res=>{
          console.log(res.data)
          setGroups(res.data)
          
        }).catch(err=>{console.log(err)})
      }
      useEffect(()=>{
       getGroupS()
      },[])
      toggleInStock = () => {
        let newProducts = [...this.state.products];
        newProducts = newProducts.map((d) => {
          if (d.id === 13) {
            return {
              ...d,
              inStock: !d.inStock
            };
          }
          return d;
        });
        this.setState(curr => ({ ...curr, products: newProducts }));
      };
        const columns = [
          {
            dataField: 'id',
            text: 'Product ID',
            formatter: (cell, row, rowIndex, extraData) => (
              <div>
                <span>ID: {row.id}</span>
                <br />
                <span>state: {extraData}</span>
              </div>
            ),
            formatExtraData: this.state.count
          },
          {
            dataField: 'name',
            text: 'Product Name'
          },
          {
            dataField: 'price',
            text: 'Product Price'
          },
          {
            dataField: 'inStock',
            text: 'In Stock',
            formatter: (cellContent, row) => (
              <div className="checkbox disabled">
                <label>
                  <input type="checkbox" checked={ row.inStock } disabled />
                </label>
              </div>
            )
          },
          {
            dataField: 'df1',
            isDummyField: true,
            text: 'Action 1',
            formatter: (cellContent, row) => {
              if (row.inStock) {
                return (
                  <h5>
                    <span className="label label-success"> Available</span>
                  </h5>
                );
              }
              return (
                <h5>
                  <span className="label label-danger"> Backordered</span>
                </h5>
              );
            }
          },
          {
            dataField: 'df2',
            isDummyField: true,
            text: 'Action 2',
            formatter: (cellContent, row) => {
              if (row.inStock) {
                return (
                  <h5>
                    <span className="label label-success"> Available</span>
                  </h5>
                );
              }
              return (
                <h5>
                  <span className="label label-danger"> Backordered</span>
                </h5>
              );
            }
          }
        ];
    
    return (
        
        <div>
            <Container fluid style={{padding:'5%'}}> 
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Row>
                            {
                              groups && Array.isArray(groups)?groups.map(item=>{
                                  return(
                                      <Col lg={3} style={{marginLeft:'20px'}}>
                                         <Button> {item.name}</Button>
                                      </Col>
                                  )
                              }):''
                            }   
                        </Row>
                    </Col>
                    
                    <Col lg={12} >
                    <BootstrapTable
                        keyField="id"
                        data={ this.state.products }
                        columns={ columns }
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
