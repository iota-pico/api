[@iota-pico/api](../README.md) > [IGetInclusionStatesResponse](../interfaces/igetinclusionstatesresponse.md)

# Interface: IGetInclusionStatesResponse

Represents the response from getInclusionStates command.

*__interface__*: 

## Hierarchy

 [ICommonResponse](icommonresponse.md)

**↳ IGetInclusionStatesResponse**

## Index

### Properties

* [duration](igetinclusionstatesresponse.md#duration)
* [states](igetinclusionstatesresponse.md#states)

---

## Properties

<a id="duration"></a>

###  duration

**● duration**: *`number`*

*Inherited from [ICommonResponse](icommonresponse.md).[duration](icommonresponse.md#duration)*

*Defined in [models/ICommonResponse.ts:9](https://github.com/iota-pico/api/tree/master/src/models/ICommonResponse.ts#L9*

The duration of the request.

___
<a id="states"></a>

###  states

**● states**: *`boolean`[]*

*Defined in [models/IGetInclusionStatesResponse.ts:12](https://github.com/iota-pico/api/tree/master/src/models/IGetInclusionStatesResponse.ts#L12*

List of boolean values in the same order as the transaction list you submitted, thus you get a true/false whether a transaction is confirmed or not.

___

