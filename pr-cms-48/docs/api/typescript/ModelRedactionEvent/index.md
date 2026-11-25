Defined in: [src/models/streaming.ts:344](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L344)

Event emitted when guardrails block content and trigger redaction.

## Implements

-   [`ModelRedactionEventData`](/harness-sdk/pr-cms-48/docs/api/typescript/ModelRedactionEventData/index.md)

## Constructors

### Constructor

```ts
new ModelRedactionEvent(data): ModelRedactionEvent;
```

Defined in: [src/models/streaming.ts:360](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L360)

#### Parameters

| Parameter | Type |
| --- | --- |
| `data` | [`ModelRedactionEventData`](/harness-sdk/pr-cms-48/docs/api/typescript/ModelRedactionEventData/index.md) |

#### Returns

`ModelRedactionEvent`

## Properties

### type

```ts
readonly type: "modelRedactionEvent";
```

Defined in: [src/models/streaming.ts:348](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L348)

Discriminator for redact events.

#### Implementation of

[`ModelRedactionEventData`](/harness-sdk/pr-cms-48/docs/api/typescript/ModelRedactionEventData/index.md).[`type`](/harness-sdk/pr-cms-48/docs/api/typescript/ModelRedactionEventData/index.md#type)

---

### inputRedaction?

```ts
readonly inputRedaction?: RedactInputContent;
```

Defined in: [src/models/streaming.ts:353](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L353)

Input redaction information (when input is blocked).

#### Implementation of

[`ModelRedactionEventData`](/harness-sdk/pr-cms-48/docs/api/typescript/ModelRedactionEventData/index.md).[`inputRedaction`](/harness-sdk/pr-cms-48/docs/api/typescript/ModelRedactionEventData/index.md#inputredaction)

---

### outputRedaction?

```ts
readonly outputRedaction?: RedactOutputContent;
```

Defined in: [src/models/streaming.ts:358](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/models/streaming.ts#L358)

Output redaction information (when output is blocked).

#### Implementation of

[`ModelRedactionEventData`](/harness-sdk/pr-cms-48/docs/api/typescript/ModelRedactionEventData/index.md).[`outputRedaction`](/harness-sdk/pr-cms-48/docs/api/typescript/ModelRedactionEventData/index.md#outputredaction)