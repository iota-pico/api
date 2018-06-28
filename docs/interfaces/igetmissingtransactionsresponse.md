[@iota-pico/api](../README.md) > [IGetMissingTransactionsResponse](../interfaces/igetmissingtransactionsresponse.md)

# Interface: IGetMissingTransactionsResponse

Represents the response from getMissingTransactions command.
*__interface__*: 

## Hierarchy

 [ICommonResponse](icommonresponse.md)

**↳ IGetMissingTransactionsResponse**

## Index

### Properties

* [duration](igetmissingtransactionsresponse.md#duration)
* [hashes](igetmissingtransactionsresponse.md#hashes)

---

## Properties

<a id="duration"></a>

###  duration

**● duration**: *`number`*

*Inherited from [ICommonResponse](icommonresponse.md).[duration](icommonresponse.md#duration)*

*Defined in [models/ICommonResponse.ts:9](https://github.com/iota-pico/api/blob/05accab/src/models/ICommonResponse.ts#L9)*

The duration of the request.

___
<a id="hashes"></a>

###  hashes

**● hashes**: *`string`[]*

*Defined in [models/IGetMissingTransactionsResponse.ts:11](https://github.com/iota-pico/api/blob/05accab/src/models/IGetMissingTransactionsResponse.ts#L11)*

The transactions with missing references.

___

