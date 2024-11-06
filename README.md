# UfitPaySDK

`UfitPaySDK` is a JavaScript SDK designed to easily integrate UfitPay's API for managing various financial transactions, such as listing services, querying balances, validating accounts, and initiating payments.

## Installation

Install the SDK via npm:

```bash
npm install ufitpay-sdk
```


First, import the SDK and initialize it with your apiKey and apiToken.



```javascript
import UfitPaySDK from 'ufitpay-sdk';

const sdk = new UfitPaySDK('yourApiKey', 'yourApiToken');
```


##  Methods
The following methods are available for interacting with the UfitPay API:

### 1. List Services
Retrieve a list of available services.


```javascript
const services = await sdk.listServices();
console.log(services);
```

### 2. Get Balance
Check your account balance. The default currency is NGN (Nigerian Naira).

```javascript
const balance = await sdk.getBalance('USD'); // or 'NGN' or any supported currency
console.log(balance);
```

### 3. List Vendors
Get a list of vendors for a specific service.

```javascript
const vendors = await sdk.listVendors(serviceId);
console.log(vendors);
```

### 4. List Packages
Retrieve packages offered by a vendor.


```javascript
const packages = await sdk.listPackages(vendorId);
console.log(packages);
```



## Error Handling
All methods throw an error in case of network issues or API errors. It’s recommended to wrap calls in a try...catch block for proper error handling:


```javascript
try {
    const balance = await sdk.getBalance();
    console.log(balance);
} catch (error) {
    console.error('An error occurred:', error.message);
}
```




## API Methods

| Bill payment                                              | Description                                                                                                          | Parameters                                                                                           |
|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `listServices()`                                          | Retrieves a list of available services.                                                                             | None                                                                                                 |
| `getBalance(currency)`                                    | Fetches the account balance for the specified currency (default is NGN).                                            | `currency` (optional) - Currency code (e.g., 'NGN', 'USD')                                           |
| `listVendors(serviceId)`                                  | Lists vendors for a specific service.                                                                               | `serviceId` - The ID of the service                                                                  |
| `listPackages(vendorId)`                                  | Lists packages offered by a specific vendor.                                                                        | `vendorId` - The ID of the vendor                                                                    |
| `listAvailableVendorsWithPrice(serviceId)`                | Lists vendors, packages, and prices for a given service.                                                            | `serviceId` - The ID of the service                                                                  |
| `getOrderPrice(serviceId, vendorId, packageId, amount)`   | Calculates the price of an order based on parameters.                                                               | `serviceId` - Service ID, `vendorId` - Vendor ID, `packageId` (optional), `amount` (optional)       |
| `validatePayerAccount(accountNumber, vendorId)`           | Validates a payer's account with the vendor.                                                                        | `accountNumber` - Account number, `vendorId` - Vendor ID                                             |
| `initiateBillPayment(serviceId, vendorId, packageId, accountNumber, amount, requestRef)` | Initiates a bill payment.                | `serviceId` - Service ID, `vendorId` - Vendor ID, `packageId` (optional), `accountNumber`, `amount` (optional), `requestRef` (optional) |
| `transactionStatusQuery(reference, requestRef)`           | Queries the status of a transaction by reference.                                                                   | `reference` - Transaction reference, `requestRef` (optional) - Request reference                     |

This table provides a summary of the methods available in the `UfitPaySDK` for managing bill payments, including service listing, vendor and package retrieval, account validation, and transaction status checking.
