import {http} from '../services/config'

export default {
    listar: () => {
        return http.get('events')
    },
    registrar: (evento) => {
        return http.post('register-event', evento)
    },
    apagar: (evento) => {
        return http.delete('delete-event', {data: evento})
    },
    atualizar: (evento) => {
        return http.put('update-event', evento);
    }
}