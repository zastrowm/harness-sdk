```ts
type ToolList = (
  | Tool
  | McpClient
  | Agent
  | ToolList)[];
```

Defined in: [src/agent/agent.ts:143](https://github.com/strands-agents/harness-sdk/blob/main/strands-ts/src/agent/agent.ts#L143)

Recursive type definition for nested tool arrays. Allows tools to be organized in nested arrays of any depth.

[Agent](/harness-sdk/pr-cms-48/docs/api/typescript/Agent/index.md) instances in the array are automatically wrapped via [Agent.asTool](/harness-sdk/pr-cms-48/docs/api/typescript/Agent/index.md#astool), so they can be passed directly without calling `.asTool()` explicitly.