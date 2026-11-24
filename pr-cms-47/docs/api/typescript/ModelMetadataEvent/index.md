Defined in: [src/models/streaming.ts:257](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L257)

Event containing metadata about the stream. Includes usage statistics, performance metrics, and trace information.

## Implements

-   [`ModelMetadataEventData`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md)

## Constructors

### Constructor

```ts
new ModelMetadataEvent(data): ModelMetadataEvent;
```

Defined in: [src/models/streaming.ts:278](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L278)

#### Parameters

| Parameter | Type |
| --- | --- |
| `data` | [`ModelMetadataEventData`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md) |

#### Returns

`ModelMetadataEvent`

## Properties

### type

```ts
readonly type: "modelMetadataEvent";
```

Defined in: [src/models/streaming.ts:261](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L261)

Discriminator for metadata events.

#### Implementation of

[`ModelMetadataEventData`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md).[`type`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md#type)

---

### usage?

```ts
readonly usage?: Usage;
```

Defined in: [src/models/streaming.ts:266](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L266)

Token usage information.

#### Implementation of

[`ModelMetadataEventData`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md).[`usage`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md#usage)

---

### metrics?

```ts
readonly metrics?: Metrics;
```

Defined in: [src/models/streaming.ts:271](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L271)

Performance metrics.

#### Implementation of

[`ModelMetadataEventData`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md).[`metrics`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md#metrics)

---

### trace?

```ts
readonly trace?: unknown;
```

Defined in: [src/models/streaming.ts:276](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L276)

Trace information for observability.

#### Implementation of

[`ModelMetadataEventData`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md).[`trace`](/harness-sdk/pr-cms-47/docs/api/typescript/ModelMetadataEventData/index.md#trace)