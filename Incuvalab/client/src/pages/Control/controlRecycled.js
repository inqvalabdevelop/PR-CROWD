import { FundCardsRecycled } from "../../components/funding/fundCardRecycled";
import FooterAdmin from "../../components/general/footerAdmin";

export function ControlRecycled() {
    return (
        <div>
        <div className="container align-center">
             <h1 className='m-3 text-center'>Proyectos removidos</h1>
            <div>
                <FundCardsRecycled/>
            </div>
        </div>
        <FooterAdmin/>
        </div>
    )
}