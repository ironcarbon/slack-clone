import React from 'react';
import UserPanel from './UserPanel';



class SidePanel extends React.Component {
    render() {
        return (
            <div style={{ display: 'grid', gridTemplateRows: 'minmax(100vh,max-content)',background: 'green' }}>
                <UserPanel />
            </div >
        )
    }
}
export default SidePanel;  