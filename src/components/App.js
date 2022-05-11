import React from 'react';
import { connect } from 'react-redux';
import AccountItemList from "./AccountItemList";
import TransactionItemList from "./TransactionItemList";
import './App.css'
import PageTabs from './PageTabs';
import AddAccount from "./AddAccount";
import AccountList from './AccountList'
import AccountMember from "./AccountMember";
import axios from "axios";
import { setAccounts, accountsError } from "../actions"


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
        accounts: [],
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
            this.props.accountsError();
        });
    }

    onUpdateAccountList = (newAccountList) => {
        this.setState({ account: newAccountList});
    }

    onViewChange(view) {
        this.setState({view});
    }

    onEditAccount = (accountName) => {
        const accName = document.getElementById('accounts_name');
        const inputName = document.getElementById('EditAccName');
        const option = accName.value;
        let newName = '';
        if (inputName === option){
            newName = inputName;
        }
        let accounts = this.state.users;
        accounts.push({
            title: accountName,
            name: newName
        });
        this.setState({ accounts });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.users);
        this.setState({ accounts: '' })
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
                          <AccountList/>
                      </div>
                  </div>
              </div>
          ));
      }
        //<AccountItemList/> inside div className='col-sm-4
      /*
      <AccountItemList
          title="Accounts"
          stateList="accounts"
      />
      */
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
                          <form onSubmit={this.onFormSubmit}>
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
                              <input type="text" placeholder="Account Name" id="EditAccName"/>
                              <input placeholder="New Name" id="newName"/>
                              <input type="submit" value="submit"
                              onSubmit={this.onEditAccount}
                              name="accounts"
                              //value={this.state.accounts}
                              onChange={(e) => this.setState({accounts: e.target.value})}
                              />
                          </form>
                          <AccountItemList/>
                          <TransactionItemList/>
                      </div>
                  </div>
              </div>
          ));
      }
  }
}


const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors.users
    };
}

//export default App;
export default connect(null, {setAccounts, accountsError})(App);

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
