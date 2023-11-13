import { Link } from 'react-router-dom';

export default function NotFound () {
    return (
       <div style={{display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:'20px', marginTop:'100px'}}>
         <h1>404 ERROR</h1>
         <p style={{color:'#707070'}}>This page not found;
            <br/>
back to home and start again</p>
<button style={{border:'2px solid black', backgroundColor:'white', borderRadius:'4px', padding:'16px 40px', fontWeight:'600' }}><Link to='/'>HOMEPAGE</Link></button>
       </div>
    )
}