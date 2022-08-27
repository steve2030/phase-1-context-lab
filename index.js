/* Your Code Here */
function createEmployeeRecord(employeeInfo) {
    const employeeRecord = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord


}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })
    return this;
}

function hoursWorkedOnDate(dateStamp) {

    const timeIns = this.timeInEvents.find(timeRecords =>
        timeRecords.date === dateStamp);
    const timeOuts = this.timeOutEvents.find(timeRecords =>
        timeRecords.date === dateStamp
    );
    const hoursWorked = (timeOuts.hour - timeIns.hour) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(dateStamp) {
    const elapsedTime = hoursWorkedOnDate.call(this, dateStamp)
    const amountOwed = elapsedTime * this.payPerHour;
    return amountOwed;
}

function findEmployeeByFirstName(srcArrays, firstName) {
    return srcArrays.find(employee => employee.firstName.toLowerCase() === firstName.toLowerCase())

}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(
        function (memo, d) {
            return memo + wagesEarnedOnDate.call(this, d);
        }.bind(this),
        0
    ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
};

function calculatePayroll(employeesRecords) {
    return employeesRecords.reduce((totalAmount, employee) =>
        totalAmount = totalAmount + allWagesFor.call(employee), 0)
}

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// Earns 324
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
// Earns 54
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")

// console.log(allWagesFor(cRecord))

console.log(allWagesFor(cRecord))
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
