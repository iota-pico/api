[@iota-pico/api](../README.md) > [IGetBalancesResponse](../interfaces/igetbalancesresponse.md)

# Interface: IGetBalancesResponse

Represents the response from getBalances command.
*__interface__*: 

## Hierarchy

 [ICommonResponse](icommonresponse.md)

**↳ IGetBalancesResponse**

## Index

### Properties

* [balances](igetbalancesresponse.md#balances)
* [duration](igetbalancesresponse.md#duration)
* [milestone](igetbalancesresponse.md#milestone)
* [milestoneIndex](igetbalancesresponse.md#milestoneindex)

---

## Properties

<a id="balances"></a>

###  balances

**●  balances**:  *`string`[]* 

*Defined in [models/IGetBalancesResponse.ts:11](https://github.com/iota-pico/api/blob/242aedb/src/models/IGetBalancesResponse.ts#L11)*

List of balances for the addresses.

___

<a id="duration"></a>

###  duration

**●  duration**:  *`number`* 

*Inherited from [ICommonResponse](icommonresponse.md).[duration](icommonresponse.md#duration)*

*Defined in [models/ICommonResponse.ts:9](https://github.com/iota-pico/api/blob/242aedb/src/models/ICommonResponse.ts#L9)*

The duration of the request.

___

<a id="milestone"></a>

###  milestone

**●  milestone**:  *`string`* 

*Defined in [models/IGetBalancesResponse.ts:15](https://github.com/iota-pico/api/blob/242aedb/src/models/IGetBalancesResponse.ts#L15)*

The milestone at which the balances were calculated.

___

<a id="milestoneindex"></a>

###  milestoneIndex

**●  milestoneIndex**:  *`number`* 

*Defined in [models/IGetBalancesResponse.ts:19](https://github.com/iota-pico/api/blob/242aedb/src/models/IGetBalancesResponse.ts#L19)*

The milestone index at which the balances were calculated.

___

