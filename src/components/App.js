import React from 'react';
import { connect } from 'react-redux';
import AccountItemList from "./AccountItemList";
import TransactionItemList from "./TransactionItemList";
import './App.css'
import PageTabs from './PageTabs';
import AddAccount from "./AddAccount";
import AccountList from './AccountList'
import axios from "axios";
import { setAccounts, accountsError, setTransactions, transactionsError } from "../actions"
import TransactionList from "./TransactionList";


class App extends React.Component {
    state = {
        view: 'page1',
        accounts: [],
    }

    componentDidMount() {
        this.getDataAccounts();
        this.getDataTransactions();
    }

    getDataAccounts() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
            this.props.accountsError();
        });
    }

    getDataTransactions() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
            .then(response => {
                this.props.setTransactions(response.data);
            }).catch(error => {
            this.props.transactionsError();
        });
    }

    onUpdateAccountList = (newAccountList) => {
        this.setState({ account: newAccountList});
    }

    onViewChange(view) {
        this.setState({view});
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
                              name="accounts"
                              onChange={(e) => this.setState({accounts: e.target.value})}
                              />
                          </form>
                          <AccountList/>
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

export default connect(null, {setAccounts, setTransactions, accountsError, transactionsError})(App);
