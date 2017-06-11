// Au chargement on ait une initialisation de la todolist
// Binder des evenements
// Executer des fonctions grace aux evenements

function Ajax() {
	var that = this

	this.xhr = null

	that.initialize = function () {
		if (window.XMLHttpRequest || window.ActiveXObject) {
	        if (window.ActiveXObject) {
	            try {
	                this.xhr = new ActiveXObject("Msxml2.XMLHTTP");
	            } catch(e) {
	                this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
	            }
	        } else {
	            this.xhr = new XMLHttpRequest();
	        }
	    } else {
	        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
	        return;
	    }
	}

	this.setUrlAndHTTPVerb = function (url, httpVerb) {
		that.xhr.open(httpVerb, url)
	}

	this.onSuccess = function (callback) {
		that.xhr.onload = callback
	}

	this.onError = function (callback) {
		that.xhr.onerror = callback
	}

	this.trigger = function (data) {
		that.xhr.send(typeof data !== 'undefined' ? data : null)
	}

	that.initialize();
}

function ToDo(element) {
	var that = this

	this.el = element
	that.input = null
	that.button = null
	that.ul = null
	that.tasks = []

	this.initialize = function () {
		this.input = document.createElement('input')
		this.button = document.createElement('button')
		this.ul = document.createElement('ul')
		
		this.input.type = "text"
		this.button.type = "button"
		this.button.id = "addTask"
		this.button.textContent = "Ajouter une tache"

		this.el.appendChild(this.input)
		this.el.appendChild(this.button)
		this.el.appendChild(this.ul)
		this.initializeBinding(this.button)

		var ajax = new Ajax()
		ajax.setUrlAndHTTPVerb('./my_todo_list.json', 'GET')
		ajax.onSuccess(function () {
			if (this.status >= 200 && this.status < 300) {
				that.tasks = JSON.parse(this.responseText)
				that.displayTasks()
			} else {
				alert('Coucou ça a merdé')
			}
		})
		// SIMULATION DU TEMPS DE LA REQUETE
		setTimeout(ajax.trigger, 3000)
	}

	this.displayTasks = function () {
		this.ul.innerHTML = ''
		for (var index in this.tasks) {
			var li = document.createElement('li')
			li.textContent = this.tasks[index]
			this.ul.appendChild(li)
		}
	}

	that.initializeBinding = function (button) {
		if (button) {
			button.addEventListener('click', function (event) {
				that.addTask(event, that)
			})
		}
	}

	that.addTask = function (event, obj) {
		if (obj.input && obj.input.value.length > 0) {
			obj.tasks.push(obj.input.value)
			obj.displayTasks()
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var lists = document.getElementsByClassName('todolist')

	for (var index = 0 ; index < lists.length ; ++index) {
		var my_todo_list = new ToDo(lists[index])
		my_todo_list.initialize()
	}
})