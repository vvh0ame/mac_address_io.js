# mac_address_io.py
Web-API for [macaddress.io](https://macaddress.io) website to retrieve information about given mac address

## Example
```python
import mac_address_io
mac_address_io = mac_address_io.MacAddressIO(api_key="", mac_address="")
mac_address_details = mac_address_io.get_mac_address_details()
print(mac_address_details)
```
