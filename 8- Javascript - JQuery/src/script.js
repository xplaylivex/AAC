function ToDo(element) {
  var that = this

  this.el = element
  this.ul = null
  this.input = null
  that.tasks = []

  this.initialize = function () {
    this.ul = $('#template ul')
    this.input = $('#template input')
    var button = $('#template #addTask')

    this.el.append(this.input)
    this.el.append(button)
    this.el.append(this.ul)
    this.initializeBinding(button)

    that.tasks = [
      "Tache 1",
      "Tache 2",
      "Tache 3",
      "Tache 4",
      "Tache 5"
    ]
    that.displayTasks()
    /*$.ajax({
      method: 'GET',
      url: './my_todo_list.json',
      dataType: 'json'
    }).done(function (responseText) {
      that.tasks = responseText
      that.displayTasks()
    }).fail(function() {
      alert('Coucou ça a merdé')
    })*/
  }

  this.displayTasks = function () {
    var _addTask = function(index) {
      if (index >= that.tasks.length) {
        return
      }
      var li = $('<li>' + that.tasks[index] + '<button data-index="' + index + '" class="delete">X</button></li>')
      li.hide()
      that.ul.append(li)
      li.fadeIn(300, function() {
        setTimeout(function() {
          _addTask(index + 1)
        }, 200)
      })
    }
    setTimeout(function() {
      _addTask(0)
    }, 200)
  }

  that.initializeBinding = function (button) {
    if (button) {
      button.click(function (event) {
        that.addTask(event, that)
      })
    }
  }

  that.addTask = function (event, obj) {
    if (obj.input.val().length > 0) {
      obj.tasks.push(obj.input.val())

      var li = $('<li>' + obj.input.val() + '<button data-index="' + (obj.tasks.length - 1) + '" class="delete">X</button></li>')
      li.hide()
      that.ul.append(li)
      li.fadeIn(300)
    }
  }

  that.remove = function (index) {
    $($('li', this.ul).get(index)).fadeOut(300, function () {
      that.tasks.splice(index, 1)
      $(this).remove()

      $('.delete', this.ul).map(function(a, b) {
        $(b).data('index', a)
      })
    })

  }
}

$(function() {
  var lists = $('.todolist')

  $('.todolist').map(function(elementIndex, element) {
    var my_todo_list = new ToDo($(element))
    my_todo_list.initialize()

    $(element).on('click', '.delete', function() {
      my_todo_list.remove($(this).data('index'))
    })
  })
})