import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

import Alpine from 'alpinejs'

Alpine.prefix("data-x-")
// import Toolkit from '@alpine-collective/toolkit'
// Alpine.plugin(Toolkit)
Alpine.start()

// let data = { count: 1 }
// let reactiveData = Alpine.reactive(data)

// console.log(data.count) // 1
// console.log(reactiveData.count) // 1

// reactiveData.count = 2

// console.log(data.count) // 2
// console.log(reactiveData.count) // 2

// Alpine.directive('foo', )
// window.Alpine = Alpine
// window.Alpine.start()

export default class MyPlugin extends Plugin {

	async onload() {
		console.log(`Alpine.js ${Alpine.version} loaded`);
	}

	onunload() {
		console.log(`Alpine.js ${Alpine.version} unloaded`);
	}

}