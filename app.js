class App{
    constructor(){
        this.notes = []

        this.$placeholder = document.querySelector('#placeholder')
        this.$form = document.querySelector('#form')
        this.$notes = document.querySelector('#notes')        
        this.$noteTitle = document.querySelector('#note-title')
        this.$noteText = document.querySelector('#note-text')
        this.$formButton = document.querySelector('#form-buttons')
        this.$formCloseButton = document.querySelector('#form-close-button')
        this.$modal = document.querySelector('.modal')
        this.addEventListener()
        

    }

    addEventListener(){
        document.body.addEventListener('click', event =>{
            this.handleFormClick(event)
            this.openModal(event)
            
        })

        this.$form.addEventListener('submit', event =>{
            event.preventDefault()
            const title = this.$noteTitle.value
            const text = this.$noteText.value
            const hasNote = title || text

            if(hasNote){
                this.addNote({title, text})
            }
        })
        this.$formCloseButton.addEventListener('click', event => {
            event.stopPropagation()
            this.closeForm(); 
         })
    }

    handleFormClick(event){
        const isFormClicked = this.$form.contains(event.target)

        const title = this.$noteTitle.value
        const text = this.$noteText.value
        const hasNote = title || text

        if(isFormClicked){

            this.openForm()            

        }else if (hasNote){
            this.addNote({title, text})
        }else{
            
            this.closeForm()
        }
    }

    openForm(){
        this.$form.classList.add('form-open')
        this.$noteTitle.style.display = 'block'
        this.$formButton.style.display = 'block'
    }
    closeForm(){
        this.$form.classList.remove('form-open')
        this.$noteTitle.style.display = 'none'
        this.$formButton.style.display = 'none'
        this.$noteTitle.value = ""
        this.$noteText.value = ""
    }

    openModal(event){
       if (event.target.closest('.note')){
            this.$modal.classList.toggle('open-modal')
       }
    }

  addNote({title, text}) {
    const newNote = {
      title,
      text,
      color: 'white',
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
    };
    this.notes = [...this.notes, newNote];
    this.displayNotes()
    this.closeForm()
    
  }
  displayNotes() {
    const hasNotes = this.notes.length > 0
    this.$placeholder.style.display = hasNotes ? 'none' : 'flex'

    this.$notes.innerHTML = this.notes.map(note => `
    <div style="background: ${note.color};" class="note">
      <div class="${note.title && 'note-title'}">${note.title}</div>
      <div class="note-text">${note.text}</div>
      <div class="toolbar-container">
        <div class="toolbar">
          <img class="toolbar-color" src="https://icon.now.sh/palette">
          <img class="toolbar-delete" src="https://icon.now.sh/delete">
        </div>
      </div>
    </div>
    `).join("")

    // this.$notes.style.
    // if(hasNotes) {
    //     this.$placeholder.style.display = 'none'
    // }else{
    //     this.$placeholder.style.display = 'flex';
    // }
  }
  

}

new App()
setTimeout(function() 
{ alert("This site is just for showcase purpose. Your notes will disappear after 5 mins")
 }, 4000)
function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 300000);
}
refresh()