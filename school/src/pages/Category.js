import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from '../css/courses.module.css'
import { getGroups } from '../host/Config';
import { getCategory } from '../host/Config';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function Category() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [categorya, setCategorya] = React.useState([]);
  const [categoryas, setCategoryas] = React.useState([]);

  const [guruh, setGuruh] = React.useState([]);
 

  const getGroupS = () => {
    getGroups()
      .then((res) => {
        setGuruh(res.data);
        
          getCategoryG(res.data)
          
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategoryS = () => {
    getCategory()
      .then((res) => {
        setCategoryas(res.data);
        getCategoryas(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  const getCategoryas = (cat) => {
    var categoriyas = []
    console.log(cat)
      // setCategoryas(cat)
      for(let i=0;i<cat.length;i++){
        categoriyas.push(cat[i])
      }
    console.log(categoriyas)
    setCategoryas(categoriyas)
    console.log(categoryas)
    
  }

  const getCategoryG = (guruh) =>{
    
    var category = []
    console.log(guruh)
     for(let i=0;i<guruh.length; i++){
      
      for(let a=0; a<guruh[i].category.length; a++){
      var t=true
      for(let j=0; j<category.length; j++){
        if(category[j]===guruh[i].category[a]){
          t=false
        }}
        if(t){
          category.push(guruh[i].category[a])
        }
      }
     }
setCategorya(category)
console.log(category)

  }
  



    

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
   getGroupS();
   getCategoryS();

  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {categorya && Array.isArray(categorya)?categorya.map((item,key)=>{
               return(
           categoryas && Array.isArray(categoryas)?categoryas.map((item2)=>{
             return(
               (item==item2.id)?<Tab label={item2.name_uz}   icon={<PhoneIcon />} {...a11yProps(0)} />:""
             )
           }):''
               )
          }):''} 
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Seven
      </TabPanel>
    </div>
  );
}