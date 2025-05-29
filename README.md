# Filesystem MCP Server with `.mcpignore` support

**Protect your most sensitive data by using this data security first filesystem.** This node.js server builds on top of [Filesystem MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) and lets you control which files your MCP Client can access using `.mcpignore` file. 

## Features

- Control MCP client's access to your filesystem based on `.mcpignore`
- Read/write files
- Create/list/delete directories
- Move files/directories
- Search files
- Get file metadata 

Note: Create an `.mcpignore` file for each direcoties specified via `args`

## Configuring `.mcpignore`

The `.mcpignore` file uses the same patterns as `.gitignore`

### Patterns Examples

```
# Ignore specific file `.env`
.env

# Ignore all files with a `.safetensor` extension
*.safetensors

# Ignore specific directory, 'assets/logos' and its files
assets/logos/
```

## API

For details, refer to [Filesystem MCP Server API Spec](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem#api)

### Tool behavior with ignore paths

| Tool                     | Behavior | 
| ------------------------ | :------------------------: |
| read_file                | Block |
| read_multiple_files      | Block |
| write_file               | Block |
| edit_file                | Block |
| create_directory         | Block |
| list_directory           | Block |
| directory_tree           | Allow |
| move_file                | Block |
| search_files             | Allow |
| get_file_info            | Block |
| list_allowed_directories | N/A   |

Note: `directory_tree` and `search_files` are allowed only to retrieve the file names

## Usage with MCP Clients

- **Claude**: Add this to your `claude_desktop_config.json`
- **Cline**: Add this to your `cline_mcp_settings.json`
- **Cursor**: Add this to your `mcp.json`

Note: `.mcpingore` applies to the list of allowed directories that you provide as `args`

### NPX

```json
{
    "mcpServers": {
        "mcpignore-filesystem": {
            "command": "npx",
            "args": [
                "-y",
                "@cyberhaven/mcpignore-filesystem",
                "/Users/<username>/Desktop",
                "/path/to/other/allowed/dir"
            ]
        }
    }
}
```
## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on contributing to this repository.

## Security

See [SECURITY.md](SECURITY.md) for information on security.