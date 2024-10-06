class MacAddressIo {
	constructor(apiKey, macAddress) {
		this.api = "https://api.apis.guru"
		this.apiKey = apiKey
		this.macAddress = macAddress
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
			"x-authentication-token": this.apiKey
		}
	}

	async getData() {
		const response = await fetch(
			`${this.api}/v1?output=json&search=${this.macAddress}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {MacAddressIo}
