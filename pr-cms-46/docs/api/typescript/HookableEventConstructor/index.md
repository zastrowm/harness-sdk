```ts
type HookableEventConstructor<T> = new (...args) => T;
```

Defined in: [src/hooks/types.ts:7](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/hooks/types.ts#L7)

Type for a constructor function that creates HookableEvent instances.

## Type Parameters

| Type Parameter | Default type |
| --- | --- |
| `T` *extends* [`HookableEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/HookableEvent/index.md) | [`HookableEvent`](/harness-sdk/pr-cms-46/docs/api/typescript/HookableEvent/index.md) |

## Parameters

| Parameter | Type |
| --- | --- |
| …`args` | `any`\[\] |

## Returns

`T`