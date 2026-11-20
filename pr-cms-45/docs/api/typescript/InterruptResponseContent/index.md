Defined in: [src/types/interrupt.ts:82](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/interrupt.ts#L82)

Content block containing a user response to an interrupt. Used when invoking an agent to resume from an interrupted state.

## Example

```typescript
const content = new InterruptResponseContent({
  interruptId: interrupt.id,
  response: 'approved',
})
```

## Implements

-   [`InterruptResponseContentData`](/harness-sdk/pr-cms-45/docs/api/typescript/InterruptResponseContentData/index.md)
-   `JSONSerializable`<[`InterruptResponseContentData`](/harness-sdk/pr-cms-45/docs/api/typescript/InterruptResponseContentData/index.md)\>

## Constructors

### Constructor

```ts
new InterruptResponseContent(data): InterruptResponseContent;
```

Defined in: [src/types/interrupt.ts:95](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/interrupt.ts#L95)

#### Parameters

| Parameter | Type |
| --- | --- |
| `data` | [`InterruptResponse`](/harness-sdk/pr-cms-45/docs/api/typescript/InterruptResponse/index.md) |

#### Returns

`InterruptResponseContent`

## Properties

### type

```ts
readonly type: "interruptResponseContent";
```

Defined in: [src/types/interrupt.ts:88](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/interrupt.ts#L88)

Discriminator for interrupt response content blocks.

---

### interruptResponse

```ts
readonly interruptResponse: InterruptResponse;
```

Defined in: [src/types/interrupt.ts:93](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/interrupt.ts#L93)

The interrupt response data.

#### Implementation of

[`InterruptResponseContentData`](/harness-sdk/pr-cms-45/docs/api/typescript/InterruptResponseContentData/index.md).[`interruptResponse`](/harness-sdk/pr-cms-45/docs/api/typescript/InterruptResponseContentData/index.md#interruptresponse)

## Methods

### toJSON()

```ts
toJSON(): InterruptResponseContentData;
```

Defined in: [src/types/interrupt.ts:103](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/interrupt.ts#L103)

Serializes to a JSON-compatible [InterruptResponseContentData](/harness-sdk/pr-cms-45/docs/api/typescript/InterruptResponseContentData/index.md) object. Called automatically by `JSON.stringify()`.

#### Returns

[`InterruptResponseContentData`](/harness-sdk/pr-cms-45/docs/api/typescript/InterruptResponseContentData/index.md)

#### Implementation of

`JSONSerializable.toJSON`

---

### fromJSON()

```ts
static fromJSON(data): InterruptResponseContent;
```

Defined in: [src/types/interrupt.ts:113](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/interrupt.ts#L113)

Creates an InterruptResponseContent instance from data.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `data` | [`InterruptResponseContentData`](/harness-sdk/pr-cms-45/docs/api/typescript/InterruptResponseContentData/index.md) | Data to deserialize |

#### Returns

`InterruptResponseContent`

InterruptResponseContent instance