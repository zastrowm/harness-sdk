Defined in: [src/types/messages.ts:413](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L413)

Tool use content block.

## Implements

-   [`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md)
-   `JSONSerializable`<{ `toolUse`: [`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md); }>

## Constructors

### Constructor

```ts
new ToolUseBlock(data): ToolUseBlock;
```

Defined in: [src/types/messages.ts:441](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L441)

#### Parameters

| Parameter | Type |
| --- | --- |
| `data` | [`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md) |

#### Returns

`ToolUseBlock`

## Properties

### type

```ts
readonly type: "toolUseBlock";
```

Defined in: [src/types/messages.ts:417](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L417)

Discriminator for tool use content.

---

### name

```ts
readonly name: string;
```

Defined in: [src/types/messages.ts:422](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L422)

The name of the tool to execute.

#### Implementation of

[`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md).[`name`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md#name)

---

### toolUseId

```ts
readonly toolUseId: string;
```

Defined in: [src/types/messages.ts:427](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L427)

Unique identifier for this tool use instance.

#### Implementation of

[`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md).[`toolUseId`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md#tooluseid)

---

### input

```ts
readonly input: JSONValue;
```

Defined in: [src/types/messages.ts:433](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L433)

The input parameters for the tool. This can be any JSON-serializable value.

#### Implementation of

[`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md).[`input`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md#input)

---

### reasoningSignature?

```ts
readonly reasoningSignature?: string;
```

Defined in: [src/types/messages.ts:439](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L439)

Reasoning signature from thinking models (e.g., Gemini). Must be preserved and sent back to the model for multi-turn tool use.

#### Implementation of

[`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md).[`reasoningSignature`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md#reasoningsignature)

## Methods

### toJSON()

```ts
toJSON(): {
  toolUse: ToolUseBlockData;
};
```

Defined in: [src/types/messages.ts:454](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L454)

Serializes the ToolUseBlock to a JSON-compatible ContentBlockData object. Called automatically by JSON.stringify().

#### Returns

```ts
{
  toolUse: ToolUseBlockData;
}
```

| Name | Type | Defined in |
| --- | --- | --- |
| `toolUse` | [`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md) | [src/types/messages.ts:454](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L454) |

#### Implementation of

`JSONSerializable.toJSON`

---

### fromJSON()

```ts
static fromJSON(data): ToolUseBlock;
```

Defined in: [src/types/messages.ts:471](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/types/messages.ts#L471)

Creates a ToolUseBlock instance from its wrapped data format.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `data` | { `toolUse`: [`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md); } | Wrapped ToolUseBlockData to deserialize |
| `data.toolUse` | [`ToolUseBlockData`](/harness-sdk/pr-cms-48/docs/api/typescript/ToolUseBlockData/index.md) | \- |

#### Returns

`ToolUseBlock`

ToolUseBlock instance