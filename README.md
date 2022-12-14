# obsidian-alpinejs

Obsidian plugin that imports the [Alpine.js](https://alpinejs.dev/) node [package](https://www.npmjs.com/package/alpinejs).

## notice


> [!warning] NOTICE
> 
> This plugin grants access to Obsidian's API and all of it's methods. Misuse (i.e. ignorance of the effects of running certain commands) could have detrimental effects, including, but not limited to, the loss of data. THIS PLUGIN IS FOR ADVANCED USE ONLY. 
> 


## config

The plugin (`onload`) sets the `prefix` for Alpine's custom attribute.

`Alpine.prefix("data-x-")`

e.g. `<span data-x-data="{}">`

## example

```html
<div data-x-data="{ open: false }">
	<button data-x-on:click="open = true">Expand</button>
	<div data-x-show="open">lorem ipsum dolor sit amet ...</div>
</div>
```

![](assets/CleanShot–{Obsidian}-(example%20-%20obsidian-alpinejs%20-%20Obsidian%20v1.1.3)–[2022-12-13-23.26.25].gif)

## plugin installation

### clone this repo

```bash
cd /path/to/your/vault/.obsidian/plugins
git clone https://github.com/gapmiss/obsidian-alpinejs.git
cd obsidian-alpinejs
```

### install packages and run

```bash
npm i
npm run dev
```

### enable plugin

1. open `Settings` → `Community plugins`
2. enable the `Alpine.js` plugin.

## caveats

1. Javascript errors after adding new or editing current `Alpine.js` HTML blocks
	- solution: run command `reload app without saving`
	- or: close (`⇧` + `⌘` + `W`) and re-open vault window

## examples

#### accessing Obsidian's API

```html
<button data-x-data="{ label: 'I ❤️ Alpine' }"
	data-x-text="label"
	data-x-on:click="new Notice('I ❤️ Alpine', 3377);
		var a = this.app;
		console.log(a);
		console.log(a.workspace.containerEl);
		console.log(a.vault.getName());
		var vault = a.vault.getName();
		new Notice('Vault name: ' + vault, 0);
		var path = a.workspace.getActiveFile().path;
		var root = a.vault.getRoot();
		console.log(path);
		console.log(root);
		new Notice('Note path: ' + path, 3377);">
</button>
```

![](assets/CleanShot–{Obsidian}-(example%20-%20obsidian-alpinejs%20-%20Obsidian%20v1.1.3)–[2022-12-13-23.37.50].gif)

#### theme mode toggle

```html
<button data-x-data="{ state: false, label: (this.app.vault.getConfig('theme') == 'moonstone') ? 'dark' : 'light' }"
	data-x-init="console.log('init');"
	data-x-on:click="
		state = !state;
		this.app.changeTheme( (this.app.vault.getConfig('theme') == 'moonstone') ? 'obsidian' : 'moonstone' );"
	data-x-bind:class="{ 'dark': state }"
	id="theme-toggler">
</button>
```

![](assets/CleanShot–{Obsidian}-(example%20-%20obsidian-alpinejs%20-%20Obsidian%20v1.1.3)–[2022-12-14-00.15.04].gif)

#### fetch remote JSON

```html
<div data-x-data="{users: []}" 
	data-x-init="await fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => users = data)">
	<div>
		<template data-x-for="user in users"
			:key="user.id">
			<div style="display:inline-block; 
				width:50%;
				padding: .77em;">
				<div style="border-radius:10px; 
					padding: .77em;
					border: 1px solid #47A477;
					border-radius: 1em;">
					<div>
						<div data-x-text="user.name"></div>
						<div data-x-text="user.company.name"></div>
						<div data-x-text="user.phone"></div>
						<a data-x-bind:href="'mailto:' + user.email" 
							data-x-text="user.email"></a>     
						<a data-x-bind:href="'https://' + user.website" 
							data-x-text="user.website"></a>
					</div>
				</div>
			</div>
		</template>
	</div>
</div>
```

![](assets/CleanShot–{Obsidian}-(example%20-%20obsidian-alpinejs%20-%20Obsidian%20v1.1.3)–[2022-12-14-01.09.36].gif)

#### HTML 

```html
<h1 data-x-data="{ 
		self: '<span class=self>I</span>',
		palette: '<span style=color:red>❤️</span>',
		framework: '<strong><em>Alpine</em></strong>'}" 
	style="font-size:3.77em;">
    <span data-x-html="self"></span> 
    <span data-x-html="palette"></span> 
    <span data-x-html="framework"></span>
</h1>
```

![](assets/CleanShot–{Obsidian}-(example%20-%20obsidian-alpinejs%20-%20Obsidian%20v1.1.3)–[2022-12-14-01.27.25].png)

## why

- [ ] express a statement of intent & motivation for creating the plugin #task
