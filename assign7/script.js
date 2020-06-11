
"use strict";


var AccountModule = (function (document) {

    function makeAccount(name, balance) {

        if (balance) {
            balance = parseFloat(balance);
        } else {
            balance = 0;
        }

        return {
            name: name,
            balance: balance
        };
    }

    var accountInfoList = [], ta, btn;

    function getAccountInfoList() {
        console.log('getAccountInfoList');
        return accountInfoList;
    }
    function setAccountInfoList(list) {
        accountInfoList = list;
    }

    function AccountInfoListToString(account) {
        var name = account.name,
            balance = account.balance;
        return 'Account name: ' + name + ' Balance: ' + balance;
    }

    function getDisplayString() {
        return accountInfoList.map(AccountInfoListToString).join('\n');
    }

    function construct(taId, btnId) {
        ta = document.getElementById(taId);
        btn = document.getElementById(btnId);

        var publicMethods = {
            makeAccount: makeAccount,
            setAccountInfoList: setAccountInfoList,
            getAccountInfoList: getAccountInfoList,
            getDisplayString: getDisplayString
        };
        console.log(taId, ta, btn, publicMethods);
        return publicMethods;
    }
    return construct;
}(document));


/*
You should have an accountInfoList variable outside the module.
You should have a button event handler that uses the module to create an account.
*/
var accountModule,
    accountInfoList = [];
function onReady() {
    accountModule = new AccountModule('ta', 'btn');
    console.log('init:accountModule', accountModule);
    
}

function onClick() {

    var accountName = document.getElementById('name').value,
        deposit = document.getElementById('deposit').value,
        ta = document.getElementById('ta'),
        accountObject = accountModule.makeAccount(accountName, deposit);

    accountInfoList.push(accountObject);
    accountModule.setAccountInfoList(accountInfoList);
    ta.value = accountModule.getDisplayString();
}

window.onload = onReady;