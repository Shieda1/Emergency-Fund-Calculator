// https://www.omnicalculator.com/finance/emergency-fund

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const emergencyfundRadio = document.getElementById('emergencyfundRadio');
const averagemonthlyexpensesRadio = document.getElementById('averagemonthlyexpensesRadio');
const monthsofsavingsdesiredRadio = document.getElementById('monthsofsavingsdesiredRadio');

let emergencyfund;
let averagemonthlyexpenses = v1;
let monthsofsavingsdesired = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

emergencyfundRadio.addEventListener('click', function() {
  variable1.textContent = 'Average monthly expenses';
  variable2.textContent = 'Months of savings desired';
  averagemonthlyexpenses = v1;
  monthsofsavingsdesired = v2;
  result.textContent = '';
});

averagemonthlyexpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Emergency fund';
  variable2.textContent = 'Months of savings desired';
  emergencyfund = v1;
  monthsofsavingsdesired = v2;
  result.textContent = '';
});

monthsofsavingsdesiredRadio.addEventListener('click', function() {
  variable1.textContent = 'Emergency fund';
  variable2.textContent = 'Average monthly expenses';
  emergencyfund = v1;
  averagemonthlyexpenses = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(emergencyfundRadio.checked)
    result.textContent = `Emergency fund = ${computeemergencyfund().toFixed(2)}`;

  else if(averagemonthlyexpensesRadio.checked)
    result.textContent = `Average monthly expenses = ${computeaveragemonthlyexpenses().toFixed(2)}`;

  else if(monthsofsavingsdesiredRadio.checked)
    result.textContent = `Months of savings desired = ${computemonthsofsavingsdesired().toFixed(2)}`;
})

// calculation

function computeemergencyfund() {
  return Number(averagemonthlyexpenses.value) * Number(monthsofsavingsdesired.value);
}

function computeaveragemonthlyexpenses() {
  return Number(emergencyfund.value) / Number(monthsofsavingsdesired.value);
}

function computemonthsofsavingsdesired() {
  return Number(emergencyfund.value) / Number(averagemonthlyexpenses.value);
}