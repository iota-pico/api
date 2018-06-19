[@iota-pico/api](../README.md) > [IAttachToTangleResponse](../interfaces/iattachtotangleresponse.md)

# Interface: IAttachToTangleResponse

Represents the response from attachToTangle command.
*__interface__*: 

## Hierarchy

 [ICommonResponse](icommonresponse.md)

**↳ IAttachToTangleResponse**

## Index

### Properties

* [duration](iattachtotangleresponse.md#duration)
* [trytes](iattachtotangleresponse.md#trytes)

---

## Properties

<a id="duration"></a>

###  duration

**● duration**: *`number`*

*Inherited from [ICommonResponse](icommonresponse.md).[duration](icommonresponse.md#duration)*

*Defined in [models/ICommonResponse.ts:9](https://github.com/iota-pico/api/blob/4db1362/src/models/ICommonResponse.ts#L9)*

The duration of the request.

___
<a id="trytes"></a>

###  trytes

**● trytes**: *`string`[]*

*Defined in [models/IAttachToTangleResponse.ts:12](https://github.com/iota-pico/api/blob/4db1362/src/models/IAttachToTangleResponse.ts#L12)*

The returned tryte value, the last 243 trytes basically consist of the: trunkTransaction + branchTransaction + nonce.

___

