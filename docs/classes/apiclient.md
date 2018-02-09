[@iota-pico/api](../README.md) > [ApiClient](../classes/apiclient.md)



# Class: ApiClient


Default implementation of an api client.
*__interface__*: 


## Implements

* [IApiClient](../interfaces/iapiclient.md)

## Index

### Constructors

* [constructor](apiclient.md#constructor)


### Methods

* [addNeighbors](apiclient.md#addneighbors)
* [attachToTangle](apiclient.md#attachtotangle)
* [broadcastTransactions](apiclient.md#broadcasttransactions)
* [checkConsistency](apiclient.md#checkconsistency)
* [findTransactions](apiclient.md#findtransactions)
* [getBalances](apiclient.md#getbalances)
* [getInclusionStates](apiclient.md#getinclusionstates)
* [getMissingTransactions](apiclient.md#getmissingtransactions)
* [getNeighbors](apiclient.md#getneighbors)
* [getNodeInfo](apiclient.md#getnodeinfo)
* [getTips](apiclient.md#gettips)
* [getTransactionsToApprove](apiclient.md#gettransactionstoapprove)
* [getTrytes](apiclient.md#gettrytes)
* [interruptAttachingToTangle](apiclient.md#interruptattachingtotangle)
* [removeNeighbors](apiclient.md#removeneighbors)
* [storeTransactions](apiclient.md#storetransactions)
* [wereAddressesSpentFrom](apiclient.md#wereaddressesspentfrom)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ApiClient**(networkClient: *`INetworkClient`*, apiVersion: *`string`*, additionalHeaders?: *`object`*): [ApiClient](apiclient.md)


*Defined in [client/apiClient.ts:41](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L41)*



Create an instance of ApiClient.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| networkClient | `INetworkClient`   |  The network client to communicate through. |
| apiVersion | `string`   |  The API version to send with the requests |
| additionalHeaders | `object`   |  Extra headers to send with the requests. |





**Returns:** [ApiClient](apiclient.md)

---


## Methods
<a id="addneighbors"></a>

###  addNeighbors

► **addNeighbors**(request: *[IAddNeighborsRequest](../interfaces/iaddneighborsrequest.md)*): `Promise`.<[IAddNeighborsResponse](../interfaces/iaddneighborsresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[addNeighbors](../interfaces/iapiclient.md#addneighbors)*

*Defined in [client/apiClient.ts:83](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L83)*



Add a list of neighbors to your node. It should be noted that this is only temporary, and the added neighbors will be removed from your set of neighbors after you relaunch IRI.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IAddNeighborsRequest](../interfaces/iaddneighborsrequest.md)   |  - |





**Returns:** `Promise`.<[IAddNeighborsResponse](../interfaces/iaddneighborsresponse.md)>
Promise which resolves to the addNeighbors response object or rejects with error.






___

<a id="attachtotangle"></a>

###  attachToTangle

► **attachToTangle**(request: *[IAttachToTangleRequest](../interfaces/iattachtotanglerequest.md)*): `Promise`.<[IAttachToTangleResponse](../interfaces/iattachtotangleresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[attachToTangle](../interfaces/iapiclient.md#attachtotangle)*

*Defined in [client/apiClient.ts:164](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L164)*



Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IAttachToTangleRequest](../interfaces/iattachtotanglerequest.md)   |  The attachToTangle request object. |





**Returns:** `Promise`.<[IAttachToTangleResponse](../interfaces/iattachtotangleresponse.md)>
Promise which resolves to the attachToTangle response object or rejects with error.






___

<a id="broadcasttransactions"></a>

###  broadcastTransactions

► **broadcastTransactions**(request: *[IBroadcastTransactionsRequest](../interfaces/ibroadcasttransactionsrequest.md)*): `Promise`.<`void`>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[broadcastTransactions](../interfaces/iapiclient.md#broadcasttransactions)*

*Defined in [client/apiClient.ts:181](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L181)*



Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IBroadcastTransactionsRequest](../interfaces/ibroadcasttransactionsrequest.md)   |  The broadcastTransactions request object. |





**Returns:** `Promise`.<`void`>
Promise which resolves with empty response object or rejects with error.






___

<a id="checkconsistency"></a>

###  checkConsistency

► **checkConsistency**(request: *[ICheckConsistencyRequest](../interfaces/icheckconsistencyrequest.md)*): `Promise`.<[ICheckConsistencyResponse](../interfaces/icheckconsistencyresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[checkConsistency](../interfaces/iapiclient.md#checkconsistency)*

*Defined in [client/apiClient.ts:208](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L208)*



Check the consistency of tail hashes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [ICheckConsistencyRequest](../interfaces/icheckconsistencyrequest.md)   |  The checkConsistency request object. |





**Returns:** `Promise`.<[ICheckConsistencyResponse](../interfaces/icheckconsistencyresponse.md)>
Promise which resolves to the checkConsistency response object or rejects with error.






___

<a id="findtransactions"></a>

###  findTransactions

► **findTransactions**(request: *[IFindTransactionsRequest](../interfaces/ifindtransactionsrequest.md)*): `Promise`.<[IFindTransactionsResponse](../interfaces/ifindtransactionsresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[findTransactions](../interfaces/iapiclient.md#findtransactions)*

*Defined in [client/apiClient.ts:111](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L111)*



Find the transactions which match the specified input and return. All input values are lists, for which a list of return values (transaction hashes), in the same order, is returned for all individual elements. The input fields can either be bundles, addresses, tags or approvees. Using multiple of these input fields returns the intersection of the values.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IFindTransactionsRequest](../interfaces/ifindtransactionsrequest.md)   |  - |





**Returns:** `Promise`.<[IFindTransactionsResponse](../interfaces/ifindtransactionsresponse.md)>
Promise which resolves to the findTransactions response object or rejects with error.






___

<a id="getbalances"></a>

###  getBalances

► **getBalances**(request: *[IGetBalancesRequest](../interfaces/igetbalancesrequest.md)*): `Promise`.<[IGetBalancesResponse](../interfaces/igetbalancesresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[getBalances](../interfaces/iapiclient.md#getbalances)*

*Defined in [client/apiClient.ts:142](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L142)*



Returns the confirmed balance which a list of addresses have at the latest confirmed milestone. In addition to the balances, it also returns the milestone as well as the index with which the confirmed balance was determined. The balances is returned as a list in the same order as the addresses were provided as input.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IGetBalancesRequest](../interfaces/igetbalancesrequest.md)   |  The getBalances request object. |





**Returns:** `Promise`.<[IGetBalancesResponse](../interfaces/igetbalancesresponse.md)>
Promise which resolves to the getBalances response object or rejects with error.






___

<a id="getinclusionstates"></a>

###  getInclusionStates

► **getInclusionStates**(request: *[IGetInclusionStatesRequest](../interfaces/igetinclusionstatesrequest.md)*): `Promise`.<[IGetInclusionStatesResponse](../interfaces/igetinclusionstatesresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[getInclusionStates](../interfaces/iapiclient.md#getinclusionstates)*

*Defined in [client/apiClient.ts:130](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L130)*



Get the inclusion states of a set of transactions. This is for determining if a transaction was accepted and confirmed by the network or not. You can search for multiple tips (and thus, milestones) to get past inclusion states of transactions.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IGetInclusionStatesRequest](../interfaces/igetinclusionstatesrequest.md)   |  - |





**Returns:** `Promise`.<[IGetInclusionStatesResponse](../interfaces/igetinclusionstatesresponse.md)>
Promise which resolves to the getInclusionStates response object or rejects with error.






___

<a id="getmissingtransactions"></a>

###  getMissingTransactions

► **getMissingTransactions**(): `Promise`.<[IGetMissingTransactionsResponse](../interfaces/igetmissingtransactionsresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[getMissingTransactions](../interfaces/iapiclient.md#getmissingtransactions)*

*Defined in [client/apiClient.ts:199](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L199)*



Get transactions with missing references.




**Returns:** `Promise`.<[IGetMissingTransactionsResponse](../interfaces/igetmissingtransactionsresponse.md)>
Promise which resolves to the getMissingTransactions response object or rejects with error.






___

<a id="getneighbors"></a>

###  getNeighbors

► **getNeighbors**(): `Promise`.<[IGetNeighborsResponse](../interfaces/igetneighborsresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[getNeighbors](../interfaces/iapiclient.md#getneighbors)*

*Defined in [client/apiClient.ts:74](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L74)*



Returns the set of neighbors you are connected with, as well as their activity count. The activity counter is reset after restarting IRI.




**Returns:** `Promise`.<[IGetNeighborsResponse](../interfaces/igetneighborsresponse.md)>
Promise which resolves to the getNeighbors response object or rejects with error.






___

<a id="getnodeinfo"></a>

###  getNodeInfo

► **getNodeInfo**(): `Promise`.<[IGetNodeInfoResponse](../interfaces/igetnodeinforesponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[getNodeInfo](../interfaces/iapiclient.md#getnodeinfo)*

*Defined in [client/apiClient.ts:65](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L65)*



Returns information about your node.




**Returns:** `Promise`.<[IGetNodeInfoResponse](../interfaces/igetnodeinforesponse.md)>
Promise which resolves to the getNodeInfo response object or rejects with error.






___

<a id="gettips"></a>

###  getTips

► **getTips**(): `Promise`.<[IGetTipsResponse](../interfaces/igettipsresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[getTips](../interfaces/iapiclient.md#gettips)*

*Defined in [client/apiClient.ts:100](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L100)*



Returns the list of tips.




**Returns:** `Promise`.<[IGetTipsResponse](../interfaces/igettipsresponse.md)>
Promise which resolves to the getTips response object or rejects with error.






___

<a id="gettransactionstoapprove"></a>

###  getTransactionsToApprove

► **getTransactionsToApprove**(request: *[IGetTransactionsToApproveRequest](../interfaces/igettransactionstoapproverequest.md)*): `Promise`.<[IGetTransactionsToApproveResponse](../interfaces/igettransactionstoapproveresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[getTransactionsToApprove](../interfaces/iapiclient.md#gettransactionstoapprove)*

*Defined in [client/apiClient.ts:153](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L153)*



Tip selection which returns trunkTransaction and branchTransaction. The input value is depth, which basically determines how many bundles to go back to for finding the transactions to approve. The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IGetTransactionsToApproveRequest](../interfaces/igettransactionstoapproverequest.md)   |  The getTransactionsToApprove request object. |





**Returns:** `Promise`.<[IGetTransactionsToApproveResponse](../interfaces/igettransactionstoapproveresponse.md)>
Promise which resolves to the getTransactionsToApprove response object or rejects with error.






___

<a id="gettrytes"></a>

###  getTrytes

► **getTrytes**(request: *[IGetTrytesRequest](../interfaces/igettrytesrequest.md)*): `Promise`.<[IGetTrytesResponse](../interfaces/igettrytesresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[getTrytes](../interfaces/iapiclient.md#gettrytes)*

*Defined in [client/apiClient.ts:120](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L120)*



Returns the raw transaction data (trytes) of a specific transaction. These trytes can then be easily converted into the actual transaction object.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IGetTrytesRequest](../interfaces/igettrytesrequest.md)   |  - |





**Returns:** `Promise`.<[IGetTrytesResponse](../interfaces/igettrytesresponse.md)>
Promise which resolves to the findTransactions response object or rejects with error.






___

<a id="interruptattachingtotangle"></a>

###  interruptAttachingToTangle

► **interruptAttachingToTangle**(): `Promise`.<`void`>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[interruptAttachingToTangle](../interfaces/iapiclient.md#interruptattachingtotangle)*

*Defined in [client/apiClient.ts:172](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L172)*



Interrupts and completely aborts the attachToTangle process




**Returns:** `Promise`.<`void`>
Promise which resolves with empty response object or rejects with error.






___

<a id="removeneighbors"></a>

###  removeNeighbors

► **removeNeighbors**(request: *[IRemoveNeighborsRequest](../interfaces/iremoveneighborsrequest.md)*): `Promise`.<[IRemoveNeighborsResponse](../interfaces/iremoveneighborsresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[removeNeighbors](../interfaces/iapiclient.md#removeneighbors)*

*Defined in [client/apiClient.ts:92](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L92)*



Removes a list of neighbors from your node. This is only temporary, and if you have your neighbors added via the command line, they will be retained after you restart your node.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IRemoveNeighborsRequest](../interfaces/iremoveneighborsrequest.md)   |  - |





**Returns:** `Promise`.<[IRemoveNeighborsResponse](../interfaces/iremoveneighborsresponse.md)>
Promise which resolves to the removeNeighbors response object or rejects with error.






___

<a id="storetransactions"></a>

###  storeTransactions

► **storeTransactions**(request: *[IStoreTransactionsRequest](../interfaces/istoretransactionsrequest.md)*): `Promise`.<`void`>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[storeTransactions](../interfaces/iapiclient.md#storetransactions)*

*Defined in [client/apiClient.ts:190](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L190)*



Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IStoreTransactionsRequest](../interfaces/istoretransactionsrequest.md)   |  The storeTransactions request object. |





**Returns:** `Promise`.<`void`>
Promise which resolves with empty response object or rejects with error.






___

<a id="wereaddressesspentfrom"></a>

###  wereAddressesSpentFrom

► **wereAddressesSpentFrom**(request: *[IWereAddressesSpentFromRequest](../interfaces/iwereaddressesspentfromrequest.md)*): `Promise`.<[IWereAddressesSpentFromResponse](../interfaces/iwereaddressesspentfromresponse.md)>



*Implementation of [IApiClient](../interfaces/iapiclient.md).[wereAddressesSpentFrom](../interfaces/iapiclient.md#wereaddressesspentfrom)*

*Defined in [client/apiClient.ts:217](https://github.com/iotaeco/iota-pico-api/blob/fa909a6/src/client/apiClient.ts#L217)*



Have the requested addresses been spent from already.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IWereAddressesSpentFromRequest](../interfaces/iwereaddressesspentfromrequest.md)   |  The wereAddressesSpentFrom request object. |





**Returns:** `Promise`.<[IWereAddressesSpentFromResponse](../interfaces/iwereaddressesspentfromresponse.md)>
Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.






___


