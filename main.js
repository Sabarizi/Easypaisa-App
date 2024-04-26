import inquirer from "inquirer";
let usrName = "saba";
const pin = 7979;
let balance = 50000;
let loginAns = await inquirer.prompt([{
        name: "name",
        message: "Enter your name",
        type: "string"
    },
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    },
]);
// if (loginAns.pin === pin && loginAns.name === usrName ){
//     console.log("Welcome to Easy Paisa Account");
// }else console.log(`Invalid Information `);
let operationAns = await inquirer.prompt([{
        name: "operation",
        message: "please select an option ! ",
        type: "list",
        choices: ["Send Money", "Bill Payment", "Mobile Pacakges"]
    }]);
if (operationAns.operation === "Send Money") {
    let amountans = await inquirer.prompt([{
            name: "amount",
            type: "list",
            choices: ["Easypaisa Transfer", "Bank Transfer", "CNIC Transfer"],
            message: "select an option to send money"
        }]);
    if (amountans.amount === "Easypaisa Transfer") {
        let send = await inquirer.prompt([{
                name: "transfer",
                type: "number",
                message: "Enter Receiver Number"
            }]);
        if (send.transfer) {
            let transfermoney = await inquirer.prompt([{
                    name: "transferMethod",
                    type: "number",
                    message: "Enter amount do you want to Transfer",
                }]);
            if (transfermoney.transferMethod > balance) {
                console.log(" 'Insufficient balance' Please Rechagre your account");
            }
            else if (balance -= transfermoney.transferMethod) {
                console.log(`${transfermoney.transferMethod} Transfer Successfully`);
                console.log(`Your remaning Balance in EasyPaisa Account is ${balance} Rs.only/=`);
            }
        }
    }
    if (amountans.amount === "Bank Transfer") {
        let trans = await inquirer.prompt([{
                name: "BankTransfer",
                type: "list",
                choices: ["ABL", "HBL", "UBL", "MCB"],
                message: "select an branch",
            }]);
        if (trans.BankTransfer === "ABL", "HBL", "UBL", "MCB") {
            let ans = await inquirer.prompt([{
                    name: "bankTrans",
                    type: "number",
                    message: "Enter Accounct Number Or IBAN"
                }]);
            if (ans.bankTrans) {
                let ans1 = await inquirer.prompt([{
                        name: "sending",
                        type: "number",
                        message: "Enter Amount would You like to Transfer"
                    }]);
                if (ans1.sending > balance) {
                    console.log(`Insufficent Balance please Recharge Your Account`);
                }
                else if (balance -= ans1.sending) {
                    console.log(`${ans1.sending} Tansfer Successfully`);
                    console.log(`Your Remaning Balance in EasyPaisa Account is ${balance} Rs.only/=`);
                }
            }
        }
    }
    ;
    if (amountans.amount = "CNIC Transfer") {
        let cnic = await inquirer.prompt([{
                name: "cnicTrsn",
                type: "number",
                message: "Enter Your Cnic Number",
            }]);
        if (cnic.cnicTrsn) {
            let cnicMoney = await inquirer.prompt([{
                    name: "cnicNumber",
                    type: "number",
                    message: "Enter your Amount Would You like to Transfer",
                }]);
            if (cnicMoney.cnicNumber > balance) {
                console.log(" 'Insufficient balance' Please Rechagre your account");
            }
            else if (balance -= cnicMoney.cnicNumber) {
                console.log(`${cnicMoney.cnicNumber} Transfer Successfully !`);
                console.log(`Your remaning Balance in EasyPaisa Account is ${balance} Rs.only/=`);
            }
        }
    }
}
if (operationAns.operation === "Bill Payment") {
    let bill = await inquirer.prompt([{
            name: "billing",
            type: "list",
            choices: ["KE bill", "SGI bill", "Water bill"],
            message: "Select our bill which One you like to Pay",
        }]);
    if (bill.billing === "KE bill", "SGI bill", "Water bill") {
        let pay = await inquirer.prompt([{
                name: "bill",
                type: "number",
                message: "Enter your Bill Invoice Number"
            }]);
        if (pay.bill) {
            let payAmount = await inquirer.prompt([{
                    name: "payment",
                    type: "number",
                    message: "Enter Your Bill Amount",
                }]);
            if (payAmount.payment > balance) {
                console.log("You Can not pay Your Bill Due To Insufficient Balance");
            }
            else if (balance -= payAmount.payment) {
                console.log(`${payAmount.payment} Thank You ! Your Bill has been Paid.`);
                console.log(`Your remaning Balance in EasyPaisa Account is ${balance} Rs.only/=.`);
            }
        }
    }
}
if (operationAns.operation === "Mobile Pacakges") {
    let packg = await inquirer.prompt([{
            name: "mobilePkg",
            type: "list",
            choices: ["Jazz", "Ufone", "Zong", "Warid", "Telenor"],
            message: "select your Network",
        }]);
    if (packg.mobilePkg === "Jazz", "Ufone", "Zong", "Warid", "Telenor") {
        let load = await inquirer.prompt([{
                name: "easyLoad",
                type: "list",
                choices: ["call package", "sms package", "Super Card", "Monthly Internet"]
            }]);
        if (load.easyLoad === "call package", "sms package", "Super Card", "Monthly Internet") {
            console.log("Congragulation ! package has been successfuly loaded");
        }
        else if (load.easyLoad > balance) {
            console.log("Insufficient Balance");
        }
    }
}
