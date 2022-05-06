import React from 'react';
import AccountList from "./AccountList";
import AccountItemList from "./AccountItemList";
import TransactionItemList from "./TransactionItemList";
import './App.css'
import PageTabs from './PageTabs';
import axios from "axios";
import AddAccount from "./AddAccount";

class App extends React.Component {
    state = {
        view: 'page1',
    }

    onViewChange(view) {
        this.setState({view});
    }

    wrapPage(jsx){
      const {view} = this.state;
      return(
          <div className="container">
              <div className="pagesView">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
              </div>
              {jsx}
          </div>
      )
    }


  render() {
      const {view} = this.state;
      if (view === 'page1'){
          return (this.wrapPage(
              <div className="container">
                  <div className="row">
                      <div className="col-sm-4">
                          <AddAccount title="Accounts"
                                       stateList="accounts"
                                       accountType="account"
                          />
                      </div>

                      <div className="col-sm-4">
                          <AccountItemList/>
                      </div>
                  </div>
              </div>
          ));
      }

      else if (view === 'page2'){
          return (this.wrapPage(
              <div className="container">
                  <div className="row">
                      <div className="col-sm-4">
                          <TransactionItemList/>
                      </div>
                  </div>
              </div>
          ));
      }
  }
}

export default App;
/*
<div className="col-sm-4">
    <TeamList title="Players"
        stateList="players"
        characterType="player"
/>
</div>
 */


/*
<TeamList
    title="Enemies"
    stateList="enemies"
    characterType="enemy"
/>
*/
