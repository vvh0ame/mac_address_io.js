# mac_address_io.js
Web-API for [macaddress.io](https://macaddress.io) website to retrieve information about given mac address

## Example
```JavaScript
async function main() {
	const { MacAddressIo } = require("./mac_address_io.js")
	const macAddressIo = new MacAddressIo("apiKey", "macAddress")
	const data = await macAddressIo.getData()
	console.log(data)
}

main()
```
