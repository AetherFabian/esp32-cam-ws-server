# ESP32 Battery API

This API provides endpoints to manage information related to the battery of ESP32 devices.

## Endpoints

### 1. Get Battery Information

**Endpoint:** `GET /api/v1/esp32-battery`

**Parameters:**
- `id` (Query Parameter): The unique identifier of the ESP32 device.

**Description:**
Retrieves information about the battery of the specified ESP32 device.

**Example Request:**
```http
GET /api/v1/esp32-battery?id=<token>
```

**Example Response:**
```json
{
  "data": {
    "name": "ola",
    "percentageOfTheBatteryOfTheDrone": 97,
    "id": "ea5bee81-53b7-4839-8a4c-cca036f1d80f"
  }
}
```

### 2. Get Latest Battery Information

**Endpoint:** `GET /api/v1/esp32-battery/latest`

**Description:**
Retrieves the latest information about the battery of any ESP32 device.

**Example Request:**
```http
GET /api/v1/esp32-battery/latest
```

**Example Response:**
```json
{
  "data": [
    {
      "name": "ola",
      "percentageOfTheBatteryOfTheDrone": 100,
      "id": "7e48060b-b872-4534-abc3-ee9a059fdd97"
    }
  ]
}
```

### 3. Create New Battery Entry

**Endpoint:** `POST /api/v1/esp32-battery`

**Request Body:**
- `name` (JSON): The name of the ESP32 device.

**Description:**
Creates a new entry for the battery of an ESP32 device.

**Example Request:**
```http
POST /api/v1/esp32-battery
Content-Type: application/json

{
  "name": "ESP32_Device"
}
```

**Example Response:**
```json
{
  "data": {
    "name": "ESP32_Device",
    "percentageOfTheBatteryOfTheDrone": 100,
  }
}
```

### 4. Update Battery Information

**Endpoint:** `PATCH /api/v1/esp32-battery`

**Parameters:**
- `id` (Query Parameter): The unique identifier of the ESP32 device.

**Request Body:**
- `percentageOfTheBatteryOfTheDrone` (JSON): The updated battery percentage.

**Description:**
Updates the battery information of the specified ESP32 device.

**Example Request:**
```http
PATCH /api/v1/esp32-battery?id=<device_id>
Content-Type: application/json

{
  "percentageOfTheBatteryOfTheDrone": 80
}
```

**Example Response:**
```json
{
  "data": {
    "percentageOfTheBatteryOfTheDrone": 79,
  }
}
```

## Routes

### 1. Get Battery Information
- **Endpoint:** `GET /api/v1/esp32-battery`

### 2. Get Latest Battery Information
- **Endpoint:** `GET /api/v1/esp32-battery/latest`

### 3. Create New Battery Entry
- **Endpoint:** `POST /api/v1/esp32-battery`

### 4. Update Battery Information
- **Endpoint:** `PATCH /api/v1/esp32-battery`

## Error Handling

In case of errors, the API will respond with a JSON object containing the `error` field.

**Example Error Response:**
```json
{
  "data": null,
  "error": "Error message details"
}
```

Feel free to use these endpoints and routes to interact with the ESP32 Battery API.
