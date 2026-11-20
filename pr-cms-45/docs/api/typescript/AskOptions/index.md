Defined in: [src/decisions/types.ts:25](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/decisions/types.ts#L25)

Per-call options for [DecisionModel.ask](/harness-sdk/pr-cms-45/docs/api/typescript/DecisionModel/index.md#ask).

## Extends

-   [`DecisionCallOptions`](/harness-sdk/pr-cms-45/docs/api/typescript/DecisionCallOptions/index.md)

## Properties

### cancelSignal?

```ts
cancelSignal?: AbortSignal;
```

Defined in: [src/decisions/types.ts:21](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/decisions/types.ts#L21)

Aborts the underlying decision call when signalled. Built-in implementations honor it; the provider decides how promptly the call stops.

#### Inherited from

[`DecisionCallOptions`](/harness-sdk/pr-cms-45/docs/api/typescript/DecisionCallOptions/index.md).[`cancelSignal`](/harness-sdk/pr-cms-45/docs/api/typescript/DecisionCallOptions/index.md#cancelsignal)

---

### invocationContext?

```ts
invocationContext?: InvocationContext;
```

Defined in: [src/decisions/types.ts:27](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/decisions/types.ts#L27)

The request to add this decision’s token usage to, such as a hook event’s or tool context’s `invocationContext`; the request’s limits don’t apply to the decision.