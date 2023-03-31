import { FundCardsAprobe } from "../../components/funding/fundCardAprobe";
import FooterAdmin from "../../components/general/footerAdmin";

export function ControlAprobe() {

    return (
        <div>
            <div className="container align-center">
                <h1 className='m-3 text-center'>Solicitudes de aprobación</h1>
                <div >
                    <FundCardsAprobe></FundCardsAprobe>
                </div>
            </div>
            <FooterAdmin />
        </div>
    )
}