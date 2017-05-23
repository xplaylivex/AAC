var html = [
	{
		tagName: 'div',
		className: "",
		text: "",
		childrens: [
			{
				tagName: 'span',
				className: "label primary",
				text: "Primary Label",
				childrens: []
			},
			{
				tagName: 'span',
				className: "label secondary",
				text: "Secondary Label",
				childrens: []
			},
			{
				tagName: 'span',
				className: "label success",
				text: "Success Label",
				childrens: []
			},
			{
				tagName: 'span',
				className: "label alert",
				text: "Alert Label",
				childrens: []
			},
			{
				tagName: 'span',
				className: "label warning",
				text: "Warning Label",
				childrens: []
			},
		]
	},
	{
		tagName: 'div',
		className: '',
		text: '',
		childrens: [
			{
				tagName: 'div',
				className: 'callout secondary',
				text: '',
				childrens: [
					{
						tagName: 'h5',
						className: '',
						text: 'This is a secondary callout',
						childrens: []
					},
					{
						tagName: 'p',
						className: '',
						text: 'It has an easy to override visual style, and is appropriately subdued.',
						childrens: []
					},
					{
						tagName: 'a',
						className: '',
						text: 'It\'s dangerous to go alone, take this.',
						childrens: []
					},
				]
			}
		]
	}
]

function createHTMLTag(tagName, text, className) {
	var tag = document.createElement(tagName)
	tag.className = className
	tag.textContent = text
	return tag
}

function addChildren(parent_tag, html_tag_array) {
	if (html_tag_array.length === 0) {
		return
	}

	for (var index in html_tag_array) {
		var node = createHTMLTag(
			html_tag_array[index].tagName,
			html_tag_array[index].text,
			html_tag_array[index].className
		)
		parent_tag.appendChild(node)

		if (html_tag_array[index].childrens.length !== 0) {
			addChildren(node, html_tag_array[index].childrens);
		}
	}
}

addChildren(document.body, html)