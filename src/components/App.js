import React from 'react';
import AccountItemList from "./AccountItemList";
import TransactionItemList from "./TransactionItemList";
import './App.css'
import PageTabs from './PageTabs';
import AddAccount from "./AddAccount";
import Page1 from "./AccountPage";
import AccountList from './AccountList'

const DepositAccount = props => {
    const AccName = document.getElementById('AccName');
    const BalanceAmount = document.getElementById('BalanceAmount');
    console.log(BalanceAmount)
    if (props.accounts.name === AccName) {
        return (
            <li className="list-group-item" >
                <div>
                    {props.accounts.balance+BalanceAmount}
                </div>
            </li>
        )
    }
};

class App extends React.Component {
    state = {
        view: 'page1',
    }

    onUpdateAccountList = (newAccountList) => {
        this.setState({ account: newAccountList});
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
                                       accountType="account"/>
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

      else if (view === 'page3'){
          return (this.wrapPage(
              <div className="container">
                  <div className="row">
                      <div className="col-sm-4">
                          <form>
                              <label id="labelId">
                                  Deposit & Withdraw:
                              </label>
                              <input type="text" placeholder="Account Name" id="AccName"/>
                              <input placeholder="Amount" id="BalanceAmount"/>
                              <select value="types">
                                  <option value="deposit">Deposit</option>
                                  <option value="withdraw">Withdraw</option>
                              </select>
                              <input type="submit" value="Submit"/>
                          </form>
                          <form>
                              <label id="labelId">
                                  Edit:
                              </label>
                              <input type="text" placeholder="Account Name" id="AccName"/>
                              <input placeholder="New Name" id="newName"/>
                              <input type="submit" value="Submit"/>
                          </form>
                          <AccountItemList/>
                          <TransactionItemList/>
                      </div>
                  </div>
              </div>
          ));
      }

      else if (view === 'accountPage'){
          return (this.wrapPage(
              <div className="container">
                  <div className="row">
                      <div className="col-sm-4">
                          <Page1 accounts={this.state.account} onUpdateAccountList={this.onUpdateAccountList}/>
                          <AccountItemList/>
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
