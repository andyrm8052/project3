import React from 'react';

import '../css/index.css';

class PageTabs extends React.Component {

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <a className={this.isActiveTab('page1')}
                       onClick={(e) => this.onTabClick(e, 'page1')}>
                        Home
                    </a>
                </li>
                <li className='nav-item'>
                    <a className={this.isActiveTab('page2')}
                       onClick={(e) => this.onTabClick(e, 'page2')}>
                        Transactions
                    </a>
                </li>
                <li className='nav-item'>
                    <a className={this.isActiveTab('page3')}
                       onClick={(e) => this.onTabClick(e, 'page3')}>
                        Accounts
                    </a>
                </li>
            </ul>
        )
    }

}

export default PageTabs;
