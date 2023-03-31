import React from 'react'
import FooterAdmin from '../../components/general/footerAdmin';

import { UserCards } from "../../components/user/userCards";

export function ControlUsers() {
    return (
        <React.Fragment>
            <section className="container align-center">
                <div>
                    <h1 className='m-3 text-center'>Administración de usuarios</h1>
                    <div>
                        <UserCards />
                    </div>
                </div>
            </section>
            <FooterAdmin/>
        </React.Fragment>
    )
}