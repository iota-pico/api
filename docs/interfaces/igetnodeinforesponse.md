[@iota-pico/api](../README.md) > [IGetNodeInfoResponse](../interfaces/igetnodeinforesponse.md)

# Interface: IGetNodeInfoResponse

Represents the response from getNodeInfo command.
*__interface__*: 

## Hierarchy

 [ICommonResponse](icommonresponse.md)

**↳ IGetNodeInfoResponse**

## Index

### Properties

* [appName](igetnodeinforesponse.md#appname)
* [appVersion](igetnodeinforesponse.md#appversion)
* [duration](igetnodeinforesponse.md#duration)
* [jreAvailableProcessors](igetnodeinforesponse.md#jreavailableprocessors)
* [jreFreeMemory](igetnodeinforesponse.md#jrefreememory)
* [jreMaxMemory](igetnodeinforesponse.md#jremaxmemory)
* [jreTotalMemory](igetnodeinforesponse.md#jretotalmemory)
* [jreVersion](igetnodeinforesponse.md#jreversion)
* [latestMilestone](igetnodeinforesponse.md#latestmilestone)
* [latestMilestoneIndex](igetnodeinforesponse.md#latestmilestoneindex)
* [latestSolidSubtangleMilestone](igetnodeinforesponse.md#latestsolidsubtanglemilestone)
* [latestSolidSubtangleMilestoneIndex](igetnodeinforesponse.md#latestsolidsubtanglemilestoneindex)
* [neighbors](igetnodeinforesponse.md#neighbors)
* [packetsQueueSize](igetnodeinforesponse.md#packetsqueuesize)
* [time](igetnodeinforesponse.md#time)
* [tips](igetnodeinforesponse.md#tips)
* [transactionsToRequest](igetnodeinforesponse.md#transactionstorequest)

---

## Properties

<a id="appname"></a>

###  appName

**●  appName**:  *`string`* 

*Defined in [models/IGetNodeInfoResponse.ts:11](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L11)*

Name of the IOTA software you're currently using (IRI stands for Initial Reference Implementation).

___

<a id="appversion"></a>

###  appVersion

**●  appVersion**:  *`string`* 

*Defined in [models/IGetNodeInfoResponse.ts:15](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L15)*

The version of the IOTA software you're currently running.

___

<a id="duration"></a>

###  duration

**●  duration**:  *`number`* 

*Inherited from [ICommonResponse](icommonresponse.md).[duration](icommonresponse.md#duration)*

*Defined in [models/ICommonResponse.ts:9](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/ICommonResponse.ts#L9)*

The duration of the request.

___

<a id="jreavailableprocessors"></a>

###  jreAvailableProcessors

**●  jreAvailableProcessors**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:19](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L19)*

Available cores on your machine for JRE.

___

<a id="jrefreememory"></a>

###  jreFreeMemory

**●  jreFreeMemory**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:27](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L27)*

Returns the amount of free memory in the Java Virtual Machine.

___

<a id="jremaxmemory"></a>

###  jreMaxMemory

**●  jreMaxMemory**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:31](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L31)*

Returns the maximum amount of memory that the Java virtual machine will attempt to use.

___

<a id="jretotalmemory"></a>

###  jreTotalMemory

**●  jreTotalMemory**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:35](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L35)*

Returns the total amount of memory in the Java virtual machine.

___

<a id="jreversion"></a>

###  jreVersion

**●  jreVersion**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:23](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L23)*

The version of the Java Virtual Machine.

___

<a id="latestmilestone"></a>

###  latestMilestone

**●  latestMilestone**:  *`string`* 

*Defined in [models/IGetNodeInfoResponse.ts:39](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L39)*

Latest milestone that was signed off by the coordinator.

___

<a id="latestmilestoneindex"></a>

###  latestMilestoneIndex

**●  latestMilestoneIndex**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:43](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L43)*

Index of the latest milestone.

___

<a id="latestsolidsubtanglemilestone"></a>

###  latestSolidSubtangleMilestone

**●  latestSolidSubtangleMilestone**:  *`string`* 

*Defined in [models/IGetNodeInfoResponse.ts:49](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L49)*

The latest milestone which is solid and is used for sending transactions. For a milestone to become solid your local node must basically approve the subtangle of coordinator-approved transactions, and have a consistent view of all referenced transactions.

___

<a id="latestsolidsubtanglemilestoneindex"></a>

###  latestSolidSubtangleMilestoneIndex

**●  latestSolidSubtangleMilestoneIndex**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:53](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L53)*

Index of the latest solid subtangle.

___

<a id="neighbors"></a>

###  neighbors

**●  neighbors**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:57](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L57)*

Number of neighbors you are directly connected with.

___

<a id="packetsqueuesize"></a>

###  packetsQueueSize

**●  packetsQueueSize**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:61](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L61)*

Packets which are currently queued up.

___

<a id="time"></a>

###  time

**●  time**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:65](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L65)*

Current UNIX timestamp.

___

<a id="tips"></a>

###  tips

**●  tips**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:69](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L69)*

Number of tips in the network.

___

<a id="transactionstorequest"></a>

###  transactionsToRequest

**●  transactionsToRequest**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:73](https://github.com/iotaeco/iota-pico-api/blob/6fd129f/src/models/IGetNodeInfoResponse.ts#L73)*

Transactions to request during syncing process.

___

