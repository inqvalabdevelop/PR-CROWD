import React from 'react'
import { FundCardsCommand } from "../../components/funding/fundCardCommand";
import FooterAdmin from '../../components/general/footerAdmin';

export function ControlCommand() {

    return (
        <div>
            <div className="container align-center">
                <h1 className='m-3 text-center'>Proyectos</h1>
                <div>
                    <FundCardsCommand></FundCardsCommand>
                </div>
            </div>
            <FooterAdmin />
        </div>
    )

}