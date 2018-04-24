[@iota-pico/api](../README.md) > [IWereAddressesSpentFromResponse](../interfaces/iwereaddressesspentfromresponse.md)

# Interface: IWereAddressesSpentFromResponse

Represents the response from wereAddressesSpentFrom command.
*__interface__*: 

## Hierarchy

 [ICommonResponse](icommonresponse.md)

**↳ IWereAddressesSpentFromResponse**

## Index

### Properties

* [duration](iwereaddressesspentfromresponse.md#duration)
* [states](iwereaddressesspentfromresponse.md#states)

---

## Properties

<a id="duration"></a>

###  duration

**●  duration**:  *`number`* 

*Inherited from [ICommonResponse](icommonresponse.md).[duration](icommonresponse.md#duration)*

*Defined in [models/ICommonResponse.ts:9](https://github.com/iota-pico/api/blob/242aedb/src/models/ICommonResponse.ts#L9)*

The duration of the request.

___

<a id="states"></a>

###  states

**●  states**:  *`boolean`[]* 

*Defined in [models/IWereAddressesSpentFromResponse.ts:11](https://github.com/iota-pico/api/blob/242aedb/src/models/IWereAddressesSpentFromResponse.ts#L11)*

States which are true if the corresponding input address was spent from.

___

