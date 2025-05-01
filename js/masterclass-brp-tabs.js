const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// event listener Tab menu
tabs.forEach( (tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
    tabs.forEach((tab) => {
        // deactivate all tabs
       tab.children[0].classList.remove(
        'border-epicOrange',
        'border-b-4',
        'md-border-b-0'
       )
    })

    // hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    // activate new tab and panel based on the target (data-target=panel-1)
    e.target.classList.add('border-epicOrange','border-b-4')
    
    const classString = e.target.getAttribute('data-target')

   document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
}


