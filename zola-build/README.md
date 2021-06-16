# Course Site Template based on Hyde and Zola

Static site template based on [Zola](https://github.com/getzola/zola) and [getzola/Hyde](https://github.com/getzola/hyde).
Zola is a simple and fast static site generator that has no dependencies (single binary).

## Edit Content

- Sidebar settings: `config.toml`
  - Add new courses here
- Home: `content/_index.md`



## Build Site

This repo uses GitHub Actions to build static site automatically on GitHub. If you want to build the site locally:

1. Download [Zola's binary](https://github.com/getzola/zola/releases/tag/v0.13.0)
2. Put it in the project's root
3. Run
   
   ```sh
   ./zola build
   ```
