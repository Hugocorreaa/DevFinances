const Modal = {
    open(){
        // Getting modal-overlay active and open the modal
        // Abrir modal
        // Adicionar a class active ao modal
        let modal = document.querySelector(".modal-overlay").classList.add('active')        
    },

    close(){
        // Fechar modal
        // Remover a class active do modal
        let remove = document.querySelector('.modal-overlay').classList.remove('active')
    }


}