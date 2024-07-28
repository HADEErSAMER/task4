import './Report.css'
import jermyimg from "../../assets/image-jeremy.png"
function Report (){
    return(
<div id='jermydiv' >
<div id='topdiv'>
<img id='jermyimg' src={jermyimg}/>
<label className='report'>Report For</label>
<h2 className='bold'>Jermey Robson</h2>
</div>
<div id='buttomdiv'>
<label className='daily'>Daily</label>
<label className='daily'>Weekly</label>
<label className='daily'>Monthly</label>

</div>

</div>
    )
}

export default Report