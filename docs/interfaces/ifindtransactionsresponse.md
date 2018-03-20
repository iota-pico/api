[@iota-pico/api](../README.md) > [IFindTransactionsResponse](../interfaces/ifindtransactionsresponse.md)



# Interface: IFindTransactionsResponse


Represents the response from findTransactions command.
*__interface__*: 


## Hierarchy


 [ICommonResponse](icommonresponse.md)

**↳ IFindTransactionsResponse**








## Properties
<a id="duration"></a>

###  duration

**●  duration**:  *`number`* 

*Inherited from [ICommonResponse](icommonresponse.md).[duration](icommonresponse.md#duration)*

*Defined in [models/ICommonResponse.ts:9](https://github.com/iotaeco/iota-pico-api/blob/9d1ac6b/src/models/ICommonResponse.ts#L9)*



The duration of the request.




___

<a id="hashes"></a>

###  hashes

**●  hashes**:  *`string`[]* 

*Defined in [models/IFindTransactionsResponse.ts:16](https://github.com/iotaeco/iota-pico-api/blob/9d1ac6b/src/models/IFindTransactionsResponse.ts#L16)*



The transaction hashes which are returned depend on your input. For each specified input value, the command will return the following: bundles: returns the list of transactions which contain the specified bundle hash. addresses: returns the list of transactions which have the specified address as an input/output field. tags: returns the list of transactions which contain the specified tag value. approvees: returns the list of transaction which reference (i.e. confirm) the specified transaction.




___


