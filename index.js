import axios from 'axios';


export class UfitPaySDK {
    constructor(apiKey, apiToken) {
        this.apiKey = apiKey;
        this.apiToken = apiToken;
        this.baseUrl = 'https://api.ufitpay.com/v1';
    }

    // Utility function to handle API requests
    async request(endpoint, method = 'GET', data = {}) {
        try {
            const response = await axios({
                url: `${this.baseUrl}${endpoint}`,
                method,
                headers: {
                    'Api-Key': this.apiKey,
                    'Api-Token': this.apiToken,
                },
                data
            });
            return response.data;
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            throw error;
        }
    }

    // 1. List Services
    async listServices() {
        return await this.request('/services');
    }

    async getBalance(currency = 'NGN') {
        const endpoint = `/balance${currency ? `?currency=${currency}` : ''}`;
        return await this.request(endpoint, 'GET');
    }
    
    // 2. List Vendors
    async listVendors(serviceId) {
        return await this.request('/vendors', 'POST', { service_id: serviceId });
    }

    // 3. List Packages
    async listPackages(vendorId) {
        return await this.request('/packages', 'POST', { vendor_id: vendorId });
    }

    // 4. List Available Vendors with Packages & Price
    async listAvailableVendorsWithPrice(serviceId) {
        return await this.request('/price_list', 'POST', { service_id: serviceId });
    }

    // 5. Get Order Price
    async getOrderPrice(serviceId, vendorId, packageId = null, amount = null) {
        return await this.request('/get_price', 'POST', {
            service_id: serviceId,
            vendor_id: vendorId,
            package_id: packageId,
            amount: amount,
        });
    }

    // 6. Validate Payer Account
    async validatePayerAccount(accountNumber, vendorId) {
        return await this.request('/account_validate', 'POST', {
            account_number: accountNumber,
            vendor_id: vendorId
        });
    }

    // 7. Initiate Bill Payment
    async initiateBillPayment(serviceId, vendorId, packageId = null, accountNumber, amount = null, requestRef = null) {
        return await this.request('/pay', 'POST', {
            service_id: serviceId,
            vendor_id: vendorId,
            package_id: packageId,
            account_number: accountNumber,
            amount: amount,
            request_ref: requestRef
        });
    }

    // 8. Transaction Status Query
    async transactionStatusQuery(reference, requestRef = null) {
        return await this.request('/transaction', 'POST', {
            reference: reference,
            request_ref: requestRef
        });
    }
}
