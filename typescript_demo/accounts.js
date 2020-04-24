var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accId, accName, accBalance) {
        this.accId = accId;
        this.accName = accName;
        this.accBalance = accBalance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accId, accName, accBalance, interest) {
        var _this = _super.call(this, accId, accName, accBalance) || this;
        _this.interest = interest;
        return _this;
    }
    SavingAccount.prototype.getBalance = function () {
        return this.accBalance + (this.accBalance * (this.interest / 100));
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accId, accName, balance, cashCredit) {
        var _this = _super.call(this, accId, accName, balance) || this;
        _this.cashCredit = cashCredit;
        return _this;
    }
    CurrentAccount.prototype.getBalance = function () {
        return this.accBalance + this.cashCredit;
    };
    return CurrentAccount;
}(Account));
var savingAccount = new SavingAccount(101, "Anuj", 1000, 100);
console.log(savingAccount.getBalance());
