import React from 'react';
import '../../css/funding.css'

function OfertFunding(props) {
    return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border">
                <div className="card-header py-3 bg-danger text-white  border-danger">
                    <h4 className="my-0 fw-normal">{props.nombreDonacion}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">{props.monto}</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{props.descripcion}</li>
                    </ul>
                    <button type="button" className="w-100 btn-lg button btn-outline">Volverme donador {props.nombreDonacion}</button>
                </div>
            </div>
        </div>
    );
}

export default OfertFunding;