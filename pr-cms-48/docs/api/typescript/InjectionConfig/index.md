Defined in: [src/injection/types.ts:35](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/injection/types.ts#L35)

Configuration common to every injection consumer: when to inject. What text to inject is a consumer concern, added by the interfaces that extend this one (e.g. [MemoryInjectionConfig](/harness-sdk/pr-cms-48/docs/api/typescript/MemoryInjectionConfig/index.md)).

## Extended by

-   [`MemoryInjectionConfig`](/harness-sdk/pr-cms-48/docs/api/typescript/MemoryInjectionConfig/index.md)

## Properties

### trigger?

```ts
trigger?:
  | InjectionTrigger
  | ((context) => boolean);
```

Defined in: [src/injection/types.ts:43](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/injection/types.ts#L43)

When injection runs. An [InjectionTrigger](/harness-sdk/pr-cms-48/docs/api/typescript/InjectionTrigger/index.md) name selects a built-in policy; a predicate is the escape hatch — it receives the [InjectionContext](/harness-sdk/pr-cms-48/docs/api/typescript/InjectionContext/index.md) and returns whether to inject this call. A predicate that throws fails open (injection is skipped, the model call proceeds).

#### Default Value

```ts
'userTurn'
```