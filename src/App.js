
import './App.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import { Button } from '@mui/material';


function App() {
  
  return (
    <div className="App">
     
      <SmallBox/>
    </div>
  );
}

export default App;

function SmallBox(){
  const insides=[{
    pricetags: "free",
    howmuch: "$0/Month",
    user: "single",
    storage: "50GB storage",
    projects: "Unlimited public projects",
    access: "Community Access",
    anoaccess: "unlimited private projects",
    support: "dedicated phone supports",
    subdomain: "free subdomains",
    report: "Monthly status reports"
  },
  {
    pricetags: "plus",
    howmuch: "$9/Month",
    user: "five",
    storage: "50GB storage",
    projects: "Unlimited public projects",
    access: "Community Access",
    anoaccess: "unlimited private project",
    support: "dedicated phone support",
    subdomain: "free subdomain",
    report: "Monthly status reports"
  },
  {
    pricetags: "pro",
    howmuch: "$49/Month",
    user: "unlimited user",
    storage: "50GB storage",
    projects: "Unlimited public projects",
    access: "Community Access",
    anoaccess: "unlimited private project",
    support: "dedicated phone support",
    subdomain: "free subdomain",
    report: "Monthly status report"
  }
]
return(
 < div style={{
  height: "600px",
  width: "850px",
  alignItems: "center",
  backgroundColor: "royalblue",
  borderRadius: "5%",
  margin: "30px",
  padding: "50px",
  display:"flex",
  justifyContent:"space-between"
}}>
  <div style={{display:"flex", justifyContent:"space-evenly"}}>
{insides.map((inside)=>
( <Bigbox insides={inside}/>))}
  </div>
  </div>
)
}

function Bigbox({insides}){
  const styles={
    
    display:"flex",
    justifyContent:"space-around"
  }
  
  const checkBoxIcons = {
    
    
    "unlimited private project":  <CheckBoxIcon color="primary"/> ,
    "unlimited private projects": <IndeterminateCheckBoxRoundedIcon color="error" />, color:"lightgrey",
    "dedicated phone support":<CheckBoxIcon color="primary"/>,
     "dedicated phone supports":<IndeterminateCheckBoxRoundedIcon color="error" />,color:"lightgrey",
     "free subdomain":<CheckBoxIcon color="primary"/>,
     "free subdomains":<IndeterminateCheckBoxRoundedIcon color="error" />,color:"lightgrey",
     "Monthly status reports":<IndeterminateCheckBoxRoundedIcon color="error" />,color:"lightgrey",
     "Monthly status report":<CheckBoxIcon color="primary"/>,
  };

  
  return(
    <div >
    <div style={{
        height: "550px",
        width: "150px",
        backgroundColor: "white",
        borderRadius: "5%",
        padding: "50px",
        margin: "20px",
        cursor: "pointer",
        display: "inline-grid",
    justifyItems:" start"

      }}>
<h5>{insides.pricetags}</h5>
<h1>{insides.howmuch}</h1>
<div style={styles}><CheckBoxIcon color='primary' />{insides.user}</div>
<div style={styles}><CheckBoxIcon color='primary' />{insides.storage}</div>
<div style={styles}><CheckBoxIcon color='primary' />{insides.projects}</div>
<div style={styles}><CheckBoxIcon color='primary' />{insides.access}</div>
<div style={styles}>{checkBoxIcons[insides.anoaccess]}{insides.anoaccess}</div>
<div style={styles}>{checkBoxIcons[insides.support]}{insides.support}</div>
<div style={styles}>{checkBoxIcons[insides.subdomain]}{insides.subdomain}</div>
<div style={styles}>{checkBoxIcons[insides.report]}{insides.report}</div>
<Button style={{backgroundColor:"royalblue",color:"white",width:"150px"}}>Button</Button>
     </div>
    </div>
    
  )
}

