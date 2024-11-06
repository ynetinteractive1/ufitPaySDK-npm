import { UfitPaySDK } from 'ufitpay-sdk';

const apiKey = 'pub-1f2ab19729ccec22fded731560385162';
const apiToken = 'sec-3c05c8d8b4289b12e41ea649de95b489';
const ufitPay = new UfitPaySDK(apiKey, apiToken);

// Example of listing services
ufitPay.listServices()
    .then(services => console.log('Services:', services))
    .catch(error => console.error('Error fetching services:', error));
/*
// Example of initiating a bill payment
ufitPay.initiateBillPayment('serviceId', 'vendorId', 'packageId', 'accountNumber', 1000, 'uniqueRef123')
    .then(response => console.log('Payment Response:', response))
    .catch(error => console.error('Error initiating payment:', error));*/

// Test for fetching e-Wallet balance
ufitPay.getBalance('NGN') // Optional: specify the currency (e.g., 'NGN')
    .then(balance => console.log('Balance:', balance))
    .catch(error => console.error('Error fetching balance:', error));

const services = await ufitPay.listServices();
    console.log(services);
//https://www.npmjs.com/package/ufitpay-sdk    