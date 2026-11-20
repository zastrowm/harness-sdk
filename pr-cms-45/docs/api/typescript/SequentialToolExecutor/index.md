Defined in: [src/tools/executors/sequential.ts:23](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/tools/executors/sequential.ts#L23)

Executes tool calls one at a time.

## Example

```typescript
import { Agent, SequentialToolExecutor } from '@strands-agents/sdk'

// The string shorthand keeps imports minimal.
const agent = new Agent({ toolExecutor: 'sequential' })

// Passing an instance is equivalent if you prefer to be explicit.
const explicitAgent = new Agent({ toolExecutor: new SequentialToolExecutor() })
```

## Extends

-   `ToolExecutor`

## Constructors

### Constructor

```ts
new SequentialToolExecutor(): SequentialToolExecutor;
```

#### Returns

`SequentialToolExecutor`

#### Inherited from

`ToolExecutor.constructor`

## Methods

### executeBackground()

```ts
executeBackground(
   options,
   toolUse,
   tool,
   invocationState,
   onEvent
): Promise<ToolResultBlock>;
```

Defined in: [src/tools/executors/executor.ts:84](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/tools/executors/executor.ts#L84)

#### Parameters

| Parameter | Type |
| --- | --- |
| `options` | `ToolExecutorOptions` |
| `toolUse` | [`ToolUseData`](/harness-sdk/pr-cms-45/docs/api/typescript/ToolUseData/index.md) |
| `tool` | [`Tool`](/harness-sdk/pr-cms-45/docs/api/typescript/Tool/index.md) |
| `invocationState` | [`InvocationState`](/harness-sdk/pr-cms-45/docs/api/typescript/InvocationState/index.md) |
| `onEvent` | (`event`) => `Promise`<`unknown`\> |

#### Returns

`Promise`<[`ToolResultBlock`](/harness-sdk/pr-cms-45/docs/api/typescript/ToolResultBlock/index.md)\>

#### Inherited from

`ToolExecutor.executeBackground`

---

### executeTool()

```ts
protected executeTool(
   options,
   toolUseBlock,
   invocationState
): AsyncGenerator<AgentStreamEvent, ToolResultBlock, undefined>;
```

Defined in: [src/tools/executors/executor.ts:110](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/tools/executors/executor.ts#L110)

#### Parameters

| Parameter | Type |
| --- | --- |
| `options` | `ToolExecutorOptions` |
| `toolUseBlock` | [`ToolUseBlock`](/harness-sdk/pr-cms-45/docs/api/typescript/ToolUseBlock/index.md) |
| `invocationState` | [`InvocationState`](/harness-sdk/pr-cms-45/docs/api/typescript/InvocationState/index.md) |

#### Returns

`AsyncGenerator`<[`AgentStreamEvent`](/harness-sdk/pr-cms-45/docs/api/typescript/AgentStreamEvent/index.md), [`ToolResultBlock`](/harness-sdk/pr-cms-45/docs/api/typescript/ToolResultBlock/index.md), `undefined`\>

#### Inherited from

`ToolExecutor.executeTool`

---

### \_storePendingToolExecution()

```ts
protected _storePendingToolExecution(
   options,
   assistantMessage,
   completedToolResults
): void;
```

Defined in: [src/tools/executors/executor.ts:256](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/tools/executors/executor.ts#L256)

#### Parameters

| Parameter | Type |
| --- | --- |
| `options` | `ToolExecutorOptions` |
| `assistantMessage` | [`Message`](/harness-sdk/pr-cms-45/docs/api/typescript/Message/index.md) |
| `completedToolResults` | `ReadonlyMap`<`string`, [`ToolResultBlock`](/harness-sdk/pr-cms-45/docs/api/typescript/ToolResultBlock/index.md)\> |

#### Returns

`void`

#### Inherited from

`ToolExecutor._storePendingToolExecution`