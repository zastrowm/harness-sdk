Defined in: [src/hooks/events.ts:98](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/hooks/events.ts#L98)

Base class for events that can be subscribed to via the hook system. Only events extending this class are dispatched to [HookRegistry](/harness-sdk/pr-cms-46/docs/api/typescript/HookRegistry/index.md) callbacks. All current events extend this class. [StreamEvent](/harness-sdk/pr-cms-46/docs/api/typescript/StreamEvent/index.md) exists as the base for potential future stream-only events that should not be hookable.

## Extends

-   [`StreamEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/StreamEvent/index.md)

## Extended by

-   [`InitializedEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/InitializedEvent/index.md)
-   [`BeforeInvocationEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/BeforeInvocationEvent/index.md)
-   [`AfterInvocationEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/AfterInvocationEvent/index.md)
-   [`MessageAddedEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/MessageAddedEvent/index.md)
-   [`BeforeToolCallEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/BeforeToolCallEvent/index.md)
-   [`AfterToolCallEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/AfterToolCallEvent/index.md)
-   [`BeforeModelCallEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/BeforeModelCallEvent/index.md)
-   [`AfterModelCallEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/AfterModelCallEvent/index.md)
-   [`BeforeToolsEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/BeforeToolsEvent/index.md)
-   [`AfterToolsEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/AfterToolsEvent/index.md)
-   [`ContentBlockEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/ContentBlockEvent/index.md)
-   [`ModelMessageEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/ModelMessageEvent/index.md)
-   [`ToolResultEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/ToolResultEvent/index.md)
-   [`ToolStreamUpdateEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/ToolStreamUpdateEvent/index.md)
-   [`AgentResultEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/AgentResultEvent/index.md)
-   [`InterruptEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/InterruptEvent/index.md)
-   [`ModelStreamUpdateEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/ModelStreamUpdateEvent/index.md)

## Constructors

### Constructor

```ts
new HookableEvent(data?): HookableEvent;
```

Defined in: [src/hooks/events.ts:102](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/hooks/events.ts#L102)

#### Parameters

| Parameter | Type |
| --- | --- |
| `data?` | `HookableEventData` |

#### Returns

`HookableEvent`

#### Overrides

[`StreamEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/StreamEvent/index.md).[`constructor`](/harness-sdk/pr-cms-46/docs/api/typescript/StreamEvent/index.md#constructor)

## Properties

### invocationContext?

```ts
readonly invocationContext?: InvocationContext;
```

Defined in: [src/hooks/events.ts:100](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/hooks/events.ts#L100)

The request this event belongs to (`undefined` outside one); pass it to [InvokeOptions.invocationContext](/harness-sdk/pr-cms-46/docs/api/typescript/InvokeOptions/index.md#invocationcontext) to join it.