[@iota-pico/api](../README.md) > [IApiClient](../interfaces/iapiclient.md)

# Interface: IApiClient

Represents a client for performing communication with a node api.
*__interface__*: 

## Hierarchy

**IApiClient**

## Implemented by

* [ApiClient](../classes/apiclient.md)

## Index

### Methods

* [addNeighbors](iapiclient.md#addneighbors)
* [attachToTangle](iapiclient.md#attachtotangle)
* [broadcastTransactions](iapiclient.md#broadcasttransactions)
* [checkConsistency](iapiclient.md#checkconsistency)
* [findTransactions](iapiclient.md#findtransactions)
* [getBalances](iapiclient.md#getbalances)
* [getInclusionStates](iapiclient.md#getinclusionstates)
* [getMissingTransactions](iapiclient.md#getmissingtransactions)
* [getNeighbors](iapiclient.md#getneighbors)
* [getNodeInfo](iapiclient.md#getnodeinfo)
* [getTips](iapiclient.md#gettips)
* [getTransactionsToApprove](iapiclient.md#gettransactionstoapprove)
* [getTrytes](iapiclient.md#gettrytes)
* [interruptAttachingToTangle](iapiclient.md#interruptattachingtotangle)
* [removeNeighbors](iapiclient.md#removeneighbors)
* [storeTransactions](iapiclient.md#storetransactions)
* [wereAddressesSpentFrom](iapiclient.md#wereaddressesspentfrom)

---

## Methods

<a id="addneighbors"></a>

###  addNeighbors

▸ **addNeighbors**(request: *[IAddNeighborsRequest](iaddneighborsrequest.md)*): `Promise`.<[IAddNeighborsResponse](iaddneighborsresponse.md)>

*Defined in [interfaces/IApiClient.ts:52](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L52)*

Add a list of neighbors to your node. It should be noted that this is only temporary, and the added neighbors will be removed from your set of neighbors after you relaunch IRI.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IAddNeighborsRequest](iaddneighborsrequest.md)   |  - |

**Returns:** `Promise`.<[IAddNeighborsResponse](iaddneighborsresponse.md)>
Promise which resolves to the addNeighbors response object or rejects with error.

___

<a id="attachtotangle"></a>

###  attachToTangle

▸ **attachToTangle**(request: *[IAttachToTangleRequest](iattachtotanglerequest.md)*): `Promise`.<[IAttachToTangleResponse](iattachtotangleresponse.md)>

*Defined in [interfaces/IApiClient.ts:117](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L117)*

Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IAttachToTangleRequest](iattachtotanglerequest.md)   |  The attachToTangle request object. |

**Returns:** `Promise`.<[IAttachToTangleResponse](iattachtotangleresponse.md)>
Promise which resolves to the attachToTangle response object or rejects with error.

___

<a id="broadcasttransactions"></a>

###  broadcastTransactions

▸ **broadcastTransactions**(request: *[IBroadcastTransactionsRequest](ibroadcasttransactionsrequest.md)*): `Promise`.<[ICommonResponse](icommonresponse.md)>

*Defined in [interfaces/IApiClient.ts:130](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L130)*

Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IBroadcastTransactionsRequest](ibroadcasttransactionsrequest.md)   |  The broadcastTransactions request object. |

**Returns:** `Promise`.<[ICommonResponse](icommonresponse.md)>
Promise which resolves with empty response object or rejects with error.

___

<a id="checkconsistency"></a>

###  checkConsistency

▸ **checkConsistency**(request: *[ICheckConsistencyRequest](icheckconsistencyrequest.md)*): `Promise`.<[ICheckConsistencyResponse](icheckconsistencyresponse.md)>

*Defined in [interfaces/IApiClient.ts:151](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L151)*

Check the consistency of tail hashes.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [ICheckConsistencyRequest](icheckconsistencyrequest.md)   |  The checkConsistency request object. |

**Returns:** `Promise`.<[ICheckConsistencyResponse](icheckconsistencyresponse.md)>
Promise which resolves to the checkConsistency response object or rejects with error.

___

<a id="findtransactions"></a>

###  findTransactions

▸ **findTransactions**(request: *[IFindTransactionsRequest](ifindtransactionsrequest.md)*): `Promise`.<[IFindTransactionsResponse](ifindtransactionsresponse.md)>

*Defined in [interfaces/IApiClient.ts:74](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L74)*

Find the transactions which match the specified input and return. All input values are lists, for which a list of return values (transaction hashes), in the same order, is returned for all individual elements. The input fields can either be bundles, addresses, tags or approvees. Using multiple of these input fields returns the intersection of the values.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IFindTransactionsRequest](ifindtransactionsrequest.md)   |  - |

**Returns:** `Promise`.<[IFindTransactionsResponse](ifindtransactionsresponse.md)>
Promise which resolves to the findTransactions response object or rejects with error.

___

<a id="getbalances"></a>

###  getBalances

▸ **getBalances**(request: *[IGetBalancesRequest](igetbalancesrequest.md)*): `Promise`.<[IGetBalancesResponse](igetbalancesresponse.md)>

*Defined in [interfaces/IApiClient.ts:99](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L99)*

Returns the confirmed balance which a list of addresses have at the latest confirmed milestone. In addition to the balances, it also returns the milestone as well as the index with which the confirmed balance was determined. The balances is returned as a list in the same order as the addresses were provided as input.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IGetBalancesRequest](igetbalancesrequest.md)   |  The getBalances request object. |

**Returns:** `Promise`.<[IGetBalancesResponse](igetbalancesresponse.md)>
Promise which resolves to the getBalances response object or rejects with error.

___

<a id="getinclusionstates"></a>

###  getInclusionStates

▸ **getInclusionStates**(request: *[IGetInclusionStatesRequest](igetinclusionstatesrequest.md)*): `Promise`.<[IGetInclusionStatesResponse](igetinclusionstatesresponse.md)>

*Defined in [interfaces/IApiClient.ts:89](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L89)*

Get the inclusion states of a set of transactions. This is for determining if a transaction was accepted and confirmed by the network or not. You can search for multiple tips (and thus, milestones) to get past inclusion states of transactions.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IGetInclusionStatesRequest](igetinclusionstatesrequest.md)   |  - |

**Returns:** `Promise`.<[IGetInclusionStatesResponse](igetinclusionstatesresponse.md)>
Promise which resolves to the getInclusionStates response object or rejects with error.

___

<a id="getmissingtransactions"></a>

###  getMissingTransactions

▸ **getMissingTransactions**(): `Promise`.<[IGetMissingTransactionsResponse](igetmissingtransactionsresponse.md)>

*Defined in [interfaces/IApiClient.ts:144](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L144)*

Get transactions with missing references.

**Returns:** `Promise`.<[IGetMissingTransactionsResponse](igetmissingtransactionsresponse.md)>
Promise which resolves to the getMissingTransactions response object or rejects with error.

___

<a id="getneighbors"></a>

###  getNeighbors

▸ **getNeighbors**(): `Promise`.<[IGetNeighborsResponse](igetneighborsresponse.md)>

*Defined in [interfaces/IApiClient.ts:45](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L45)*

Returns the set of neighbors you are connected with, as well as their activity count. The activity counter is reset after restarting IRI.

**Returns:** `Promise`.<[IGetNeighborsResponse](igetneighborsresponse.md)>
Promise which resolves to the getNeighbors response object or rejects with error.

___

<a id="getnodeinfo"></a>

###  getNodeInfo

▸ **getNodeInfo**(): `Promise`.<[IGetNodeInfoResponse](igetnodeinforesponse.md)>

*Defined in [interfaces/IApiClient.ts:38](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L38)*

Returns information about your node.

**Returns:** `Promise`.<[IGetNodeInfoResponse](igetnodeinforesponse.md)>
Promise which resolves to the getNodeInfo response object or rejects with error.

___

<a id="gettips"></a>

###  getTips

▸ **getTips**(): `Promise`.<[IGetTipsResponse](igettipsresponse.md)>

*Defined in [interfaces/IApiClient.ts:65](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L65)*

Returns the list of tips.

**Returns:** `Promise`.<[IGetTipsResponse](igettipsresponse.md)>
Promise which resolves to the getTips response object or rejects with error.

___

<a id="gettransactionstoapprove"></a>

###  getTransactionsToApprove

▸ **getTransactionsToApprove**(request: *[IGetTransactionsToApproveRequest](igettransactionstoapproverequest.md)*): `Promise`.<[IGetTransactionsToApproveResponse](igettransactionstoapproveresponse.md)>

*Defined in [interfaces/IApiClient.ts:108](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L108)*

Tip selection which returns trunkTransaction and branchTransaction. The input value is depth, which basically determines how many bundles to go back to for finding the transactions to approve. The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IGetTransactionsToApproveRequest](igettransactionstoapproverequest.md)   |  The getTransactionsToApprove request object. |

**Returns:** `Promise`.<[IGetTransactionsToApproveResponse](igettransactionstoapproveresponse.md)>
Promise which resolves to the getTransactionsToApprove response object or rejects with error.

___

<a id="gettrytes"></a>

###  getTrytes

▸ **getTrytes**(request: *[IGetTrytesRequest](igettrytesrequest.md)*): `Promise`.<[IGetTrytesResponse](igettrytesresponse.md)>

*Defined in [interfaces/IApiClient.ts:81](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L81)*

Returns the raw transaction data (trytes) of a specific transaction. These trytes can then be easily converted into the actual transaction object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IGetTrytesRequest](igettrytesrequest.md)   |  - |

**Returns:** `Promise`.<[IGetTrytesResponse](igettrytesresponse.md)>
Promise which resolves to the getTrytes response object or rejects with error.

___

<a id="interruptattachingtotangle"></a>

###  interruptAttachingToTangle

▸ **interruptAttachingToTangle**(): `Promise`.<[ICommonResponse](icommonresponse.md)>

*Defined in [interfaces/IApiClient.ts:123](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L123)*

Interrupts and completely aborts the attachToTangle process

**Returns:** `Promise`.<[ICommonResponse](icommonresponse.md)>
Promise which resolves with empty response object or rejects with error.

___

<a id="removeneighbors"></a>

###  removeNeighbors

▸ **removeNeighbors**(request: *[IRemoveNeighborsRequest](iremoveneighborsrequest.md)*): `Promise`.<[IRemoveNeighborsResponse](iremoveneighborsresponse.md)>

*Defined in [interfaces/IApiClient.ts:59](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L59)*

Removes a list of neighbors from your node. This is only temporary, and if you have your neighbors added via the command line, they will be retained after you restart your node.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IRemoveNeighborsRequest](iremoveneighborsrequest.md)   |  - |

**Returns:** `Promise`.<[IRemoveNeighborsResponse](iremoveneighborsresponse.md)>
Promise which resolves to the removeNeighbors response object or rejects with error.

___

<a id="storetransactions"></a>

###  storeTransactions

▸ **storeTransactions**(request: *[IStoreTransactionsRequest](istoretransactionsrequest.md)*): `Promise`.<[ICommonResponse](icommonresponse.md)>

*Defined in [interfaces/IApiClient.ts:137](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L137)*

Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IStoreTransactionsRequest](istoretransactionsrequest.md)   |  The storeTransactions request object. |

**Returns:** `Promise`.<[ICommonResponse](icommonresponse.md)>
Promise which resolves with empty response object or rejects with error.

___

<a id="wereaddressesspentfrom"></a>

###  wereAddressesSpentFrom

▸ **wereAddressesSpentFrom**(request: *[IWereAddressesSpentFromRequest](iwereaddressesspentfromrequest.md)*): `Promise`.<[IWereAddressesSpentFromResponse](iwereaddressesspentfromresponse.md)>

*Defined in [interfaces/IApiClient.ts:158](https://github.com/iota-pico/api/blob/98be397/src/interfaces/IApiClient.ts#L158)*

Have the requested addresses been spent from already.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [IWereAddressesSpentFromRequest](iwereaddressesspentfromrequest.md)   |  The wereAddressesSpentFrom request object. |

**Returns:** `Promise`.<[IWereAddressesSpentFromResponse](iwereaddressesspentfromresponse.md)>
Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.

___

