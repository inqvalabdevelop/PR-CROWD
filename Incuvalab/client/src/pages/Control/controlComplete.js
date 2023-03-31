import { FundCardsComplete } from "../../components/funding/fundCardComplete";
import FooterAdmin from "../../components/general/footerAdmin";

export function ControlComplete() {
    return (
        <div>
            <div className="container align-center">
                <h1 className='m-3 text-center'>Proyectos con recaudación completa</h1>
                <div>
                    <FundCardsComplete></FundCardsComplete>
                </div>
            </div>
            <FooterAdmin/>
        </div >
    )
}