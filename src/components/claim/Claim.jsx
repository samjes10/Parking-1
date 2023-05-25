import { useEffect, useState } from "react";
import ClaimTable from "./ClaimTable"

const Claim = () => {

    useEffect(() => {
        getClaims();
    },[])

    const [claims, setClaims] = useState([]) 
    const [pageInfo, setPageInfo] = useState({});

    const getClaims = async ( pageNUmber=1) => {
        const url = 'sugerencia';
        const params =  `page=${pageNUmber}`;
        const { success, claims, pageInfo } = await APISERVICE.get(url, params);
        if(success){
            setClaims(claims);
            setPageInfo(pageInfo);
        }

    }

  return (
    <section>
        <h3>Quejas y sugerencias</h3>
        <ClaimTable claims={claims} pageINf={pageInfo} getClaims={getClaims}/>
    </section>
  )
}
export default Claim