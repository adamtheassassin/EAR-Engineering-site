# Make.com Lead Integration Plan

## Goal
Send all form submissions from the `QuoteModal` to a centralized Make.com webhook. The data structure should remain consistent across all service categories (Electrical, Solar, General Aircon) to avoid having complex conditional routes in Make.com. 

The only exception is for the specific "New AC Installation" sub-service, which requires a few additional specific fields. Because the base field names remain identical, Make.com can still process the core data with a single flow.

## Webhook URL
`https://hook.eu2.make.com/1rz5w2sjex28nl2qf7ffofqpe7bn819d`

## Data Structure / Payload Blueprint

To guarantee that Make.com doesn't require different logic depending on the chosen category, we will standardize the JSON payload being sent in the `POST` request.

### 1. Unified Fields (Sent for ALL Services)
Regardless of the `category` chosen, the following core fields will be sent using exactly these keys:

- `serviceCategory` (String) - Maps to `category` (e.g., "Electrical", "Aircon", "Solar")
- `serviceType` (String) - Maps to `subService` (e.g., "DB Board Replacement", "New AC Installation")
- `description` (String) - Maps to `details` (The text area input)
- `timeframe` (String) - Maps to `timeframe` (e.g., "As soon as possible")
- `customerName` (String) - Maps to `name` 
- `customerPhone` (String) - Maps to `phone`
- `customerEmail` (String) - Maps to `email`
- `customerArea` (String) - Maps to `area`

### 2. Specialized Fields (Sent ONLY for "New AC Installation")
If `category === "Aircon"` and `subService === "New AC Installation"`, the following extra fields are appended to the payload.

- `acType` (String) - Maps to `acType` (e.g., "Split Unit", "Inverter")
- `acBrand` (String) - Maps to `acBrand` (e.g., "Samsung", "LG")

*Note: For all other services, `acType` and `acBrand` will simply not be included in the JSON payload, or sent as `null`/empty strings. Make.com will safely ignore them.*

## Required Code Changes in \`QuoteModal.tsx\`

1. **Update `handleSubmit` function**:
   Currently, `handleSubmit` just sets `setIsSuccess(true)` when `step >= totalSteps`. 
   We will update this to:
   - Construct the standard payload object.
   - Use `fetch` to send a `POST` request to the webhook URL.
   - Handle the loading state while the request is sending.
   - On success (HTTP 200), call `setIsSuccess(true)` and clear local storage.
   - On failure, alert the user or show an error message.

**Example Payload Implementation:**
```javascript
const payload = {
  serviceCategory: category,
  serviceType: subService,
  description: details,
  timeframe: timeframe,
  customerName: name,
  customerPhone: phone,
  customerEmail: email,
  customerArea: area,
  // Only include AC specifics if applicable
  ...(isAcInstall && {
    acType: acType,
    acBrand: acBrand
  })
};
```

## Make.com Scenario Setup Guide
1. Create a new scenario in Make.com.
2. Select **Webhooks** module -> **Custom Webhook** as the trigger.
3. Paste the URL.
4. Run the module once and submit a test lead from the website so Make.com can determine the unified JSON data structure.
5. You can now map `serviceCategory`, `customerName`, etc. into your destination (Email, CRM, Google Sheets, etc.) cleanly without routing logic for each category.
