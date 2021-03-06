[@iota-pico/api](../README.md) > [IAttachToTangleRequest](../interfaces/iattachtotanglerequest.md)

# Interface: IAttachToTangleRequest

Represents the request for attachToTangle command.

*__interface__*: 

## Hierarchy

**IAttachToTangleRequest**

## Index

### Properties

* [branchTransaction](iattachtotanglerequest.md#branchtransaction)
* [minWeightMagnitude](iattachtotanglerequest.md#minweightmagnitude)
* [trunkTransaction](iattachtotanglerequest.md#trunktransaction)
* [trytes](iattachtotanglerequest.md#trytes)

---

## Properties

<a id="branchtransaction"></a>

###  branchTransaction

**● branchTransaction**: *`string`*

*Defined in [models/IAttachToTangleRequest.ts:13](https://github.com/iota-pico/api/tree/master/src/models/IAttachToTangleRequest.ts#L13*

Branch transaction to approve.

___
<a id="minweightmagnitude"></a>

###  minWeightMagnitude

**● minWeightMagnitude**: *`number`*

*Defined in [models/IAttachToTangleRequest.ts:17](https://github.com/iota-pico/api/tree/master/src/models/IAttachToTangleRequest.ts#L17*

Proof of Work intensity. Minimum value is 18

___
<a id="trunktransaction"></a>

###  trunkTransaction

**● trunkTransaction**: *`string`*

*Defined in [models/IAttachToTangleRequest.ts:9](https://github.com/iota-pico/api/tree/master/src/models/IAttachToTangleRequest.ts#L9*

Trunk transaction to approve.

___
<a id="trytes"></a>

###  trytes

**● trytes**: *`string`[]*

*Defined in [models/IAttachToTangleRequest.ts:21](https://github.com/iota-pico/api/tree/master/src/models/IAttachToTangleRequest.ts#L21*

List of trytes (raw transaction data) to attach to the tangle.

___

