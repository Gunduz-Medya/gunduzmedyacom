import React from 'react';
import GMSectionTitle from '../../elements/section-title/GMSectionTitle';
import CounterUp from '../../component/counterup/CounterUp';


const CounterUpOne = () => {
    return (
        <div className="section section-padding bg-color-dark">
            <div className="container">
            <GMSectionTitle 
                    subtitle="Featured Case Study"
                    title="Design startup movement"
                    description="In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus."
                    textAlignment="heading-light"
                    textColor=""
                />
                <div className="row">
                    <CounterUp colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
            </div>
        </div>
    )
}


export default CounterUpOne;