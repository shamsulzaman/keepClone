class App{
    constructor(){
        this.$form = document.querySelector('#form')
        this.addEventListener()
        this.$noteTitle = document.querySelector('#note-title')
        this.$formButton = document.querySelector('#form-buttons')

    }

    addEventListener(){
        document.body.addEventListener('click', event =>{
            this.handleFormClick(event)
            
        })
    }

    handleFormClick(event){
        const isFormClicked = this.$form.contains(event.target)

        if(isFormClicked){

            this.openForm()            

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
    }
}

new App()