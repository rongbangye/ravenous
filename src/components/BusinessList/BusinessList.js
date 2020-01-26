import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map((business) => {
                        /* after we have real data, add a key property */
                        return <Business key={business.id} business={business} />;
                    })
                } 
            </div>
        );
    }
}

export default BusinessList;