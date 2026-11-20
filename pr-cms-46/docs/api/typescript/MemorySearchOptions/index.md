Defined in: [src/memory/types.ts:171](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/memory/types.ts#L171)

Options for [MemoryManager.search](/harness-sdk/pr-cms-46/docs/api/typescript/MemoryManager/index.md#search).

Extends the store primitive [SearchOptions](/harness-sdk/pr-cms-46/docs/api/typescript/SearchOptions/index.md) with manager-level store routing.

## Extends

-   [`SearchOptions`](/harness-sdk/pr-cms-46/docs/api/typescript/SearchOptions/index.md)

## Properties

### maxSearchResults?

```ts
maxSearchResults?: number;
```

Defined in: [src/memory/types.ts:34](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/memory/types.ts#L34)

Maximum number of results to return from this store.

#### Inherited from

[`SearchOptions`](/harness-sdk/pr-cms-46/docs/api/typescript/SearchOptions/index.md).[`maxSearchResults`](/harness-sdk/pr-cms-46/docs/api/typescript/SearchOptions/index.md#maxsearchresults)

---

### stores?

```ts
stores?: string[];
```

Defined in: [src/memory/types.ts:173](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/memory/types.ts#L173)

Filter to specific stores by name. Omit to search all.