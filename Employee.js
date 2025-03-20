// UC-1: Check if Employee is Present or Not
const present = 1;

let isPresent = Math.floor(Math.random() * 10) % 2;

if (isPresent == present) {
    console.log("Employee is Present");
} else {
    console.log("Employee is not Present");
    return;
}

// UC-2 and UC-3: Calculating Daily Wage of an Employee Using a Function
let workingHours = Math.floor(Math.random() * 10) % 3;

const isPartTime = 1;
const isFullTime = 2;
const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;

function getWorkingHours(workingHours) {
    switch (workingHours) {
        case isPartTime:
            return partTime;
        case isFullTime:
            return fullTime;
        default:
            return 0;
    }
}

let wage = wagePerHour * getWorkingHours(workingHours);

console.log("Daily wage generated for employee is ", wage);

// UC-4: Calculating Wages for a Month
const numberOfWorkingDays = 20;

let empHrs = 0;

for (let i = 1; i <= numberOfWorkingDays; i++) {
    let empCheck = Math.floor(Math.random() * 10) % 3; // Getting fulltime, parttime, or no-time status
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * wagePerHour;
console.log("Monthly Wage of the Employee for hours " + empHrs + " is " + empWage);

// UC-5: Calculating Employee Wage Until Hours are 160 or Days Completed are 20
empHrs = 0;
let numberOfTotalDays = 0;
while (empHrs <= 160 && numberOfTotalDays < 20) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
    numberOfTotalDays++;
}

empWage = empHrs * wagePerHour;
console.log("Total working days are : " + numberOfTotalDays + ", Total working hours are : " + empHrs + ", Wage of Employee is : " + empWage);

// UC-6: Storing the Daily Wage in an Array and Calculating Total Wage
function getWage(empHrs) {
    return empHrs * wagePerHour;
}

const maxWorkingHrs = 160;
const maxWorkingDays = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWages = new Array();

numberOfTotalDays = 0;

while (totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;

    dailyWages.push(getWage(empHrs));

    numberOfTotalDays++;
}

empWage = totalEmpHrs * wagePerHour;
console.log("Total working days are : " + numberOfTotalDays + ", Total working hours are : " + totalEmpHrs + ", Wage of Employee is : " + empWage);

// UC-7A: Calculate Total Wage Using Array `forEach` or `reduce`
let totEmpWage = 0;

function sum(dailywage) {
    totEmpWage += dailywage;
}

dailyWages.forEach(sum);
console.log("UC7A Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailywage) {
    return totalWage + dailywage;
}

console.log("UC7A Emp Wage with reduce: " + dailyWages.reduce(totalWages, 0));

// UC-7B: Show the Day Along with Daily Wage Using Array `map` Helper Function
let dailyCntr = 0;

function mapDayWithWage(dailywage) {
    dailyCntr++;
    return dailyCntr + " " + dailywage;
}

let mapDayWithWageArr = dailyWages.map(mapDayWithWage);
console.log("UC7B Daily Wage Map");
console.log(mapDayWithWageArr);

// UC-7C: Show Days When Full Time Wage of 160 Was Earned
function fulltimeWage(dailywage) {
    return dailywage === 160;
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC-7D: Find the First Occurrence When Full Time Wage Was Earned Using `find`
function findFulltimeWage(dailywage) {
    return dailywage === 160;
}

console.log("UC 7D First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimeWage));

// UC-7E: Check If Every Element of Full Time Wage Truly Holds Full Time Wage
function isAllFulltimeWage(dailywage) {
    return dailywage === 160;
}

console.log("UC 7E Check All Elements Have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

// UC-7F: Check If There Is Any Part Time Wage
function isAnyPartTimeWage(dailywage) {
    return dailywage === 80;
}

console.log("UC 7F Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC-7G: Find the Number of Days the Employee Worked
function totalDaysWorked(numOfDays, dailywage) {
    if (dailywage > 0) return numOfDays + 1;
    return numOfDays;
}

console.log("UC 7G Number of Days Emp Worked: " + dailyWages.reduce(totalDaysWorked, 0));
