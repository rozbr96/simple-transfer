
const availableOptions = new Array(10).fill(null).map((_, index) => `Item #${index + 1}`)
const selectedOptions = []


function __create_inner_text(label) {
  const inner_text_element = document.createElement('span')

  inner_text_element.innerText = label

  return inner_text_element
}

function __create_list_item(value, label) {
  if (label === undefined) label = value

  const list_item = document.createElement('li')

  list_item.setAttribute('data-value', value)
  list_item.setAttribute('data-label', label)
  list_item.appendChild(__create_inner_text(label))
  list_item.addEventListener('click', __move)

  return list_item
}

function __get_list_options(list_id) {
  return document
    .getElementById(list_id)
    .querySelectorAll('li')
    .values()
    .map((element) => ({
      value: element.getAttribute('data-value'),
      label: element.getAttribute('data-label'),
    }))
}

function __move() {
  const other_list_id = this.parentElement.getAttribute('data-other-list-id')
  const other_list = document.getElementById(other_list_id)
  other_list.appendChild(this)
}

function get_available_options() {
  return __get_list_options('availableOptionsList')
}

function get_selected_options() {
  return __get_list_options('selectedOptionsList')
}

function init_list(list_id, options) {
  options.forEach((option) => {
    const list = document.getElementById(list_id)

    list_item = __create_list_item(option)

    list.appendChild(list_item)
  })
}


init_list('availableOptionsList', availableOptions)
init_list('selectedOptionsList', selectedOptions)
